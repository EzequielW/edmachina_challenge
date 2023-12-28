<template>
    <q-page class="row justify-evenly">
        <div
            class="q-py-md q-pl-md"
            :class="{
                'col-3': $q.screen.gt.md,
                'col-10': $q.screen.lt.lg,
                'col-12': $q.screen.lt.md,
            }"
        >
            <q-scroll-area
                class="draggable-scroll-area full-width"
                :visible="true"
            >
                <div class="col">
                    <div class="q-pb-sm draggable-component">
                        <StudentCard
                            :name="
                                user ? user.firstName + ' ' + user.lastName : ''
                            "
                            :recordId="user ? user.recordId : ''"
                            :status="user ? user.status : 0"
                        />
                    </div>
                    <draggable
                        v-model="draggableComponents"
                        class="q-gutter-sm q-pb-sm"
                        group="people"
                        item-key="id"
                        handle=".handle"
                        animation="150"
                    >
                        <template #item="{ element }">
                            <component
                                class="draggable-component"
                                :is="element.component"
                                :userAbout="userAbout"
                                :usersCareers="userCareers"
                                :studentId="user ? user.recordId : ''"
                                :studentRisk="user ? user.studentRisk : {}"
                            />
                        </template>
                    </draggable>
                    <q-card>
                        <q-card-section>
                            <div
                                class="text-primary-light text-weight-bold text-body2 cursor-pointer"
                            >
                                Manage Widgets
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </q-scroll-area>
        </div>
        <div
            class="q-py-md"
            :class="{
                'col-9': $q.screen.gt.md,
                'col-12': $q.screen.lt.lg,
            }"
        >
            <div class="row justify-between q-px-md">
                <q-breadcrumbs class="text-weight-bold">
                    <q-breadcrumbs-el label="Record Details" />
                    <q-breadcrumbs-el :label="user ? user.recordId : ''" />
                </q-breadcrumbs>
                <q-btn flat round color="secondary" icon="app_registration" />
            </div>

            <q-tabs
                class="q-px-md"
                v-model="selectedTab"
                indicator-color="primary"
            >
                <q-tab name="overview" label="Overview" no-caps />
                <q-tab name="enrollment" label="Enrollment" no-caps />
                <q-tab name="academic" label="Academic" no-caps />
            </q-tabs>

            <q-separator class="q-mx-md" />

            <q-tab-panels
                v-model="selectedTab"
                animated
                class="bg-transparent q-pa-md"
            >
                <q-tab-panel name="overview">
                    <div
                        class="row justify-evenly q-pb-lg q-pt-md"
                        :class="{
                            'no-wrap': $q.screen.gt.md,
                        }"
                        style="gap: 1.5rem"
                    >
                        <StatsCard
                            class="stats-card"
                            :icon="'today'"
                            :title="'Record Age'"
                            :stat="
                                user
                                    ? formatTimeSince(user.createdAt).replace(
                                          ' ago',
                                          ''
                                      )
                                    : ''
                            "
                            :subtitleLeft="'Created on'"
                            :subtitleRight="
                                user ? formatMonthAndYear(user.createdAt) : ''
                            "
                        />
                        <StatsCard
                            class="stats-card"
                            :icon="'check_circle'"
                            :title="'Status'"
                            :stat="
                                user
                                    ? user.status
                                        ? 'Active'
                                        : 'Inactive'
                                    : 'Inactive'
                            "
                            :subtitleLeft="'Updated'"
                            :subtitleRight="
                                user ? formatMonthAndYear(user.updatedAt) : ''
                            "
                        />
                        <StatsCard
                            class="stats-card"
                            :icon="'location_on'"
                            :title="'Country'"
                            :stat="user ? user.country.name : ''"
                            :subtitleLeft="'State'"
                            :subtitleRight="user ? user.state.name : ''"
                        />
                        <StatsCard
                            class="stats-card"
                            :icon="'contact_page'"
                            :title="'Last Contact'"
                            :stat="
                                user ? formatTimeSince(user.lastContact) : ''
                            "
                            :subtitleLeft="
                                user ? formatMonthAndYear(user.lastContact) : ''
                            "
                            :subtitleRight="
                                user ? formatTime(user.lastContact) : ''
                            "
                        />
                        <StatsCard
                            class="stats-card"
                            :icon="'show_chart'"
                            :title="'Last Activity'"
                            :stat="
                                user ? formatTimeSince(user.lastActivity) : ''
                            "
                            :subtitleLeft="
                                user
                                    ? formatMonthAndYear(user.lastActivity)
                                    : ''
                            "
                            :subtitleRight="
                                user ? formatTime(user.lastActivity) : ''
                            "
                        />
                    </div>

                    <q-tabs
                        class="overview-tabs"
                        v-model="selectedSubtab"
                        :align="'left'"
                        inline-label
                        indicator-color="transparent"
                    >
                        <q-tab name="activity" label="Activity" no-caps />
                        <q-tab
                            name="emails"
                            label="Emails"
                            icon="mail"
                            no-caps
                        />
                        <q-tab
                            name="calls"
                            label="Calls"
                            icon="phone"
                            no-caps
                        />
                    </q-tabs>

                    <q-tab-panels
                        class="overview-tab-panels"
                        v-model="selectedSubtab"
                        animated
                    >
                        <q-tab-panel name="activity">
                            <UserActivity :userActivities="activities" />
                        </q-tab-panel>
                        <q-tab-panel name="emails">
                            <div class="text-h6">Emails</div>
                        </q-tab-panel>
                        <q-tab-panel name="calls">
                            <div class="text-h6">Calls</div>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-tab-panel>

                <q-tab-panel name="enrollment">
                    <div class="text-h6">Enrollment</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="academic">
                    <div class="text-h6">Academic</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
            </q-tab-panels>
        </div>
    </q-page>
