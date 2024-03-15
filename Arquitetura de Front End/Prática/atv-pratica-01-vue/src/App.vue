<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/description">Description</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin-top: var(--header-height);
}

nav {
  position: fixed;
  inset: 0 0 auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 16px;
  height: var(--header-height);

  background-color: var(--primary-color);
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}
</style>
