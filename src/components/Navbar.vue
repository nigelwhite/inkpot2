<template>
	<nav>
		<v-card color="grey lighten-4" text tile>
			<v-toolbar>
				<v-toolbar-title
					class="primary--text headline font-weight-bold"
				>
					<g-link exact to="/">
						The Inkpot
					</g-link>
				</v-toolbar-title>
				<v-spacer></v-spacer>

				<div class="hidden-sm-and-down">
					<div>
						<v-btn
							text
							rounded
							:class="[
								currentPage === '/' ? activeClass : '',
								'title',
							]"
						>
							<g-link exact to="/" class="title">Home</g-link>
						</v-btn>
						<v-btn
							text
							rounded
							:class="[
								currentPage === '/about/' ? activeClass : '',
								'title',
							]"
						>
							<g-link to="/about/" class="title">About</g-link>
						</v-btn>
						<v-menu
							bottom
							origin="center center"
							transition="scale-transition"
						>
							<template v-slot:activator="{ on }">
								<v-btn
									text
									rounded
									:class="[
										currentPage.includes('produce')
											? activeClass
											: '',
										'title',
									]"
									v-on="on"
								>
									Produce
								</v-btn>
							</template>
							<v-list>
								<v-list-item
									v-for="(product, index) in products"
									:key="product.text"
									@click=""
								>
									<v-list-item-title>
										<g-link :to="product.url">
											{{ product.text }}</g-link
										>
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>

						<v-btn
							text
							rounded
							:class="[
								currentPage === '/learn/' ? activeClass : '',
								'title',
							]"
						>
							<g-link to="/learn/" class="title">Learn</g-link>
						</v-btn>
						<v-btn
							text
							rounded
							:class="[
								currentPage === '/diary/' ? activeClass : '',
								'title',
							]"
						>
							<g-link to="/diary/" class="title">Diary</g-link>
						</v-btn>
						<v-btn
							text
							rounded
							:class="[
								currentPage === '/contact/' ||
								currentPage === '/location/'
									? activeClass
									: '',
								'title',
							]"
						>
							<g-link to="/contact/" class="title"
								>Contact</g-link
							>
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

		<v-navigation-drawer
			v-model="drawer"
			app
			class="primary hidden-md-and-up"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title
						class="headline font-weight-bold white--text"
					>
						The Inkpot
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider class="white"></v-divider>

			<v-list dense nav>
				<v-list-item
					v-for="(link, index) in links"
					:key="link.text"
					link
				>
					<v-list-item-icon
						:class="[link.type === 'produce' ? 'd-none' : '']"
					>
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
			activeClass: 'myActive',
			links: [
				{ type: 'main', icon: 'home', text: 'Home', url: '/' },
				{
					type: 'main',
					icon: 'perm_identity',
					text: 'About',
					url: '/about',
				},
				{
					type: 'main',
					icon: 'shopping_basket',
					text: 'Produce',
					url: '/produce',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Turkey',
					url: '/produce/turkey',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Beef',
					url: '/produce/beef',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Hogget',
					url: '/produce/hogget',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Eggs',
					url: '/produce/eggs',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Wool',
					url: '/produce/wool',
				},

				{
					type: 'produce',
					icon: 'backup',
					text: 'Fleeces',
					url: '/produce/fleeces',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Honey',
					url: '/produce/honey',
				},

				{
					type: 'main',
					icon: 'grading',
					text: 'Learn',
					url: '/learn/',
				},
				{
					type: 'main',
					icon: 'grading',
					text: 'Diary',
					url: '/diary/',
				},
				{
					type: 'main',
					icon: 'subject',
					text: 'Contact',
					url: '/contact/',
				},
			],
			products: [
				{
					type: 'produce',
					icon: 'backup',
					text: 'Turkey',
					url: 'produce/turkey',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Beef',
					url: 'produce/beef',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Hogget',
					url: 'produce/hogget',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Eggs',
					url: 'produce/eggs',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Wool',
					url: 'produce/wool',
				},

				{
					type: 'produce',
					icon: 'backup',
					text: 'Fleeces',
					url: 'produce/fleeces',
				},
				{
					type: 'produce',
					icon: 'backup',
					text: 'Honey',
					url: 'produce/honey',
				},
			],
		};
	},
	computed: {
		currentPage() {
			return this.$route.path;
		},
	},
	// tried to filter for produce - failed
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
	margin-left: 100px

.myActive
	background-color: #dedcdb
	border-radius: 28px
</style>
