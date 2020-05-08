<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col>
				<div class="ml-lg-8">
					<p>
						Hannah Thorogood<br />The Inkpot<br />Highgate Farm<br />Gorse
						Drove<br />Scredington<br />Sleaford<br />NG34 0AH
					</p>
					<p>
						<g-link to="/contact/">
							<v-btn small class="secondary"> Contact Hannah</v-btn>
						</g-link>
						to send a message
					</p>
					<p>
						If your query is urgent please feel free to text Hannah on 07801
						814086
					</p>
					<p>Travel directions......</p>
				</div>
			</v-col>

			<v-col>
				<div>
					<iframe
						width="600"
						height="494"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://www.openstreetmap.org/export/embed.html?bbox=-0.38018703460693365%2C52.93231852759099%2C-0.3235387802124024%2C52.95536039375423&amp;layer=mapnik&amp;marker=52.94384099466375%2C-0.35186290740966797"
						style="border: 1px solid black"
					></iframe
					><br /><small
						><a
							href="https://www.openstreetmap.org/?mlat=52.9438&amp;mlon=-0.3519#map=15/52.9438/-0.3519"
							>View Larger Map</a
						></small
					>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Inkpot | Location',
	},
	data() {
		return {
			title: 'Location',
		};
	},
};
</script>

<style lang="sass" scoped></style>
