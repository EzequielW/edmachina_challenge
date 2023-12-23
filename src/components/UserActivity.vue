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
            >
                September 2023
            </div>
            <q-timeline color="primary-light">
                <q-timeline-entry icon="email">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="chat">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="column">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry class="timeline__month-title">
                    <div class="subtitle1 text-weight-bold text-primary-light">
                        August 2023
                    </div>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry class="timeline__month-title">
                    <div class="subtitle1 text-weight-bold text-primary-light">
                        July 2023
                    </div>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>

                <q-timeline-entry icon="school">
                    <q-card flat>
                        <q-card-section>
                            <div class="row justify-between q-pb-sm">
                                <div class="subtitle1 text-weight-bold">
                                    <span class="text-primary-light">
                                        Email sent
                                    </span>
                                    by Gerardo Moyano
                                </div>
                                <div class="subtitle1 text-weight-bold">
                                    Sep 23, 2023 - 1:45pm
                                </div>
                            </div>
                            <div class="row">
                                <div class="subtitle1 text-weight-bold">
                                    Upselling email sent.
                                    <a class="text-primary-light" href="#"
                                        >View Email</a
                                    >
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>
            </q-timeline>
        </q-scroll-area>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const selectedYear = ref<string>('');
        const selectedUser = ref();
        const searchTerm = ref<string>('');

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

        return {
            selectedYear,
            selectedUser,
            searchTerm,
            yearList,
            userList,
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