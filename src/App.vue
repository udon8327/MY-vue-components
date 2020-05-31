<template lang="pug">
  #app
    .container
      .wrapper
        #nav
          router-link(to="/") Home
          |  | 
          router-link(to="/about") About
        router-view
</template>

<style lang="sass">
*
  box-sizing: border-box

html,body
  height: 100%

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background-color: #eee
  height: 100%

.container
  max-width: 540px
  margin: 0 auto
  background-color: #ccc
  min-height: 100%
  padding: 15px
  .wrapper
    background-color: #fff
    padding: 15px 10% 60px 10%

a
  text-decoration: none !important

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
