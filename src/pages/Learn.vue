<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col class="col-12 col-lg-5 col-xl-6">
				<p>
					All about learning Permaculture at The Inkpot
				</p>
				<p>Courses happen occasionally, etc</p>
				<p>Working Wednesday, etc</p>
			</v-col>
			<v-col>
				<div>
					<v-img :src="img1"></v-img>
					<!-- <g-image
						src="~/assets/images/veg.png"
						width="900"
						class="gimage"
					></g-image> -->
					<p class="text-right caption">Film: Carla Moss</p>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Learn',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'Learn Permaculture at The Inkpot' },
			{
				name: 'keywords',
				content: 'learn, courses, workshops, volunteer, work, working',
			},
		],
	},
	data() {
		return {
			title: 'Learn Permaculture',
		};
	},
	props: {
		img1: {
			type: String,
			default: 'https://via.placeholder.com/400x250.png?text=Carla+movie',
		},
	},
};
</script>

<style lang="sass" scoped></style>
