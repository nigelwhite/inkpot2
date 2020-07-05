<template>
  <Layout>
    <template slot="title">{{ title }}</template>
    <!-- content of page goes here -->
    <div>
      <v-btn @click="a++">Add to A</v-btn>
      <v-btn @click="b++">Add to B</v-btn>
      <p>A - {{ a }}</p>
      <p>B - {{ b }}</p>
      <!-- refer to methods with parenthesis eg methodName() -->
      <!-- all methods are run when one value changes - inefficient -->
      <!-- <p>Age + A = {{ addToA() }}</p>
			<p>Age + B = {{ addToB() }}</p> -->
      <!-- refer to computed properties without parenthesis eg methodName -->
      <!-- will only run when the specific value needed is changed - efficient -->
      <p>Age + A = {{ addToA }}</p>
      <p>Age + B = {{ addToB }}</p>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Function and Computed Properties',
      age: 20,
      a: 0,
      b: 0,
    }
  },
  // methods: {
  // 	addToA: function() {
  // 		return this.a + this.age;
  // 	},
  // 	addToB: function() {
  // 		return this.b + this.age;
  // 	},
  // },
  // computed properties declaration is exactly the same as methods declaration
  computed: {
    addToA() {
      return this.a + this.age
    },
    addToB() {
      return this.b + this.age
    },
  },
}
</script>

<style lang="sass" scoped></style>
