<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<!-- content of page goes here -->
		<p>
			<a
				href="https://vuetifyjs.com/en/customization/breakpoints/#breakpoints"
				target="_blank"
				>Breakpoints docs</a
			>
		</p>
		<v-data-table
			:headers="headers"
			:items="ranges"
			:items-per-page="5"
			class="elevation-1"
		></v-data-table>
		<div class="mt-5">
			<p>Class=....</p>
			<p>
				.d-{value} for xs <br />.d-{breakpoint}-{value} for sm, md, lg and xl
			</p>
			<p>
				When setting a specific breakpoint for a display helper class, it will
				apply to all screen widths from the designation and up. For example,
				d-lg-flex will apply to lg and xl size screens.S
			</p>
			<a href="https://vuetifyjs.com/en/styles/display/#display" targe="_blank"
				>Display docs</a
			>
		</div>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Breakpoints',
			headers: [
				{
					text: 'Device',
					align: 'start',
					sortable: false,
					value: 'device',
				},
				{ text: 'Code', value: 'code' },
				{ text: 'Types', value: 'types' },
				{ text: 'Range (px)', value: 'range' },
			],
			ranges: [
				{
					device: 'Extra small',
					code: 'xs',
					types: 'small to large handset',
					range: '< 600',
				},
				{
					device: 'Small',
					code: 'sm',
					types: 'small to medium tablet',
					range: '600 > < 960',
				},
				{
					device: 'Medium',
					code: 'md',
					types: 'large tablet to laptop',
					range: '960 > < 1264',
				},
				{
					device: 'Large',
					code: 'lg',
					types: 'desktop',
					range: '1264 > < 1904',
				},
				{
					device: 'Extra large',
					code: 'xl',
					types: '4k and ultra-wide',
					range: '> 1904',
				},
			],
		};
	},
};
</script>

<style lang="sass" scoped></style>
