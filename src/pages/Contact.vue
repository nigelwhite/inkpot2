<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col>
				<h2>Please contact Hannah by sending a message</h2>
				<div class="message-form">
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
						class="mt-8 mx-lg-12"
					>
						<v-text-field
							v-model="name"
							:counter="20"
							:rules="nameRules"
							label="Name"
							required
						></v-text-field>

						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
						></v-text-field>

						<v-text-field label="Message"></v-text-field>

						<v-btn
							:disabled="!valid"
							color="success"
							class="mr-4"
							@click="validate"
						>
							Send
						</v-btn>

						<v-btn color="error" class="mr-4" @click="reset">
							Clear
						</v-btn>
					</v-form>
				</div>
			</v-col>
			<v-col class="text-center mt-lg-12">
				<g-link to="/location/">
					<v-btn class="secondary"> Map and address</v-btn>
				</g-link>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Inkpot | Contact',
	},

	data: () => ({
		valid: true,
		name: '',
		nameRules: [
			(v) => !!v || 'Name is required',
			(v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
		],
		email: '',
		emailRules: [
			(v) => !!v || 'E-mail is required',
			(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		],
	}),

	methods: {
		validate() {
			this.$refs.form.validate();
		},
		reset() {
			this.$refs.form.reset();
		},
	},
	// return {
	// 	title: 'Contact The Inkpot',
	// };
};
</script>

<style lang="sass" scoped>
.message-form
	max-width: 900px
</style>
