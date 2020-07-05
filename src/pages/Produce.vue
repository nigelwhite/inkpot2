<template>
  <Layout>
    <template slot="title">{{ title }}</template>
    <v-row>
      <Products></Products>
    </v-row>
  </Layout>
</template>

<script>
import Products from '@/components/Products.vue'

export default {
  metaInfo: {
    title: 'Produce',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'The Inkpot Produce' },
      { name: 'keywords', content: 'produce, products' },
    ],
  },
  components: {
    Products,
  },
  data() {
    return {
      title: 'Buy our products',
    }
  },
}
</script>
