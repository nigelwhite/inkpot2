<template>
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<v-container class="my-2 my-md-12">
				<h1 class="primary--text mb-2 mb-md-8">
					<slot name="title" />
				</h1>
				<div class="mx-md-8">
					<v-row>
						<v-col>
							<v-row>
								<slot name="mainImage" />
							</v-row>
							<v-row>
								<v-col>
									<Portraits3 :class="wideOnly"></Portraits3>
								</v-col>
							</v-row>
						</v-col>
						<v-col class="px-lg-12">
							<div class="ordering text-center mb-10">
								<DownloadBtn :doc="linkedDoc"></DownloadBtn>
							</div>
							<slot name="textContent" />
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<Portraits3 :class="narrowOnly"></Portraits3>
						</v-col>
					</v-row>
				</div>
			</v-container>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3 from '@/components/Portraits3.vue';

export default {
	data() {
		return {
			title: 'Beef',
			beefpricelist: 'grand',
			linkedDoc: 'beefpricelist.doc',
			pic1: 'cows1.png',
			pic2: 'cows2.png',
			pic3: 'cows3.png',
			narrowOnly:
				'd-flex flex-column flex-sm-row justify-sm-space-around mt-4 d-xl-none',
			wideOnly: 'd-none d-xl-flex justify-space-between mt-10',
		};
	},
	components: {
		Navbar,
		Footer,
		DownloadBtn,
		Portraits3,
	},
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? 'dark' : 'light';
		},
	},
};
</script>

<style lang="sass"></style>
