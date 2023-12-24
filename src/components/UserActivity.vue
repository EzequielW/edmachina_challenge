<template>
    <div class="q-px-lg q-py-md">
        <div class="row justify-between q-pb-md">
            <div class="text-body2 text-weight-bold q-pb-lg">Timeline</div>
            <div class="row" style="gap: 11px">
                <q-select
                    outlined
                    dense
                    v-model="selectedYear"
                    :options="yearList"
                    label="Year"
                    clearable
                    style="min-width: 85px"
                />
                <q-select
                    outlined
                    dense
                    v-model="selectedUser"
                    :options="userList"
                    :option-label="
                        (item) => item.firstName + ' ' + item.lastName
                    "
                    label="Filter by User"
                    clearable
                    style="min-width: 140px"
                />
                <q-input
                    outlined
                    dense
                    v-model="searchTerm"
                    label="Search..."
                    style="min-width: 240px"
                >
                    <template v-slot:append>
                        <q-icon name="search" color="secondary" size="xs" />
                    </template>
                </q-input>
            </div>
        </div>

        <q-scroll-area style="height: 800px; width: 100%" :visible="true">
            <div
                class="subtitle1 text-weight-bold text-primary-light"
                style="padding-left: 40px"
                v-if="Object.keys(activitesPerMonth).length > 0"
            >
                {{ formatActivityMonth(Object.keys(activitesPerMonth)[0]) }}
            </div>
            <q-timeline color="primary-light">
                <template
                    v-for="(month, key, index) in activitesPerMonth"
                    :key="'activity_month_' + index"
                >
                    <q-timeline-entry
                        v-if="index !== 0"
                        class="timeline__month-title"
                    >
                        <div
                            class="subtitle1 text-weight-bold text-primary-light"
                        >
                            {{ formatActivityMonth(key.toString()) }}
                        </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                        v-for="(activity, aIndex) in month"
                        :icon="
                            getIcon(activity.type)
                                ? getIcon(activity.type)
                                : undefined
                        "
                        :class="
                            !getIcon(activity.type) &&
                            'q-timeline__entry--no-icon'
                        "
                        :key="'activity_' + aIndex"
                    >
                        <q-card flat>
                            <q-card-section>
                                <div class="row justify-between q-pb-sm">
                                    <div class="subtitle1 text-weight-bold">
                                        <span class="text-primary-light">
                                            {{ getTitle(activity.type) }}
                                        </span>
                                        {{
                                            (activity.type === 'call'
                                                ? ' from '
                                                : ' by ') +
                                            activity.user.firstName +
                                            ' ' +
                                            activity.user.lastName
                                        }}
                                    </div>
                                    <div class="subtitle1 text-weight-bold">
                                        {{
                                            formatActivityDate(
                                                activity.createdAt
                                            )
                                        }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div
                                        class="subtitle1 text-weight-bold"
                                        style="white-space: pre"
                                    >
                                        {{ activity.description }}
                                        <a
                                            v-if="activity.url"
                                            class="text-primary-light"
                                            href="#"
                                        >
                                            View Email
                                        </a>
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </q-timeline-entry>
                </template>
            </q-timeline>
        </q-scroll-area>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserActivity } from './models';
import { computed } from 'vue';
import moment from 'moment';

export default defineComponent({
    props: {
        userActivities: {
            type: Object as () => UserActivity[],
            required: true,
        },
    },
    setup(props) {
        const selectedYear = ref<string>('');
        const selectedUser = ref();
        const searchTerm = ref<string>('');

        const activitesPerMonth = computed(() => {
            const months: any = {};

            props.userActivities.forEach((activity) => {
                const monthKey = activity.createdAt.slice(0, 7);

                if (!(monthKey in months)) {
                    months[monthKey] = [];
                }
                months[monthKey].push(activity);
            });

            return months;
        });

        const yearList = ref(['2023', '2022']);
        const userList = ref([
            {
                id: 1,
                firstName: 'Gerardo',
                lastName: 'Moyano',
            },
            {
                id: 2,
                firstName: 'Jean',
                lastName: 'Charleton',
            },
        ]);

        const getIcon = (type: string) => {
            switch (type) {
                case 'email':
                    return 'email';
                case 'chat':
                    return 'chat';
                case 'call':
                    return 'call';
                case 'assigment':
                    return 'school';
                case 'initial_contact':
                    return 'email';
                default:
                    return '';
            }
        };

        const getTitle = (type: string) => {
            switch (type) {
                case 'email':
                    return 'Email Sent';
                case 'chat':
                    return 'Chat Meeting';
                case 'call':
                    return 'Call';
                case 'assigment':
                    return 'LMS Assigment Delivered';
                case 'initial_contact':
                    return 'Initial Contact';
                case 'tag_added':
                    return 'Tags Added';
                default:
                    return '';
            }
        };

        const formatActivityMonth = (date: string) => {
            return moment(date, 'YYYY-MM').format('MMMM YYYY');
        };

        const formatActivityDate = (date: string) => {
            return moment(date).format('MMM D, YYYY - h:mm a');
        };

        return {
            selectedYear,
            selectedUser,
            searchTerm,
            yearList,
            userList,
            activitesPerMonth,
            getIcon,
            getTitle,
            formatActivityMonth,
            formatActivityDate,
        };
    },
});
</script>

<style lang="scss" scoped>
.q-card {
    background-color: #f0f0f0;
}

a {
    text-decoration: none;
}
</style>