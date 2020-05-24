<template>
    <v-navigation-drawer v-model="navigationDrawerState" dark app>
        <v-list>
            <v-list-item>
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Profile
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-icon>mdi-cart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Cart
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
                        <v-list-item>
                <v-list-item-action>
                    <v-icon>mdi-history</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Order History
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    computed: {
        navigationDrawerState() {
            return this.$store.state.navigationDrawer;
        }
    }
}
</script>