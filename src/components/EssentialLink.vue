<template>
    <q-item>
        <q-item-section avatar class="q-mini-drawer-only">
            <q-btn
                dense
                class="drawer-btn text-secondary"
                :icon="icon"
                unelevated
                :color="active ? 'primary' : undefined"
            />
        </q-item-section>

        <q-item-section class="q-mini-drawer-hide">
            <q-btn
                class="drawer-btn text-secondary text-body1 text-weight-bold ellipsis"
                :icon="icon"
                :align="'left'"
                unelevated
                no-caps
                :label="title"
                :color="active ? 'primary' : undefined"
            />
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EssentialLink',
    props: {
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: '#',
        },
        icon: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.q-btn {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
}

.q-mini-drawer-hide .q-btn {
    max-width: 230px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.q-mini-drawer-only .q-btn {
    width: 45px;
    height: 42px;
}

.q-item {
    padding: 5px 10px;
}
</style>

<style lang="scss">
.drawer-btn .q-icon {
    font-size: 20px;
}

.drawer-btn .q-btn__content {
    flex-wrap: nowrap;
}

.q-mini-drawer-hide .drawer-btn .q-btn .q-icon {
    margin-right: 12px;
}
</style>