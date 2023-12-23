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
                <div>Periodo: 2023 - 1</div>
                <div>Status: Alumno Regular</div>
                <div>Colegio: Aldebaran</div>
                <div>Mod. Adminision: Centro Pre</div>
                <div>Segmento: Sin Información</div>
                <div>Segmento Detalle: Sin Información</div>

                <div class="column justify-start q-pt-sm">
                    <div class="text-body1 text-weight-bold">
                        Detalle Riesgo de Ingreso
                    </div>
                    <q-separator class="q-my-sm" />
                    <div class="row q-pt-sm">
                        <div class="col-4">
                            <div>Matemática:</div>
                        </div>
                        <div class="col-8">
                            <div>
                                Riesgo Sin Definir (Nota: Sin Información)
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">Química:</div>
                        <div class="col-8">
                            Riesgo Sin Definir (Nota: Sin Información)
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">Programación:</div>
                        <div class="col-8">
                            Riesgo Sin Definir (Nota: Sin Información)
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">Comunicación:</div>
                        <div class="col-8">
                            Riesgo Sin Definir (Nota: Sin Información)
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        console.log('todo aboutstudent');
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