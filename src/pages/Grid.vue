<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<p>Use for layout of whole pages</p>
		<p>v-container not needed here as it is already in default layout</p>

		<h1>Horizontal</h1>
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
