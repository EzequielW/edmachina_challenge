<template>
    <q-expansion-item
        expand-icon-toggle
        icon="drag_indicator"
        class="text-body1 text-weight-bold"
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
                        +{{ userAbout?.country.phoneCode }}
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
});
</script>

<style lang="scss" scoped>
.q-card__section {
    gap: 10px;
}

.q-separator {
    margin-top: 5px;
}
</style>