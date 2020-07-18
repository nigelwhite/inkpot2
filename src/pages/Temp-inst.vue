<template>
	<Layout>
		<v-col class="col-12 col-md-6 mb-12 mb-md-0">
			<div class="d-flex justify-center mb-4">
				<g-image
					src="~/assets/images/logos/InkpotLogo_transparent.png"
					alt="Inkpot Logo"
					width="90"
					class="mr-4 align-self-center"
				/>
				<h2 class="mb-2 align-self-center">Diary</h2>
			</div>
			<div class="d-flex justify-center">
				<div class="instagram-container">
					<div
						v-for="(edge, index) in $page.allInstagramPhoto.edges"
						:key="edge.node.id"
						class="instagram-post"
					>
						<img
							:src="edge.node.display_url"
							alt="Latest Instagram image"
						/>
						<p class="text-center mt-3">
							{{ edge.node.taken_at_timestamp | moment }}
						</p>

						<p class="pa-2">
							{{
								edge.node.edge_media_to_caption.edges[0].node
									.text
							}}
						</p>
					</div>
					<g-link to="/diary" class="text-center"
						><h3>more...</h3></g-link
					>
				</div>
			</div>
		</v-col>
	</Layout>
</template>
