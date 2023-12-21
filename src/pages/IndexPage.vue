<template>
    <q-page class="row justify-evenly">
        <div class="col-3 q-pt-md q-pl-md">
            <div class="q-pb-sm">
                <StudentCard />
            </div>
            <div class="column">
                <AboutUser />
            </div>
        </div>
        <div class="col-9 q-pt-md q-px-md">
            <div class="row justify-between">
                <q-breadcrumbs class="text-weight-bold">
                    <q-breadcrumbs-el label="Record Details" />
                    <q-breadcrumbs-el label="AYSI32392" />
                </q-breadcrumbs>
                <q-btn flat round color="secondary" icon="app_registration" />
            </div>

            <q-tabs v-model="selectedTab" indicator-color="primary">
                <q-tab name="overview" label="Overview" no-caps />
                <q-tab name="enrollment" label="Enrollment" no-caps />
                <q-tab name="academic" label="Academic" no-caps />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="selectedTab" animated class="bg-transparent">
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

                    <q-tab-panels v-model="selectedSubtab" animated>
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
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

import UserActivity from 'src/components/UserActivity.vue';
import StudentCard from 'src/components/StudentCard.vue';
import StatsCard from 'src/components/StatsCard.vue';
import AboutUser from 'src/components/AboutUser.vue';

export default defineComponent({
    name: 'IndexPage',
    components: {
        UserActivity,
        StudentCard,
        StatsCard,
        AboutUser,
    },
    setup() {
        const todos = ref<Todo[]>([
            {
                id: 1,
                content: 'ct1',
            },
            {
                id: 2,
                content: 'ct2',
            },
            {
                id: 3,
                content: 'ct3',
            },
            {
                id: 4,
                content: 'ct4',
            },
            {
                id: 5,
                content: 'ct5',
            },
        ]);
        const meta = ref<Meta>({
            totalCount: 1200,
        });
        const selectedTab = ref<string>('overview');
        const selectedSubtab = ref<string>('activity');

        return { todos, meta, selectedTab, selectedSubtab };
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
</style>