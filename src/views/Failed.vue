<template lang="pug">
.view-failed
  .title-area
    h1 資料已綁定
  .info-area
    p 您的資料已進行過綁定，謝謝您的支持！
  .thank-area
    img(src="@/assets/images/thanku.png", alt="")
  .link-area
    .link(@click="toUrl('https://www.facebook.com/globalshiseidotw/')")
      img(src="@/assets/images/link_01.jpg", alt="")
    .link(@click="toUrl('https://www.global-shiseido.com.tw')")
      img(src="@/assets/images/link_02.jpg", alt="")
</template>

<script>
export default {
  methods: {
    toUrl: function(url){
      location.href = url;
    },
  }
}
</script>

<style lang="sass">
</style>
