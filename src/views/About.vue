<template lang="pug">
  .about
    Modal(title="確認")
      template(slot="body")
        p 彈窗內容
    h1 This is an about page
    Modal(title="發送確認" sureText="確定" btnType="1" :showModal="showModal" @cancel="showModal = false")
      template(slot="body")
        p 確定要送出嗎?
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "About",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>
