<template>
  <div>
    <div @mouseover="hoverRow = 1" @mouseout="hoverRow = 0" @click="clickedRow = 1" :class="{slide1: (hoverRow === 1), slide2: (clickedRow === 1)}">1</div>
    <div @mouseover="hoverRow = 2" @mouseout="hoverRow = 0" @click="clickedRow = 2" :class="{slide1: (hoverRow === 2), slide2: (clickedRow === 2)}">2</div>
    <pre>{{coin}}</pre>
    <button @click="coin.color1 = 'asdf'">change</button>
  </div>
</template>

<script type="text/babel">
import { Coin } from '@/common/models/coin.js';
import { Swipe, SwipeItem } from "vue-swipe";

export default {
  data() {
    const coin = new Coin();
    console.log(coin);
    return {
      coin,
      hoverRow: 0,
      clickedRow: 0,
      teste: 1
    };
  },
  methods: {
    clicked() {
      console.log("clicked");
    }
  },
  mounted() {},
  components: {
    Swipe, SwipeItem
  }
};
</script>

<style lang="css">
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>