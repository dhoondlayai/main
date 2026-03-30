<template>
  <div class="repo-card">
    <div class="card-accent"></div>
    <div class="header">
      <div class="icon-box">
        <!-- JSON icon -->
        <svg v-if="type === 'json'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
        <!-- Shield icon -->
        <svg v-else-if="type === 'shield'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <!-- Default icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m7.5 4.27 9 5.15"/>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 22V12"/>
        </svg>
      </div>
      <div>
        <h3 class="title">{{ title }}</h3>
        <span class="badge">{{ language }}</span>
      </div>
    </div>
    <p class="description">{{ description }}</p>
    <div class="footer">
      <a v-if="docsLink" :href="docsLink" target="_blank" class="link link--docs">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
        Docs
      </a>
      <a :href="link" target="_blank" class="link link--repo">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        GitHub <span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'language', 'link', 'docsLink', 'type'])
</script>

<style scoped>
.repo-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1.75rem;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02);
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #6d5cff, #a855f7, #ec4899);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.repo-card:hover {
  transform: translateY(-6px);
  border-color: rgba(109, 92, 255, 0.25);
  box-shadow: 0 12px 36px rgba(109,92,255,0.1), 0 2px 8px rgba(0,0,0,0.04);
}

.repo-card:hover .card-accent {
  opacity: 1;
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon-box {
  width: 44px;
  height: 44px;
  background: rgba(109, 92, 255, 0.08);
  border: 1px solid rgba(109, 92, 255, 0.12);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d5cff;
  transition: all 0.35s ease;
  flex-shrink: 0;
}

.repo-card:hover .icon-box {
  background: #6d5cff;
  color: #fff;
  transform: scale(1.05) rotate(3deg);
  box-shadow: 0 4px 12px rgba(109, 92, 255, 0.3);
}

.title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.badge {
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(109, 92, 255, 0.06);
  color: #6d5cff;
  padding: 0.15rem 0.6rem;
  border-radius: 99px;
  border: 1px solid rgba(109, 92, 255, 0.12);
  display: inline-block;
  margin-top: 0.25rem;
}

.description {
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.65;
  margin-bottom: 1.75rem;
  flex-grow: 1;
}

.footer {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.link {
  font-size: 0.82rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
}

.link--docs {
  color: #6d5cff;
  background: rgba(109, 92, 255, 0.06);
  border: 1px solid rgba(109, 92, 255, 0.12);
}

.link--docs:hover {
  background: rgba(109, 92, 255, 0.12);
  border-color: rgba(109, 92, 255, 0.25);
}

.link--repo {
  color: #475569;
  background: #f8f9fc;
  border: 1px solid #e2e8f0;
}

.link--repo:hover {
  color: #1e293b;
  border-color: #cbd5e1;
  background: #f1f3f8;
}

.arrow {
  transition: transform 0.25s ease;
}

.repo-card:hover .arrow {
  transform: translateX(3px);
}
</style>
