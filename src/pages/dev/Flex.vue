<template>
  <Layout>
    <template slot="title">{{ title }}</template>
    <p>
      Using d-flex (display) you can turn any element into a flexbox container
      transforming direct children elements into flex items. Using additional
      flex property utilities (justify and align), you can customize their
      interaction even further.
    </p>
    <p>
      <a href="https://vuetifyjs.com/en/styles/flex/">Flex docs</a> with
      responsive classes
    </p>
    <h1>.d-flex Default = row</h1>
    <p>
      By default, d-flex applies flex-direction: row and can generally be
      omitted.
    </p>
    <div class="d-flex grey pa-2">
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
    </div>
    <h1>Column .d-flex .flex-column</h1>
    <p>
      Use d-flex flex-column for vertical
    </p>
    <div class="d-flex flex-column grey pa-2">
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a flexbox container!</div>
      </v-card>
    </div>
    <h1>
      Justify .d-flex .justify-end
    </h1>
    <p>
      .justify-start (default) .justify-center .justify-space-between
      .justify-space-around etc
    </p>
    <p>
      The justify-content flex setting can be changed using the flex justify
      classes. This by default will modify the flexbox items on the x-axis but
      is reversed when using flex-direction: column, modifying the y-axis.
      Choose from start (browser default), end, center, between, or around.
    </p>
    <div class="d-flex justify-end grey pa-2">
      <v-card class="pa-2" outlined tile>
        <div>I'm a justify-end container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a justify-end container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a justify-end container!</div>
      </v-card>
    </div>
    <h1>Align .d-flex .align-center</h1>
    <p>.align-start (default) .align-end etc</p>
    <p>
      The align-items flex setting can be changed using the flex align classes.
      This by default will modify the flexbox items on the y-axis but is
      reversed when using flex-direction: column, modifying the x-axis. Choose
      from start, end, center, baseline, or stretch (browser default).
    </p>
    <div class="d-flex align-center align-demo grey pa-2">
      <v-card class="pa-2" outlined tile>
        <div>I'm a align-center container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a align-center container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a align-center container!</div>
      </v-card>
    </div>
    <h1>Center .d-flex .justify-center .align-center</h1>
    <p>
      Using justify-center and align-center
    </p>
    <div class="d-flex justify-center align-center align-demo grey pa-2">
      <v-card class="pa-2" outlined tile>
        <div>I'm a fully centered container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a fully centered container!</div>
      </v-card>
      <v-card class="pa-2" outlined tile>
        <div>I'm a fully centered container!</div>
      </v-card>
    </div>
    <h1>Wrap .d-flex .flex-wrap</h1>
    <p>.flex-nowrap (default) .flex-wrap-reverse</p>
    <p>
      By default .d-flex does not provide any wrapping (behaves similarly to
      flex-wrap: nowrap). This can be modified by applying flex-wrap helper
      classes in the format flex-{condition} where condition can be nowrap,
      wrap, or wrap-reverse
    </p>
    <div class="d-flex flex-wrap grey pa-2">
      <v-card v-for="n in 20" :key="n" class="pa-2" outlined tile>
        Flex item
      </v-card>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Flex',
    }
  },
}
</script>

<style lang="sass" scoped>
.align-demo
  height: 200px
h1
	margin-top: 40px
</style>
