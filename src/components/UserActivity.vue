<template>
    <div class="q-px-lg q-py-md">
        <div class="row justify-between items-center q-pb-lg">
            <div class="text-body1 text-weight-bold">Timeline</div>
            <div class="row" style="gap: 10px">
                <q-select
                    class="select-body2"
                    outlined
                    dense
                    v-model="selectedYear"
                    :options="yearList"
                    label="Year"
                    clearable
                    style="min-width: 85px"
                />
                <q-select
                    class="select-body2"
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
                    class="input-body2"
                    outlined
                    dense
                    v-model="searchTerm"
                    label="Search..."
                    style="min-width: 240px"
                >
                    <template v-slot:append>
                        <q-icon name="search" color="secondary" size="16px" />
                    </template>
                </q-input>
            </div>
        </div>

        <q-scroll-area
            ref="scrollArea"
            :style="{
                height: '800px',
                width: '100%',
                'padding-right': addScrollPadding ? '14px' : '0px',
            }"
            :visible="true"
        >
            <div
                class="text-body2 text-weight-bold text-primary-light"
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
                            class="text-body2 text-weight-bold text-primary-light"
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
                                    <div class="text-body2 text-weight-bold">
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
                                    <div
                                        class="text-body2 text-weight-bold"
                                        style="color: #5e5873"
                                    >
                                        {{
                                            formatActivityDate(
                                                activity.createdAt
                                            )
                                        }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div
                                        class="text-body2 text-weight-bold"
                                        style="
                                            white-space: pre;
                                            color: #5e5873;
                                            line-height: 21px;
                                        "
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
import { defineComponent, onMounted, ref } from 'vue';
import { User, UserActivity } from './models';
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
        const scrollArea = ref();

        const activitesPerMonth = computed(() => {
            const months: any = {};

            props.userActivities.forEach((activity) => {
                const monthKey = activity.createdAt.slice(0, 7);
                const activityYear = activity.createdAt.slice(0, 4);

                if (
                    selectedUser.value &&
                    activity.user.id !== selectedUser.value.id
                ) {
                    return;
                }

                if (selectedYear.value && activityYear !== selectedYear.value) {
                    return;
                }

                if (
                    searchTerm.value &&
                    !activity.description
                        .toLowerCase()
                        .includes(searchTerm.value.toLowerCase())
                ) {
                    return;
                }

                if (!(monthKey in months)) {
                    months[monthKey] = [];
                }
                months[monthKey].push(activity);
            });

            return months;
        });

        const userList = computed(() => {
            const users: User[] = [];

            props.userActivities.forEach((activity) => {
                if (!users.some((user) => user.id === activity.user.id)) {
                    users.push(activity.user);
                }
            });

            return users;
        });

        const yearList = computed(() => {
            const years: string[] = [];

            props.userActivities.forEach((activity) => {
                const activityYear = activity.createdAt.slice(0, 4);

                if (!years.some((year) => year === activityYear)) {
                    years.push(activityYear);
                }
            });

            return years;
        });

        const addScrollPadding = computed(() => {
            let addPadding = false;

            if (scrollArea.value) {
                const scrollData = scrollArea.value.getScroll();
                if (
                    scrollData.verticalContainerSize < scrollData.verticalSize
                ) {
                    addPadding = true;
                }
            }

            return addPadding;
        });

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
            scrollArea,
            addScrollPadding,
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

<style lang="scss">
.select-body2 .q-field__label,
.q-field {
    font-size: 12px;
    color: $secondary;
}

.select-body2 .q-field__control {
    border-radius: 5px;
}

.input-body2 .q-field__label,
.q-field {
    font-size: 12px;
    color: $secondary;
}

.input-body2 .q-field__control {
    border-radius: 5px;
}

ul {
    margin-top: 8px;
    margin-bottom: 0;
}
</style>