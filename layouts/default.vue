<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
.idz-page-promo p { color: #eee;font-size: 18px; }
.idz-title h1 span { font-weight: bold; }
#idz-header-inner { position: relative; }
@media (min-width: 1440px) {
.uk-container { max-width: 1440px; }
}
</style>
