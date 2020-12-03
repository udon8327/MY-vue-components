<template lang="pug">
.view-agreement
  .title-area
    h1 會員認證
  .info-area
    p 本服務限定西元2013/1/1後曾經在資生堂國際櫃消費並留有完整真實姓名、電話、出生年月日之顧客申請使用。
    h6 貼心提醒
    p 當日消費並成為資生堂國際櫃之會員者，即可申請LINE個人化服務，在顧客資料建檔完成之1個工作天後(不含假日)，以LINE訊息通知認證成功。申請LINE官方帳號綁定服務時，資生堂國際櫃會依據您所提供的出生年月日、行動電話與LINE帳號進行身份驗證，本查詢與驗證服務不會經由LINE記錄資料。僅於資生堂國際櫃系統執行。 綁定個人化服務成功後，若您重新安裝LINE APP或更換手機，須以原本LINE ID登入。方可使用後續的LINE個人化服務。於綁定個人化服務前，您應詳閱台灣資生堂股份有限公司之「#[a(href="https://www.global-shiseido.com.tw/privacy-notice.html") 使用條款]」、「#[a(href="https://www.global-shiseido.com.tw/privacy-notice.html") 個資與隱私權政策]」之告知事項（以下簡稱「資生堂告知事項」），當您勾選以下同意欄位並成功綁定個人化服務後，即代表您已詳閱告知事項，並已清楚台灣資生堂股份有限公司於資生堂告知事項範圍內，得蒐集、處理、國際傳遞及利用您的資料。
  .agree-area
    ud-checkbox(v-model="isAgree" options="我己詳閱資生堂告知事項內容並同意")
  .button-area
    ud-button(@click="nextCheck") 下一步
      i.fas.fa-chevron-right
</template>

<script>
export default {
  mounted() {
    this.UdAlert({msg: "同意啦 哪次不同意的", confirm: () => console.log('嗯嗯'), confirmTxt: "好喔"});
    console.log(this.getRandom());
    console.log(this.isEmpty('1'));
  },
  data() {
    return {
      isAgree: false
    }
  },
  methods: {
    nextCheck: function(){
      this.isAgree ? this.$router.push('userinfo') : this.UdAlert({msg: "請先同意資生堂告知事項內容"})
    },
  }
}
</script>

<style lang="sass">
</style>
