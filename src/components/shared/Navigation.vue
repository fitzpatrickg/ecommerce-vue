<template>
 <nav>
   <v-app-bar app color="primary">
     <v-btn @click="toggleNavigationDrawer" fab text>
       <v-icon>mdi-menu</v-icon>
      </v-btn>
     <v-toolbar-title>
       <span class="font-weight-light">Fake</span>
       <span>Store</span>
     </v-toolbar-title>
    <v-spacer/>
        <v-btn 
          class="secondary mr-2" 
          depressed
          to="/"
        >
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn 
          class="secondary mr-2" 
          depressed
          to="/categories"
        >
      <v-icon>mdi-basket-outline</v-icon>
      Shop
    </v-btn>
    <v-btn class="secondary" depressed>
      <v-icon>mdi-logout</v-icon>
      Sign Out
    </v-btn>
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
