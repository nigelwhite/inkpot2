<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/honey-pan.png"
						class="gimage mx-auto mt-lg-8 mb-xl-8"
						width="1200"
					/>
				</v-row>
				<v-row>
					<v-col>
						<Portraits3Wide></Portraits3Wide>
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
					Text all about the bees and the honey
				</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="px-lg-12">
				<Portraits3Narrow></Portraits3Narrow>
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
			title: 'Honey',
			linkedDoc: '',
			pic1: '',
			pic2: '',
			pic3: '',
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
