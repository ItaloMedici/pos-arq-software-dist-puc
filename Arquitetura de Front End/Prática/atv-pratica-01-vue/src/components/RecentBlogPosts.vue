<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { posts } from '@/data/posts.ts'

const recentPosts = posts.slice(0, 3)
</script>

<template>
  <div class="recent">
    <h2>Últimas do Blog</h2>

    <section>
      <ul>
        <li v-for="post in recentPosts" :key="post.id">
          <article>
            <RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink>
            <p>{{ post.description }}</p>
          </article>
        </li>
      </ul>
    </section>
    <RouterLink to="/blog">Ver tudo</RouterLink>
  </div>
</template>

<style scoped>
.recent {
  padding: 48px 24px;
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h2 {
  font-size: 24px;
  font-weight: 600;
}

ul {
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

article {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

article a {
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: var(--text-color);
}

article a:hover {
  color: var(--primary-color);
}

article p {
  color: var(--text-color);
  opacity: 0.7;
  font-size: 12px;
}

.recent > a {
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color);
}
</style>
@/data/posts
