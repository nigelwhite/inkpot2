<template>
	<div class="d-none d-xl-flex justify-space-between mt-12">
		<v-img :src="img1" max-width="250" class="mb-10 mx-6"></v-img>
		<v-img :src="img2" max-width="250" class="mb-10 mx-6"></v-img>
		<v-img :src="img3" max-width="250" class="mb-10 mx-6"></v-img>
	</div>
</template>

<script>
export default {
	props: {
		img1: {
			type: String,
			default: 'https://via.placeholder.com/250x250.png?text=Cute+Pic+1',
		},
		img2: {
			type: String,
			default: 'https://via.placeholder.com/250x250.png?text=Cute+Pic+2',
		},
		img3: {
			type: String,
			default: 'https://via.placeholder.com/250x250.png?text=Cute+Pic+3',
		},
	},
};
</script>
