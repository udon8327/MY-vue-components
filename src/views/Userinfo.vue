<template lang="pug">
.view-userinfo
  ud-modal(v-model="isModalShow")
    h1 請填入必填欄位
    ud-button(@click="isModalShow = 0") OK
  .title-area
    h1 輸入個人資料
  .info-area
    p 請輸入您的出生年月日與行動電話號碼，方可完成服務設定，您所輸入的資料需與留存於資生堂國際櫃系統的資料相同。
  .form-area
    ud-form(:rules="rules" :model="user" ref="form")
      ud-form-item(label="出生年月日" prop="birth")
        ud-select-date(:placeholder="['選擇', '選擇', '選擇']" v-model="user.birth" third flex)
          span 年
          span(slot="second") 月
          span(slot="third") 日
      ud-form-item(label="行動電話" prop="phone")
        ud-input(placeholder="" v-model="user.phone" maxlength="10" type="tel")
      ud-form-item(label="選擇櫃點" prop="store")
        h6 ※請選擇離您最近的櫃點,此為之後活動領取的櫃點。
        ud-select-link(:placeholder="['縣市', '區域', '櫃點']" :options="storeArr" v-model="user.store" third)
  .button-area
    ud-button(@click="submitCheck") 完成送出
      i.fas.fa-chevron-right
</template>

<script>
export default {
  data() {
    return {
      isModalShow: 0,
      user: {
        birth: ["", "", ""],
        phone: "",
        store: ["", "", ""]
      },
      rules: {
        birth: [{type: 'required'}],
        phone: [{type: 'required'}, {type: 'phone'}],
        store: [{type: 'required'}],
      },
      storeArr: [
        {
          label: "基隆市", value: "KL",
          children: [
            { label: "仁愛區", value: "200",
              children: [
                { label: "仁愛分店01", value: "20001"},
                { label: "仁愛分店02", value: "20002"},
                { label: "仁愛分店03", value: "20003"},
              ]
            },
            { label: "信義區", value: "201", 
              children: [
                { label: "信義分店01", value: "20101"},
                { label: "信義分店02", value: "20102"},
                { label: "信義分店03", value: "20103"},
              ]
            },
          ]
        },
        {
          label: "台北市", value: "TP",
          children: [
            { label: "中正區", value: "100",
              children: [
                { label: "中正分店01", value: "10001"},
                { label: "中正分店02", value: "10002"},
                { label: "中正分店03", value: "10003"},
              ]
            },
            { label: "大同區", value: "103",
              children: [
                { label: "大同分店01", value: "10301"},
                { label: "大同分店02", value: "10302"},
                { label: "大同分店03", value: "10303"},
              ]  
            },
            { label: "中山區", value: "104",
              children: [
                { label: "中正分店01", value: "10401"},
                { label: "中正分店02", value: "10402"},
                { label: "中正分店03", value: "10403"},
              ]
            },
          ]
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
    toUrl: function(url){
      toUrl(url);
    },
    submitCheck: function(){
      this.$refs.form.validate(() => {
        // this.submit();
        this.$router.push('submitted');
      });
    },
    //API
    submit() {
      postApi(baseURL + `ajax/echo.php`, this.user).then(res => {
        if(!res.errorMsg){
          this.$router.push('submitted');
        }else{
          this.$alert({msg: res.errorMsg});
        }
      });
    }
  }
}
</script>

<style lang="sass">
</style>
