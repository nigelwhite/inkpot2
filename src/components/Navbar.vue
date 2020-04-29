<template>
	<nav>
		<v-card color="grey lighten-4" text tile>
			<v-toolbar>
				<v-toolbar-title class="primary--text headline font-weight-bold">
					<g-link to="/">
						The Inkpot
					</g-link>
				</v-toolbar-title>
				<v-spacer></v-spacer>

				<div class="hidden-sm-and-down">
					<div>
						<!-- <v-btn v-for="link in links" :key="link.text" text rounded>
							<g-link :to="link.url">{{ link.text }}</g-link>
						</v-btn> -->
						<v-btn text rounded>
							<g-link to="/" class="title">Home</g-link>
						</v-btn>
						<v-btn text rounded>
							<g-link to="/about/" class="title">About</g-link>
						</v-btn>
						<v-menu bottom origin="center center" transition="scale-transition">
							<template v-slot:activator="{ on }">
								<v-btn v-on="on" text rounded class="title">
									Produce
								</v-btn>
							</template>
							<v-list>
								<v-list-item
									v-for="(product, index) in products"
									:key="index"
									@click=""
								>
									<v-list-item-title>
										<g-link :to="product.url"> {{ product.text }}</g-link>
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<v-btn text rounded>
							<g-link to="/learn/" class="title">Learn</g-link>
						</v-btn>
						<v-btn text rounded>
							<g-link to="/contact/" class="title">Contact</g-link>
						</v-btn>
					</div>
				</div>
				<v-app-bar-nav-icon
					class="primary--text hidden-md-and-up"
					@click="drawer = !drawer"
				>
					<v-icon v-show="!drawer">menu</v-icon>
					<v-icon v-show="drawer">close</v-icon>
				</v-app-bar-nav-icon>
			</v-toolbar>
		</v-card>

		<v-navigation-drawer v-model="drawer" app class="primary hidden-md-and-up">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="headline font-weight-bold white--text">
						The Inkpot
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider class="white"></v-divider>

			<v-list dense nav>
				<v-list-item v-for="link in links" :key="link.text" link>
					<v-list-item-icon :class="[link.type === 'produce' ? 'd-none' : '']">
						<v-icon class="white--text">{{ link.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content
						:class="[link.type === 'produce' ? 'produce' : '']"
					>
						<v-list-item-title class="white--text subtitle-1">
							<g-link :to="link.url" class="white--text">{{
								link.text
							}}</g-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			links: [
				{ type: 'main', icon: 'adb', text: 'Home', url: '/' },
				{ type: 'main', icon: 'backup', text: 'About', url: '/about/' },
				{ type: 'main', icon: 'backup', text: 'Produce', url: '/' },
				{ type: 'produce', icon: 'backup', text: 'Beef', url: '/beef/' },
				{ type: 'produce', icon: 'backup', text: 'Hogget', url: '/hogget/' },
				{ type: 'produce', icon: 'backup', text: 'Eggs', url: '/eggs/' },
				{ type: 'produce', icon: 'backup', text: 'Wool', url: '/wool/' },
				{ type: 'produce', icon: 'backup', text: 'Turkey', url: '/turkey/' },
				{ type: 'produce', icon: 'backup', text: 'Fleeces', url: '/fleeces/' },
				{ type: 'produce', icon: 'backup', text: 'Honey', url: '/honey/' },
				{ type: 'main', icon: 'backup', text: 'Learn', url: '/learn/' },
				{ type: 'main', icon: 'backup', text: 'Contact', url: '/contact/' },
			],
			products: [
				{ type: 'produce', icon: 'backup', text: 'Beef', url: '/beef/' },
				{ type: 'produce', icon: 'backup', text: 'Hogget', url: '/hogget/' },
				{ type: 'produce', icon: 'backup', text: 'Eggs', url: '/eggs/' },
				{ type: 'produce', icon: 'backup', text: 'Wool', url: '/wool/' },
				{ type: 'produce', icon: 'backup', text: 'Turkey', url: '/turkey/' },
				{ type: 'produce', icon: 'backup', text: 'Fleeces', url: '/fleeces/' },
				{ type: 'produce', icon: 'backup', text: 'Honey', url: '/honey/' },
			],
		};
	},
	// computed: {
	// 	produceList: function() {
	// 		// create a new empty array
	// 		const products = [];
	// 		// get links items. Look at each item
	// 		links.forEach((link) => {
	// 			// if the item is not already in the new array, push it in there
	// 			// if (!products.includes(links.item)) {
	// 			products.push(lnks.link);
	// 			// }
	// 		});
	// 		return products;
	// 	},
	// },
};
</script>

<style scoped lang="sass">
.produce
	margin-left: 70px
</style>
