<template>
  <footer class="footer">
    <div class="navbar">
      <ul class="footer-list">
        <li class="footer-item"><a class="link" href="#">Social media links</a></li>
        <li class="footer-item"><a class="link" href="#">Klantenservice contactopties</a></li>
      </ul>
    </div>
    <div class="navbar">
      <ul class="footer-list">
        <li v-for="(link, i) in footerLinks" :key="i">
          <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { footerLinks } from '@/_config'
export default {
  data() {
    return {
      footerLinks: footerLinks
    }
  },
}
</script>
