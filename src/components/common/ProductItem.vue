<template lang="html">
  <div class="ProductItem__wrapper"
    v-if="product">
    <div class="ProductItem__img"
      @click.stop="openProductPage()">
      <img :src="product.image" alt="">
    </div>
    <div class="ProductItem__infowrapper">
      <div :class="{
        'ProductItem__infocontainer': !openDetails,
        'ProductItem__infocontainer--open': openDetails
      }">
        <h1 class="ProductItem__itemtitle">
          {{ product.name }}
        </h1>
        <h3 class="ProductItem__itemsubtitle">
          {{ product.description }}
        </h3>
        <div class="ProductItem__itemdetails">
          <button class="ProductItem__btn--outline"
              @click.stop="openDetails = !openDetails">
            {{ openDetails ? '-' : '+' }} detalhes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      product: {
        type: Object,
        default() { return null; },
      },
    },
    data() {
      return {
        openDetails: false,
      };
    },
    components: {},
    computed: {},
    methods: {
      openProductPage() {
        this.$router.push({ path: '/products/1' });
      },
    },
    mounted() {},
  };
</script>

<style lang="scss">
  .ProductItem__wrapper {
      background: #FFF;
      min-height: 420px;
      max-height: 420px;
      height: 100%;
      min-width: 280px;
      max-width: 280px;
      width: 100%;
      margin: 20px;
      position: relative;
      font: 200 10px/1em Montserrat;
      box-shadow: 0px 2px 10px -4px rgba(0,0,0,0.3);
      transition: all .3s ease;
      &:hover {
        box-shadow: 0px 10px 25px -5px rgba(0,0,0,0.3);
      }
  /* ... */
    }
</style>
