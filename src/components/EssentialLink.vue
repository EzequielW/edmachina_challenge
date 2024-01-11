<template>
    <q-item>
        <q-item-section avatar class="q-mini-drawer-only">
            <q-btn
                dense
                class="drawer-btn text-secondary"
                :icon="report.icon"
                unelevated
                :color="active ? 'primary' : undefined"
            />
        </q-item-section>

        <q-item-section class="q-mini-drawer-hide">
            <q-expansion-item
                v-if="report.subreports && report.subreports.length > 0"
                class="drawer-btn text-secondary text-body1 ellipsis"
                :class="{
                    'text-weight-bold': report.highlight,
                    'text-weight-medium': !report.highlight,
                    'drawer-btn__shadow': !expanded,
                }"
                v-model="expanded"
                :icon="report.icon"
                :label="report.name"
                :header-class="{
                    'bg-primary': expanded,
                    'text-white': expanded,
                }"
                :expand-icon-class="{ 'text-white': expanded }"
            >
                <ul class="text-weight-medium">
                    <li
                        v-for="subreport in report.subreports"
                        :key="'subreport_' + subreport.id"
                    >
                        <q-icon name="circle" size="10px" />
                        <span>{{ subreport.name }}</span>
                    </li>
                </ul>
            </q-expansion-item>

            <q-btn
                dense
                v-else
                class="drawer-btn text-secondary text-body1 ellipsis"
                :class="{
                    'text-weight-bold': report.highlight,
                    'text-weight-medium': !report.highlight,
                }"
                :icon="report.icon"
                :align="'left'"
                unelevated
                no-caps
                style="padding-left: 0; padding-right: 10.5px"
                :label="report.name"
                :color="active ? 'primary' : undefined"
            />
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Report } from './models';

export default defineComponent({
    name: 'EssentialLink',
    props: {
        report: {
            type: Object as () => Report,
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const expanded = ref(false);

        return { expanded };
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
    height: 42px;
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

.q-item__section--main {
    flex-wrap: nowrap;
}

ul {
    margin-top: 0;
    padding-inline-start: 30px;
}

ul li {
    display: flex;
    align-items: center;
    height: 42px;
    line-height: 24px;
}

ul li .q-icon {
    width: 10px !important;
    margin-right: 10px;
}

.q-expansion-item {
    max-width: 230px;
    box-shadow: unset;
}

.drawer-btn__shadow {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
}
</style>

<style lang="scss">
.drawer-btn .q-icon {
    font-size: 24px;
}

.drawer-btn .q-btn__content {
    flex-wrap: nowrap;
}

.q-mini-drawer-hide .drawer-btn .q-icon {
    width: 45px;
}

.drawer-btn .q-expansion-item__container .q-item {
    height: 42px;
    min-height: 0;
    background-color: #fff;
    border-radius: 8px;
    padding: 0px;
}

.drawer-btn .q-expansion-item__container .q-item__section--avatar {
    padding-right: 12px;
}

.drawer-btn .q-expansion-item__container .q-item__section--avatar .q-icon {
    font-size: 24px !important;
    cursor: unset;
}
</style>