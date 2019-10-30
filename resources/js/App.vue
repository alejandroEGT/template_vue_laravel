// App.vue

<template>
    <transition name="">
      <router-view></router-view>
    </transition>
  
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>
</script>