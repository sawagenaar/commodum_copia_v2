<template>
  <div class="wrapper">
    <the-header></the-header>
      <div class="wrapper-content">
        <router-view />
      </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {TheHeader, TheFooter},
}
</script>
