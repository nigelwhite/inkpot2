// gets the 'action' of each product from cards.yaml and puts the right one in
each product page
<template>
  <div class="mb-4 text-center">
    <!-- the value of action in cards.yaml -->
    <h2>{{ currentCard }}</h2>
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
      return thisCard[0].action
    },
  },
}
</script>
