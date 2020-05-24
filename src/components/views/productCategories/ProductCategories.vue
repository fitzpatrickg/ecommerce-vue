<template>
    <v-content>
        <h1>Hello from categories</h1>
    </v-content>
</template>

<script>
export default {
    name: 'ProductCategories',
    data() {
        return {
            categories: []
        }
    },
    created() {
        this.$store.dispatch('getCategories')
            .then(cats => {
                this.categories = cats;
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>