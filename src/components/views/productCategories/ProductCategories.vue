<template>
    <v-content>
        <v-row>
            <v-col 
                :key="i" 
                v-for="(category, i) in categories" 
                cols="4"
            >
                <v-card>
                    <v-img 
                        :src="category.image.url" 
                    />
                    <v-card-title>
                        {{ category.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ category.details.shortDescription }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn 
                            fab
                            depressed
                            small
                            color="primary"
                            :to="`/categories/${category.name}`"
                        >
                            <v-icon>
                                mdi-basket
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
export default {
    name: 'ProductCategories',
    created() {
        this.$store.dispatch('getCategories');
    },
    computed: {
        categories() {
            return this.$store.state.categories.data;
        }
    }
}
</script>