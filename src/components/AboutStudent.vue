<template>
    <q-expansion-item
        expand-icon-toggle
        icon="drag_indicator"
        class="text-body1 text-weight-bolder"
        label="Sobre el Estudiante"
        header-class="handle"
        default-opened
    >
        <q-card>
            <q-card-section class="column text-body2 text-weight-bold">
                <div>Periodo: {{ studentRisk?.period }}</div>
                <div>Status: {{ studentRisk?.status }}</div>
                <div>Colegio: {{ studentRisk?.school }}</div>
                <div>Mod. Adminision: {{ studentRisk?.admission }}</div>
                <div>
                    Segmento:
                    {{
                        studentRisk?.segment
                            ? studentRisk?.segment
                            : 'Sin Información'
                    }}
                </div>
                <div>
                    Segmento Detalle:
                    {{
                        studentRisk?.segmentDetails
                            ? studentRisk?.segmentDetails
                            : 'Sin Información'
                    }}
                </div>

                <div class="column justify-start q-pt-sm">
                    <div class="text-body1 text-weight-bold">
                        Detalle Riesgo de Ingreso
                    </div>
                    <q-separator class="q-mt-sm q-mb-md" />
                    <div
                        v-for="classRisk in studentRisk?.classesRisk"
                        :key="'classRisk_' + classRisk.id"
                        class="row"
                    >
                        <div class="col-4">
                            <div>{{ classRisk.name }}:</div>
                        </div>
                        <div class="col-8" style="min-height: 40px">
                            <div>
                                {{
                                    classRisk.risk
                                        ? classRisk.risk + '%'
                                        : 'Riesgo Sin Definir'
                                }}
                                (Nota:
                                {{
                                    classRisk.score
                                        ? classRisk.score
                                        : 'Sin Información'
                                }})
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StudentRisk } from './models';

export default defineComponent({
    props: {
        studentRisk: {
            type: Object as () => StudentRisk,
        },
    },
});
</script>

<style lang="scss" scoped>
.q-card__section {
    gap: 1rem;
}

.row {
    flex-wrap: nowrap;
    height: fit-content;
}
</style>