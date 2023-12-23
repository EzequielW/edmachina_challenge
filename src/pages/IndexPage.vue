<template>
    <q-page class="row justify-evenly">
        <div class="col-3 q-py-md q-pl-md">
            <q-scroll-area style="height: 1600px; width: 100%" :visible="true">
                <div class="q-pb-sm">
                    <StudentCard />
                </div>
                <draggable
                    v-model="todos"
                    class="q-gutter-sm"
                    group="people"
                    item-key="id"
                    handle=".handle"
                    animation="150"
                >
                    <template #item="{ element }">
                        <component :is="element.component"></component>
                    </template>
                </draggable>
            </q-scroll-area>
        </div>
        <div class="col-9 q-py-md">
            <div class="row justify-between q-px-md">
                <q-breadcrumbs class="text-weight-bold">
                    <q-breadcrumbs-el label="Record Details" />
                    <q-breadcrumbs-el label="AYSI32392" />
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
                        style="flex-wrap: nowrap; gap: 1.5rem"
                    >
                        <StatsCard
                            v-for="(_, index) in [1, 2, 3, 4, 5]"
                            :key="index"
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
                            <UserActivity />
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
import { ComponentInstance } from 'components/models';
import { defineComponent, ref, shallowRef } from 'vue';
import draggable from 'vuedraggable';

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
        const todos = shallowRef<ComponentInstance[]>([
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

        return { todos, selectedTab, selectedSubtab };
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
</style>

<style lang="scss">
.q-tab-panels .q-panel {
    overflow: visible;
}
</style>