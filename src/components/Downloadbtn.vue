<template>
	<div>
		<p>{{ prices }}</p>

		<a :href="doc" download>
			<v-btn class="secondary">
				Download prices and order details
			</v-btn>
		</a>
	</div>
</template>

<script>
export default {
	props: ['prices', 'doc'],
};
</script>
