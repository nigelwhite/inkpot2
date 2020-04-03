<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<p>
			<a
				href="https://vuetifyjs.com/en/components/grids/#grid-system"
				target="_blank"
				>Grid docs</a
			>
		</p>
		<p>Use for layout of whole rows</p>
		<p>v-container not needed here as it is already in default layout</p>

		<h1 class="mt-10">Horizontal</h1>
		<p>Cols inside one row</p>
		<v-row>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff
				</v-card>
			</v-col>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff
				</v-card>
			</v-col>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff
				</v-card>
			</v-col>
		</v-row>

		<h1 class="mt-10">Vertical</h1>
		<p>
			Rows with one col in each. You need to have col to get consistent
			margin/padding with other page elements
		</p>

		<v-row>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff and nonsense
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff and nonsense
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-card class="pa-2" outlined tile>
					stuff and nonsense
				</v-card>
			</v-col>
		</v-row>

		<h1 class="mt-10">Centering flexbox items</h1>
		<p>Contain the d-flex inside a v-row. As in this site's footer</p>
		<v-row justify="center" align="center">
			<div class="d-flex flex-column flex-md-row">
				<v-btn text rounded class="mr-4">
					<a href="#">Example</a>
				</v-btn>
				<v-btn text rounded class="mr-4">
					<a href="#">Example</a>
				</v-btn>
				<v-btn text rounded class="mr-4">
					<a href="#">Example</a>
				</v-btn>
			</div>
		</v-row>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Grid'
		}
	}
}
</script>

<style lang="scss" scoped></style>
