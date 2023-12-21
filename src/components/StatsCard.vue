<template>
    <q-card class="full-width">
        <q-card-section>
            <div class="row justify-between">
                <q-avatar
                    size="40px"
                    font-size="21px"
                    color="light-green-5"
                    text-color="white"
                    icon="directions"
                />

                <div class="column items-end">
                    <div class="text-body2 text-weight-bold">Record Age</div>
                    <div class="text-body1 text-weight-bolder">12 days</div>
                </div>
            </div>

            <q-separator class="q-my-sm" />

            <div class="row justify-between">
                <div class="text-body2 text-weight-bold">Created on</div>
                <div class="text-body2 text-weight-bold">Jan 2, 2023</div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        console.log('todo statscard');
    },
});
</script>
