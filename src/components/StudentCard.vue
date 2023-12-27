<template>
    <q-card>
        <q-card-section class="row">
            <q-avatar size="65px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="column q-pl-lg text-subtitle1 text-weight-bold">
                <div class="text-primary text-h6 text-weight-bold">
                    {{ name }}
                </div>
                <div class="row justify-between items-center">
                    <div>Reg. ID: {{ recordId }}</div>
                    <q-icon name="content_copy"></q-icon>
                </div>
                <div>Status: {{ status === 1 ? 'Active' : 'Inactive' }}</div>
            </div>
        </q-card-section>

        <q-card-actions class="row justify-between">
            <q-btn flat round color="secondary" icon="edit_note" />
            <q-btn flat round color="secondary" icon="chat" />
            <q-btn flat round color="secondary" icon="today" />
            <q-btn flat round color="secondary" icon="email" />
            <q-btn flat round color="secondary" icon="phone" />
            <q-btn flat round color="secondary" icon="more_horiz" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        recordId: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.q-icon {
    cursor: pointer;
    font-size: 20px;
}

.q-avatar img {
    border-width: 3px;
    border-style: solid;
    border-color: $light-green-5;
}

.q-card__section {
    flex-wrap: nowrap;
}
</style>