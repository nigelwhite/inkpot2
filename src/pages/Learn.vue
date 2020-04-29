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
			<v-col class="text-right">
				<div>
					<div class="video-player"></div>
					<g-image
						src="~/assets/images/veg.png"
						width="900"
						class="gimage"
					></g-image>
					<p class="text-right caption">Photo: Carla Moss</p>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import Aplayer from 'vue-aplayer';
export default {
	metaInfo: {
		title: 'Inkpot | Learn',
	},
	data() {
		return {
			title: 'Learn Permaculture',
		};
	},
};
</script>

<style lang="sass" scoped></style>
