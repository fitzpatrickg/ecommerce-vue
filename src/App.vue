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
  })
};
</script>
