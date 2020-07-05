<template>
  <Layout>
    <template slot="title">
      <div class="my-4 mb-lg-8">{{ title }}</div>
    </template>
    <v-row>
      <v-col class="col-12 px-sm-12 col-lg-9 col-xl-6">
        <h2>Please contact The Inkpot by sending a message</h2>
        <div class="mt-8 mx-lg-12">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="40"
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

            <v-textarea
              v-model="message"
              :rules="messageRules"
              counter
              label="Message"
              auto-grow
              required
            ></v-textarea>
            <div class="mt-8">
              <v-btn
                :disabled="!valid"
                class="secondary mr-4"
                @click="validate"
              >
                Send
              </v-btn>

              <v-btn class="secondary mr-4" @click="reset">
                Clear
              </v-btn>
            </div>
          </v-form>

          <p class="mt-12">
            If your query is urgent please feel free to text Hannah on 07801 814
            086
          </p>
        </div>
      </v-col>
      <v-col class="text-center mt-md-12 pt-lg-12">
        <g-link to="/location/">
          <v-btn large class="secondary"> Map and address</v-btn>
        </g-link>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Contact The Inkpot' },
      { name: 'keywords', content: 'contact The Inkpot' },
    ],
  },

  data: () => ({
    dialog: false,
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 40) || 'Name must be less than 40 characters',
      (v) => (v && v.length >= 3) || 'Name must be more than 2 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      (v) => !!v || 'Message is required',
      (v) => (v && v.length >= 40) || 'Message must be more than 40 characters',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
  // return {
  // 	title: 'Contact The Inkpot',
  // };
}
</script>

<style lang="sass" scoped></style>
