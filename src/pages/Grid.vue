<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<h1>Horizontal</h1>
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
		<h1>Vertical</h1>
		<v-row>
			<v-card class="pa-2" outlined tile>
				stuff
			</v-card>
			<v-card class="pa-2" outlined tile>
				stuff
			</v-card>
			<v-card class="pa-2" outlined tile>
				stuff
			</v-card>
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
