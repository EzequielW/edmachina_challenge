<template>
    <q-expansion-item
        expand-icon-toggle
        icon="drag_indicator"
        class="text-body1 text-weight-bolder"
        label="About"
        header-class="handle"
        default-opened
    >
        <q-card>
            <q-card-section class="column text-body2 text-weight-bold">
                <div class="column">
                    <div>First Name:</div>
                    <div>Danielle</div>
                </div>

                <div class="column">
                    <div>Last Name:</div>
                    <div>Munchen Schollengberg</div>
                </div>

                <div class="column">
                    <div>Email:</div>
                    <div>danielle_munchen@gmail.com</div>
                    <q-separator />
                </div>

                <div class="column">
                    <div>Phone number:</div>
                    <div>+52 5522126164</div>
                </div>

                <div class="column">
                    <div>Country:</div>
                    <div>México</div>
                </div>

                <div class="column">
                    <div>Category:</div>
                    <div>Do Not Contact</div>
                </div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        console.log('todo aboutuser');
    },
});
</script>

<style lang="scss" scoped>
.q-card__section {
    gap: 1rem;
}
</style>