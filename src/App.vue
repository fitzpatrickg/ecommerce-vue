<template>
  <v-app>
    <Navigation/>
    <router-view/>
  </v-app>
</template>

<script>
import Navigation from './components/shared/Navigation';

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.primary = '#FF652F';
    this.$vuetify.theme.secondary = '#747474';
    this.$vuetify.theme.success = '#FFE400';
    this.$vuetify.theme.info = '#14A76C';
    this.$vuetify.theme.error = '#ED4337';
  }
};
</script>
