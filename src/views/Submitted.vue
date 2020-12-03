<template lang="pug">
.view-submitted
  .title-area
    h1 資料確認送出
  .info-area
    p 您的資料已送出！升級電子會員約須1個工作天，認證成功後將會以LINE訊息通知，謝謝您的支持！
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
