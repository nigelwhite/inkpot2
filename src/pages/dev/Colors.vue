<template>
  <Layout>
    <template slot="title">{{ title }}</template>
    <p>
      <a href="https://vuetifyjs.com/en/styles/colors/#colors" target="_blank"
        >Colours docs</a
      >
    </p>
    <div class="d-flex flex-column">
      <p>These are the defaults. Change them in main.js</p>
      <v-btn x-large color="primary" class="btn"
        >Primary. Headings, drawer bg</v-btn
      >
      <v-btn x-large color="secondary" class="btn"
        >Secondary. Download buttons</v-btn
      >
      <v-btn x-large color="accent" class="btn">Accent</v-btn>
      <v-btn x-large color="error" class="btn">Error</v-btn>
      <v-btn x-large color="info" class="btn">Info</v-btn>
      <v-btn x-large color="success" class="btn black--text">Success</v-btn>
      <v-btn x-large color="warning" class="btn"
        >Warning. Background of Instagram div</v-btn
      >
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Colours',
    }
  },
}
</script>

<style lang="sass" scoped>
.btn
  margin: 10px 0
</style>
