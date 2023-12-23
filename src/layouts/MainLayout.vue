<template>
    <q-layout view="hHh Lpr lff">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                    v-if="$q.screen.xs"
                />

                <q-toolbar-title> Ed l\\achina </q-toolbar-title>

                <div class="row items-center">
                    <q-btn flat dense round icon="language" />
                    <q-btn flat dense round icon="dark_mode" />
                    <q-btn flat dense round icon="notifications">
                        <q-badge color="red" floating>4</q-badge>
                    </q-btn>
                    <div class="column items-end q-px-md">
                        <div class="text-body2">Hellen Smith</div>
                        <div class="text-caption">Admin</div>
                    </div>
                    <q-avatar size="38px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                        <q-badge color="positive" rounded floating />
                    </q-avatar>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            :width="250"
            :mini-width="65"
            :mini="miniState"
            :mini-to-overlay="true"
            @mouseover="miniState = false"
            @mouseout="miniState = true"
            :breakpoint="600"
        >
            <q-list>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                    :active="routeName === link.title.toLowerCase()"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer>
            <q-toolbar class="q-pa-lg">
                <q-toolbar-title class="text-body1 text-weight-bold">
                    COPYRIGHT <q-icon name="copyright" /> 2023 EdMachina
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useRoute } from 'vue-router';

const linksList = [
    {
        title: 'Dashboard',
        icon: 'home',
        link: 'https://quasar.dev',
    },
    {
        title: 'Smart Enroller',
        icon: 'add_box',
        link: 'https://github.com/quasarframework',
    },
    {
        title: 'Dropout Shield',
        icon: 'outbound',
        link: 'https://chat.quasar.dev',
    },
    {
        title: 'Retention Partner',
        icon: 'sync',
        link: 'https://forum.quasar.dev',
    },
    {
        title: 'Risk Detector',
        icon: 'analytics',
        link: 'https://twitter.quasar.dev',
        reports: [
            {
                id: 1,
                name: 'My Reports',
            },
            {
                id: 2,
                name: 'My Reports',
            },
            {
                id: 3,
                name: 'My Reports',
            },
        ],
    },
    {
        title: 'Academic Offer',
        icon: 'school',
        link: 'https://facebook.quasar.dev',
    },
    {
        title: 'My Reports',
        icon: 'equalizer',
        link: 'https://awesome.quasar.dev',
    },
    {
        title: 'Custom Reports',
        icon: 'add_chart',
        link: 'https://awesome.quasar.dev',
    },
    {
        title: 'Workflows',
        icon: 'account_tree',
        link: 'https://awesome.quasar.dev',
    },
];

export default defineComponent({
    name: 'MainLayout',
    components: {
        EssentialLink,
    },
    setup() {
        const route = useRoute();
        const leftDrawerOpen = ref(false);
        const miniState = ref(true);

        const routeName = computed(() => {
            console.log('route.name', route);
            return route.name;
        });

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
            miniState,
            routeName,
        };
    },
});
</script>

<style lang="scss" scoped>
.q-page-container {
    background-color: #f8f8f8;
}

.q-avatar img {
    border-width: 1.5px;
    border-style: solid;
    border-color: $primary-light;
}

.q-badge {
    width: 18px;
    height: 18px;
    min-height: 11px;
    border-radius: 50%;
    top: 0;
}

.q-avatar .q-badge {
    width: 11px;
    height: 11px;
    border-width: 1.5px;
    border-style: solid;
    border-color: #fff;
    bottom: 0;
    top: unset;
    padding: 0;
}

.q-footer {
    background-color: #eee;
    color: #888;
}
</style>