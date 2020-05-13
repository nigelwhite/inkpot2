<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/eggs-pan.png"
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
				<CardStatus :pageTitle="title"></CardStatus>

				<div v-if="linkedDoc" class="ordering text-center mb-10">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
				</div>
				<div v-if="!linkedDoc" class="ordering text-center mb-10">
					<ContactUsBtn></ContactUsBtn>
				</div>
				<p>
					At the Inkpot we hold the welfare of our animals as a very high
					priority. The hens have free range to fresh pasture and form an
					integral part of our soil building programme following behind the cows
					and sheep in their carbon sequestering grazing design. Our hens are
					free roaming, outdoor, free from chemical input, happy hens.
				</p>

				<p>
					You are welcome to come along on any Working Wednesday and see for
					yourself. You can taste the welfare and health of our hens in the
					eggs. Their bright yellow yolks and hard shells will show you what
					real eggs are like.
				</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="px-lg-12">
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
import ContactUsBtn from '@/components/ContactUsBtn.vue';
import CardStatus from '@/components/CardStatus.vue';

export default {
	metaInfo: {
		title: 'Eggs',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot eggs' },
			{ name: 'keywords', content: 'eggs, hens, free range, fresh, order' },
		],
	},
	data() {
		return {
			title: 'Eggs',
			linkedDoc: '',
			pic1: 'eggs1.png',
			pic2: 'eggs2.png',
			pic3: 'eggs3.png',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		ContactUsBtn,
		CardStatus,
	},
};
</script>

<style lang="sass" scoped></style>
