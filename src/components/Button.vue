<template lang="pug">
  .button(:style="{'color': color, 'background-color': bgColor}" @click="$emit('click')") {{text}}
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
    bgColor: String,
    border: String,
    borderRadius: String
  }
};
</script>

<style scoped lang="sass">
.button
  background-color: #000
  color: #fff
  width: 100%
  max-width: 100%
  padding: 8px
  letter-spacing: 1px
  text-align: center
  cursor: pointer
  font-size: 16px
  transition: all 0.2s ease
  @media (max-width: 340px)
    font-size: 14px
    padding: 5px
  &:hover
    background-color: lighten(#000, 10%)
</style>
