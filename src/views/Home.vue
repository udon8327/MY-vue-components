<template lang="pug">
  .home
    img(alt="Vue logo" src="@/assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App!")
    h3 {{mode}}
    Button(text="發送" @click="showModal = true")
    Modal(title="發送確認" sureText="確定" btnType="3" :showModal="showModal" @submit="send" @cancel="showModal = false")
      template(slot="body")
        p 確定要送出嗎?
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import { getInfo, login } from "@/api/test";

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
      mode: `目前為${process.env.NODE_ENV}模式`
    };
  },
  methods: {
    send: function() {
      this.showModal = false;
      // this.$router.push("about");
      login(this.mode);
      getInfo("id=123");
    }
  }
};
</script>
