<template>
  <div>
    <a :href="doc" download>
      <v-btn x-large class="secondary">
        Download prices <br />and ordering info
      </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  props: ['doc'],
}
</script>