</template>

<script lang="ts">
import {
    ComponentInstance,
    FullUser,
    UserAbout,
    UserActivity as UserActivityType,
    UsersCareers,
} from 'components/models';
import { defineComponent, onMounted, ref, shallowRef } from 'vue';
import { api } from 'src/boot/axios';
import draggable from 'vuedraggable';
import moment from 'moment';

import UserActivity from 'src/components/UserActivity.vue';
import StudentCard from 'src/components/StudentCard.vue';
import StatsCard from 'src/components/StatsCard.vue';
import AboutUser from 'src/components/AboutUser.vue';
import AboutStudent from 'src/components/AboutStudent.vue';
import CareerDetails from 'src/components/CareerDetails.vue';

export default defineComponent({
    name: 'IndexPage',
    components: {
        UserActivity,
        StudentCard,
        StatsCard,
        AboutUser,
        AboutStudent,
        CareerDetails,
        draggable,
    },
    setup() {
        const userId = 3;
        const user = ref<FullUser>();
        const userAbout = ref<UserAbout>();
        const activities = ref<UserActivityType[]>([]);
        const userCareers = ref<UsersCareers[]>([]);

        const draggableComponents = shallowRef<ComponentInstance[]>([
            {
                id: 1,
                component: AboutStudent,
            },
            {
                id: 2,
                component: AboutUser,
            },
            {
                id: 3,
                component: CareerDetails,
            },
        ]);
        const selectedTab = ref<string>('overview');
        const selectedSubtab = ref<string>('activity');

        const getUser = async () => {
            try {
                const response = await api.get(`/users/${userId}`);

                user.value = response.data;

                if (user.value) {
                    userAbout.value = {
                        firstName: user.value.firstName,
                        lastName: user.value.lastName,
                        email: user.value.email,
                        phone: user.value.phone,
                        category: user.value.category,
                        country: user.value.country,
                    };
                }
            } catch (error) {
                console.log(error);
            }
        };

        const getActivities = async () => {
            try {
                const response = await api.get(`/activities?userId=${userId}`);
                activities.value = response.data;
            } catch (error) {
                console.log(error);
            }
        };

        const getCareers = async () => {
            try {
                const response = await api.get(
                    `/users_careers?userId=${userId}`
                );
                userCareers.value = response.data;
            } catch (error) {
                console.log(error);
            }
        };

        const formatMonthAndYear = (date: string) => {
            return moment(date).format('MMM D, YYYY');
        };

        const formatTimeSince = (date: string) => {
            return moment(date).startOf('day').fromNow();
        };

        const formatTime = (date: string) => {
            return moment(date).format('h:mma');
        };

        onMounted(() => {
            getUser();
            getActivities();
            getCareers();
        });

        return {
            draggableComponents,
            selectedTab,
            selectedSubtab,
            user,
            userAbout,
            activities,
            userCareers,
            formatMonthAndYear,
            formatTimeSince,
            formatTime,
        };
    },
});
</script>

<style lang="scss" scoped>
.q-breadcrumbs {
    color: $primary-light;
}

.q-tab-panel {
    padding: 0;
}

.overview-tabs .q-tab--active {
    background: #fff;
}

.overview-tabs .q-tab--inactive {
    opacity: 0.4;
}

.overview-tabs .q-tab {
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

.overview-tabs {
    background-color: transparent;
    width: fit-content;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

.overview-tab-panels {
    border-radius: 0 8px 8px 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}

.draggable-scroll-area {
    height: 1600px;
}

.stats-card {
    width: 100%;
}

@media (max-width: $breakpoint-md-max) {
    .draggable-scroll-area {
        height: 400px;
    }

    .stats-card {
        width: auto;
        min-width: 200px;
    }
}

@media (max-width: 800px) {
    .stats-card {
        width: 100%;
    }
}
</style>

<style lang="scss">
.q-tab-panels .q-panel {
    overflow: visible;
}
</style>