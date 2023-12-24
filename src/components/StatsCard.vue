<template>
    <q-card class="full-width">
        <q-card-section>
            <div class="row justify-between">
                <q-avatar
                    size="40px"
                    font-size="21px"
                    color="light-green-5"
                    text-color="white"
                    :icon="icon"
                />

                <div class="column items-end">
                    <div class="text-body2 text-weight-bold">{{ title }}</div>
                    <div class="text-body1 text-weight-bolder">{{ stat }}</div>
                </div>
            </div>

            <q-separator class="q-my-sm" />

            <div class="row justify-between">
                <div class="text-body2 text-weight-bold">
                    {{ subtitleLeft }}
                </div>
                <div class="text-body2 text-weight-bold">
                    {{ subtitleRight }}
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        stat: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        subtitleLeft: {
            type: String,
            required: true,
        },
        subtitleRight: {
            type: String,
            required: true,
        },
    },
    setup() {
        console.log('todo statscard');
    },
});
</script>
