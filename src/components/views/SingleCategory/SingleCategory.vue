<template>
    <v-content>
        <h1>{{ categoryName }}</h1>

        <v-row>
            <v-col 
                :key="i" 
                v-for="(product, i) in products"
                cols="4"
            >
                <v-card>
                    <v-card-title>
                        {{ product.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ product.details.shortDescription }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
export default {
    name: 'SingleCategory',
    data() {
        return {
            categoryName: this.$route.params.name
        }
    },
    created() {
        this.$store.dispatch('getProductsByCategory', this.$route.params.name);
    },
    computed: {
        products() {
            return this.$store.state.products.data;
        }
    }    
}
</script>

<style lang="stylus">

</style>