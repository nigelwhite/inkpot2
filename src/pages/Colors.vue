<template>
	<Layout>
		<h1>Colours</h1>

		<v-layout column>
			<p>These are the defaults. Change them in main.js</p>
			<v-btn class="primary btn">Primary</v-btn>
			<v-btn class="secondary btn">Secondary</v-btn>
			<v-btn class="accent btn">Accent</v-btn>
			<v-btn class="error btn">Error</v-btn>
			<v-btn class="info btn">Info</v-btn>
			<v-btn class="success btn">Success</v-btn>
			<v-btn class="warning btn">Warning</v-btn>
		</v-layout>
	</Layout>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.btn
  margin: 10px 0
</style>
