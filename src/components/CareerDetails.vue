<template>
    <q-expansion-item
        expand-icon-toggle
        icon="drag_indicator"
        class="text-body1 text-weight-bolder"
        label="Career Details"
        header-class="handle"
        default-opened
    >
        <q-card>
            <q-card-section class="column text-body2 text-weight-bold">
                <div class="column">
                    <div>Career Name:</div>
                    <q-select
                        outlined
                        dense
                        v-model="selectedCareer"
                        :options="careerList"
                    />
                </div>

                <div class="column">
                    <div>Career ID:</div>
                    <div>0398P</div>
                </div>

                <div class="column">
                    <div>Type:</div>
                    <div>Graduate</div>
                </div>

                <div class="column">
                    <div>Modality:</div>
                    <div>On-Campus</div>
                </div>

                <div class="column">
                    <div>Status:</div>
                    <div>Enrollment</div>
                </div>

                <div class="column">
                    <div>Student ID:</div>
                    <div>AYSI32392</div>
                </div>

                <div class="column">
                    <div>Cohort:</div>
                    <div>A1 2023</div>
                </div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const selectedCareer = ref({
            id: 1,
            label: 'Software Engineering',
        });

        const careerList = ref([
            {
                id: 1,
                label: 'Software Engineering',
            },
            {
                id: 2,
                label: 'Medical Assistant',
            },
        ]);

        return {
            selectedCareer,
            careerList,
        };
    },
});
</script>

<style lang="scss" scoped>
.q-card__section {
    gap: 1rem;
}
</style>