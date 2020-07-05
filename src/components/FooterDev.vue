<template>
  <v-footer height="75">
    <v-row justify="center" align="center">
      <div class="d-flex flex-column flex-md-row">
        <v-btn v-for="link in links" :key="link.name" text rounded class="mr-4">
          <a :href="link.url" target="_blank">
            {{ link.name }}
          </a>
        </v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Vuetify docs',
          url: 'https://vuetifyjs.com/en/components/grids/#grid-system',
        },

        {
          name: 'Gridsome docs',
          url: 'https://gridsome.org/docs/',
        },

        {
          name: 'Vue docs',
          url: 'https://vuejs.org/v2/guide/index.html',
        },
        {
          name: 'MD icons',
          url: 'https://material.io/resources/icons/?style=baseline',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
