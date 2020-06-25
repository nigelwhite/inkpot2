<template>
	<Layout>
		<div v-if="photos">
			<div v-for="(post, index) in photos.edges" :key="index">
				<a
					:href="
						`https://www.instagram.com/p/${post.node.shortcode}/`
					"
				>
					<img
						:src="post.node.display_url"
						:alt="post.node.accessibility_caption"
					/>
				</a>
			</div>
		</div>
	</Layout>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Footer',
    data () {
      return {
        photos: null
      }
    },
    async mounted () {
      try {
        const igProfileJson = await axios.get(
          `https://www.instagram.com/inkpotfarm/?__a=1`
        )
        this.photos = igProfileJson.data.graphql.user.edge_owner_to_timeline_media

        // might want to log this during your testing so you can see the object you need to traverse
        console.log(this.photos)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
