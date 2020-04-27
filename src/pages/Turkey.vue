<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/turkeys-pan.png"
						class="gimage mx-auto mt-lg-8 mb-xl-8"
						width="1200"
					/>
				</v-row>
				<v-row>
					<v-col>
						<Portraits3Wide
							:img1="require('~/assets/images/' + pic1)"
							:img2="require('~/assets/images/' + pic2)"
							:img3="require('~/assets/images/' + pic3)"
						></Portraits3Wide>
					</v-col>
				</v-row>
			</v-col>
			<v-col class="px-lg-12">
				<div v-if="linkedDoc" class="ordering text-center mb-10">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
				</div>
				<div v-if="!linkedDoc" class="ordering text-center mb-10">
					<PricesNeeded></PricesNeeded>
				</div>
				<p>
					Text all about the turkeys
				</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Portraits3Narrow
					:img1="require('~/assets/images/' + pic1)"
					:img2="require('~/assets/images/' + pic2)"
					:img3="require('~/assets/images/' + pic3)"
				></Portraits3Narrow>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3Wide from '@/components/Portraits3Wide.vue';
import Portraits3Narrow from '@/components/Portraits3Narrow.vue';
import PricesNeeded from '@/components/PricesNeeded.vue';

export default {
	data() {
		return {
			title: 'Turkey',
			linkedDoc: '',
			pic1: 'turkeys1.jpg',
			pic2: 'turkeys2.png',
			pic3: 'turkeys3.png',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		PricesNeeded,
	},
};
</script>

<style lang="sass" scoped></style>
