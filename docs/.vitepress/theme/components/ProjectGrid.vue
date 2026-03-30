<template>
  <div class="repo-grid">
    <RepoCard
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </div>
</template>

<script setup>
import RepoCard from './RepoCard.vue'
import projects from '../projects.json'
</script>
