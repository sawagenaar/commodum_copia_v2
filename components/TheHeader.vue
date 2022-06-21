<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-content">
        <ul class="navbar-list">
          <li class="navbar-item"
            v-for="(link, i) in headerLinks"
            :key="i"
            @click="toggle(selectItem(i))"
            @mouseenter="toggle(selectItem(i))"
            @mouselieve="toggle(selectItem(i))">
            <router-link class="navbar-link" :to="link.url">{{ link.title }}</router-link>
            <div class="lyout-menu">
              <ul class="lyout-menu-list" :class="{ isActive }" v-if="(activeItem === i && link.childrens)">
                <li class="lyout-menu-item"
                  v-for="item in link.childrens"
                  :key="item">
                  <router-link class="navbar-link" :to="`/categories/${item.id}`">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="navbar-account">
          <a class="navbar-link" href="#">Account</a>
        </div>
      </div>
    </nav>
    <nav class="navbar">
      <input class="search" type="text" placeholder="Zoek een product">
      <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></button>
    </nav>
  </header>
</template>

<script>
import { headerLinks } from '@/_config'
export default {
  data() {
    return {
      headerLinks: headerLinks,
      childrens: headerLinks.childrens,
      activeItem: null,
      isActive: false
    }
  },
  // definieert het element waarop de gebeurtenis plaatsvond
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
    // Verandert het actieve element in inactief en terug
    toggle() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<style>
</style>