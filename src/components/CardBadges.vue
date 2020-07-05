// gets the 'badges' of each product from cards.yaml and puts the right one(s)
in each product page
<template>
  <div>
    <div v-for="badge in cards.badges" :key="index">
      <!-- the value of action in cards.yaml -->
      <img :src="require('~/assets/images/logos/' + card.badge)" />
    </div>
  </div>
</template>

<script>
import cards from '@/data/cards.yaml'
export default {
  props: {
    pageTitle: {
      type: String,
    },
  },
  data() {
    return {
      cards,
    }
  },
  computed: {
    // use the prop 'pageTitle' in the filter of cards. Return that card' action
    currentCard() {
      const thisTitle = this.pageTitle
      const thisCard = cards.filter(function (e) {
        return e.title === thisTitle
      })
      return thisCard[0].badges
    },
  },
}
</script>
