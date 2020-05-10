<template>
 <nav>
   <v-app-bar app dark color="primary">
     <v-btn @click="toggleNavigationDrawer" fab text>
       <v-icon>mdi-hamburger</v-icon>
      </v-btn>
     <v-toolbar-title>
       <span class="font-weight-light">Fake</span>
       <span>Store</span>
     </v-toolbar-title>
   </v-app-bar>

   <NavigationDrawer/>
 </nav>
</template>

<script>
  import NavigationDrawer from './components/NavigationDrawer.vue';

  export default {
    name: 'Navigation',
    components: {
      NavigationDrawer,
    },
    methods: {
      toggleNavigationDrawer() {
        this.$store.commit('toggleNavigationDrawer');
      }
    }
  }
</script>
