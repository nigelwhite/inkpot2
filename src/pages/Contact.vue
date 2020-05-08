<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col class="col-3 text-center">
				<g-link to="/location/">
					<v-btn class="secondary"> Map and address</v-btn>
				</g-link> </v-col
			><v-col>
				<v-img :src="img2" max-width="600"></v-img>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Inkpot | Contact',
	},
	data() {
		return {
			title: 'Contact The Inkpot',
		};
	},
	props: {
		img2: {
			type: String,
			default:
				'https://via.placeholder.com/600x400.png?text=Contact+form+for+messages',
		},
	},
};
</script>

<style lang="sass" scoped></style>
