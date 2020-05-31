<template lang="pug">
  transition(name="slide" appear)
    .modal(v-show="showModal")
      .mask
      .modal-dialog
        .modal-header
          span {{title}}
          a.icon-close(href="javascript:;" @click="$emit('cancel')") ╳
        .modal-body
          slot(name="body")
        .modal-footer
          a.btn(href="javascript:;" v-if="btnType == 1" @click="$emit('submit')") {{sureText}}
          a.btn(href="javascript:;" v-if="btnType == 2" @click="$emit('cancel')") {{cancelText}}
          .btn-group(v-if="btnType == 3")
            a.btn(href="javascript:;" @click="$emit('submit')") {{sureText}}
            a.btn.btn-default(href="javascript:;" @click="$emit('cancel')") {{cancelText}}
</template>

<script>
export default {
  name: "Modal",
  props: {
    // 弹框标题
    title: String,
    // 按钮类型： 1：确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    // 按钮文本
    sureText: {
      type: String,
      default: "確定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>

<style scoped lang="sass">
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  transition: all 0.2s
  .mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #000000
    opacity: 0.5
  .modal-dialog
    position: absolute
    top: 50%
    left: 50%
    width: 100%
    max-width: 460px
    height: auto
    max-height: 90%
    background-color: #ffffff
    transform: translate(-50%, -50%)
    overflow-y: auto
    .modal-header
      background-color: #f5f5f5
      padding: 15px
      font-size: 16px
      .icon-close
        position: absolute
        top: 15px
        right: 15px
        font-size: 14px
    .modal-body
      padding: 15px
      font-size: 14px
    .modal-footer
      padding: 15px
      text-align: center
      background-color: #f5f5f5
  &.slide-leave-to
    opacity: 0
  &.slide-enter
    opacity: 0

.btn
  display: inline-block
  width: 110px
  line-height: 30px
  text-align: center
  background-color: #FF6600
  color: #ffffff
  border: none
  cursor: pointer

.btn-default
  background-color: #b0b0b0
  color: #d7d7d7

.btn-large
  width: 202px
  height: 50px
  line-height: 50px
  font-size: 18px

.btn-huge
  width: 300px
  height: 54px
  line-height: 54px
  font-size: 16px

.btn-group
  .btn
    margin-right: 20px
    &:last-child
      margin-right: 0
</style>
