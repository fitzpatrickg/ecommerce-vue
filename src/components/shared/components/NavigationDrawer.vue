<template>
    <v-navigation-drawer v-model="navigationDrawerState" app>
        <v-list>
            <v-list-item>
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Dashboard
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