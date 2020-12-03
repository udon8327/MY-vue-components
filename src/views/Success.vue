<template lang="pug">
.view-success
  .title-area
    h1 會員認證完成
  .info-area
    p 恭喜您成為認證會員，資生堂國際櫃會有不定期活動，記得隨時回來關注我們喔！
  .thank-area
    img(src="@/assets/images/thanku.png", alt="")
  .link-area
    .link(@click="toUrl('#')")
      img(src="@/assets/images/item_01.png", alt="")
      p 開啟花椿會員卡
    .link(@click="toUrl('https://www.facebook.com/globalshiseidotw/')")
      img(src="@/assets/images/item_02.png", alt="")
      p 官方粉絲團
    .link(@click="toUrl('#')")
      img(src="@/assets/images/item_03.png", alt="")
      p 開啟御藏卡
    .link(@click="toUrl('https://www.global-shiseido.com.tw')")
      img(src="@/assets/images/item_04.png", alt="")
      p 線上購物官網
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
