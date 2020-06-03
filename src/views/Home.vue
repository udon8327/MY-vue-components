<template lang="pug">
  .home
    img(alt="Vue logo" src="@/assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App!")
    h1 {{title}}
    h3 {{mode}}
    h6 {{arrAfter}}
    Button(text="發送" @click="showModal = true")
    Modal(:title="title" sureText="確定" btnType="3" :showModal="showModal" @submit="send" @cancel="showModal = false")
      template(slot="body")
        p 確定要送出嗎?
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import { getInfo, login } from "@/api/test";
// import upperFirst from "lodash/upperFirst";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Button,
    Modal
  },
  data() {
    return {
      showModal: false,
      mode: `目前為${process.env.NODE_ENV}模式`,
      title: "警告",
      text: "udon-sdfsd",
      arr: [1, 1, 2, 3, 4, 4, 4, 5, 5]
    };
  },
  computed: {
    arrAfter: function() {
      return _.uniq(this.arr);
    }
  },
  methods: {
    send: function() {
      let _this = this;
      this.showModal = false;
      // this.$router.push("about");
      login(this.mode).then(res => {
        _this.mode = `${res}哈哈哈`;
      });
      getInfo(123).then(res => {
        _this.title = res.title;
      });
    }
  }
};
</script>
