<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/wool-pan.png"
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
					<ContactUsBtn></ContactUsBtn>
				</div>
				<p>
					Inkpot home-grown, home shorn, Yorkshire spun, permaculture designed,
					pasture fed, holistically managed, nonchemical, rare breed, British
					native, slow grown wool.
				</p>

				<p>Available in 50g double knit balls.</p>

				<p>
					The wool will be posted out 2nd class unless you get in touch to tell
					us that you want it sooner.
				</p>

				<p>
					The postage price of £3.35 which is added on at the paypal checkout
					includes posting 2nd class and the packaging materials.
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

export default {
	data() {
		return {
			title: 'Wool',
			linkedDoc: '',
			pic1: 'wool1.png',
			pic2: 'wool2.png',
			pic3: 'wool3.png',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		ContactUsBtn,
	},
};
</script>

<style lang="sass" scoped></style>
