<template>
    <q-card>
        <q-card-section class="row">
            <q-avatar size="65px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="column q-pl-md text-body2 text-weight-bold">
                <div class="text-primary text-body1 text-weight-bold">
                    Danielle Munchen Schollengberg
                </div>
                <div class="row justify-between items-center">
                    <div>Reg. ID: AYSI32392</div>
                    <q-icon name="content_copy"></q-icon>
                </div>
                <div>Status: Active</div>
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
    setup() {
        console.log('todo studentcard');
    },
});
</script>

<style lang="scss" scoped>
.q-icon {
    cursor: pointer;
}

.q-avatar img {
    border-width: 3px;
    border-style: solid;
    border-color: $light-green-5;
}
</style>