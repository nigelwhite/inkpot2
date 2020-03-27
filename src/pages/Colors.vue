<template>
	<Layout>
		<h1>Colours</h1>
		<v-container>
			<v-layout column>
				<p>These are the defaults. Change them in main.js</p>
				<v-btn class="primary firstone">Primary</v-btn>
				<v-btn class="secondary">Secondary</v-btn>
				<v-btn class="accent">Accent</v-btn>
				<v-btn class="error">Error</v-btn>
				<v-btn class="info">Info</v-btn>
				<v-btn class="success">Success</v-btn>
				<v-btn class="warning">Warning</v-btn>
			</v-layout>
		</v-container>
	</Layout>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
firstone
  margin-bottom: 5px
</style>
