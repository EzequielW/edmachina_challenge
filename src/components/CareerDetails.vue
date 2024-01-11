<template>
    <q-expansion-item
        expand-icon-toggle
        icon="drag_indicator"
        class="text-body1 text-weight-bold"
        label="Career Details"
        header-class="handle"
        default-opened
    >
        <q-card>
            <q-card-section class="column text-body2 text-weight-bold">
                <div class="column">
                    <div style="padding-bottom: 5px">Career Name:</div>
                    <q-select
                        outlined
                        dense
                        v-model="selectedCareer"
                        :options="usersCareers"
                        :option-label="(item) => item.career.name"
                    />
                </div>

                <div class="column">
                    <div>Career ID:</div>
                    <div>
                        {{
                            selectedCareer ? selectedCareer.career.careerId : ''
                        }}
                    </div>
                </div>

                <div class="column">
                    <div>Type:</div>
                    <div>
                        {{
                            selectedCareer
                                ? selectedCareer.career.careerType.name
                                : ''
                        }}
                    </div>
                </div>

                <div class="column">
                    <div>Modality:</div>
                    <div>
                        {{ selectedCareer ? selectedCareer.modality.name : '' }}
                    </div>
                </div>

                <div class="column">
                    <div>Status:</div>
                    <div>{{ selectedCareer ? selectedCareer.status : '' }}</div>
                </div>

                <div class="column">
                    <div>Student ID:</div>
                    <div>{{ studentId }}</div>
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
import { defineComponent, ref, watch } from 'vue';
import { UsersCareers } from './models';

export default defineComponent({
    props: {
        usersCareers: {
            type: Object as () => UsersCareers[],
            required: true,
        },
        studentId: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const selectedCareer = ref();

        watch(
            () => props.usersCareers,
            () => {
                if (props.usersCareers.length > 0) {
                    selectedCareer.value = props.usersCareers[0];
                }
            }
        );

        return {
            selectedCareer,
        };
    },
});
</script>

<style lang="scss" scoped>
.q-card__section {
    gap: 10px;
}
</style>