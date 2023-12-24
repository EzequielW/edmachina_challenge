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
                    <div>{{ userAbout?.firstName }}</div>
                </div>

                <div class="column">
                    <div>Last Name:</div>
                    <div>{{ userAbout?.lastName }}</div>
                </div>

                <div class="column">
                    <div>Email:</div>
                    <div>{{ userAbout?.email }}</div>
                    <q-separator />
                </div>

                <div class="column">
                    <div>Phone number:</div>
                    <div>
                        +{{ userAbout?.country.phone_code }}
                        {{ userAbout?.phone }}
                    </div>
                </div>

                <div class="column">
                    <div>Country:</div>
                    <div>{{ userAbout?.country.name }}</div>
                </div>

                <div class="column">
                    <div>Category:</div>
                    <div>{{ userAbout?.category.name }}</div>
                </div>
            </q-card-section>
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserAbout } from './models';

export default defineComponent({
    props: {
        userAbout: {
            type: Object as () => UserAbout,
            required: true,
        },
    },
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