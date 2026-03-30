import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DhoondlayAI | Enterprise-Grade Open Source Java Ecosystem",
  description: "DhoondlayAI provides high-performance, developer-first open source libraries for the modern Java ecosystem. Explore artifact-json and artifact-shield built for high-scale enterprise applications.",

  // Clean URLs (removes .html from links)
  cleanUrls: true,

  // Show last updated timestamp
  lastUpdated: true,

  // Automatically generate sitemap for Google
  sitemap: {
    hostname: 'https://dhoondlayai.com' // Update this once you have a custom domain
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;850&display=swap' }],
    
    // Core SEO Meta Tags
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'DhoondlayAI' }],
    ['meta', { name: 'keywords', content: 'java, spring, open source, json-library, security, artifact-json, artifact-shield, data-firewall, dhoondlayai, webflux, reactive-java, enterprise-software, developer-tools' }],
    ['meta', { name: 'theme-color', content: '#6d5cff' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // OpenGraph (Facebook, LinkedIn)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:title', content: 'DhoondlayAI | High-Performance Java & Spring Libraries' }],
    ['meta', { property: 'og:description', content: 'Empower your modern Java stack with our professional-grade open source libraries. High-speed JSON serialization and reactive security for AI-powered apps.' }],
    ['meta', { property: 'og:site_name', content: 'DhoondlayAI' }],
    ['meta', { property: 'og:url', content: 'https://main-domain.vercel.app/' }],
    ['meta', { property: 'og:image', content: 'https://main-domain.vercel.app/logo.png' }],
    ['meta', { property: 'og:image:alt', content: 'DhoondlayAI Open Source Ecosystem' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@dhoondlayai' }],
    ['meta', { name: 'twitter:title', content: 'DhoondlayAI: Modern Java Ecosystem Redefined' }],
    ['meta', { name: 'twitter:description', content: 'Scale your Java and Spring applications with our open source libraries. Performance-first, security-ready, and developer-verified.' }],
    ['meta', { name: 'twitter:image', content: 'https://main-domain.vercel.app/logo.png' }],

    // Mobile & Web App
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    // Search
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Libraries', link: '/#libraries' },
      { text: 'GitHub', link: 'https://github.com/dhoondlayai' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dhoondlayai' }
    ],

    footer: {
      message: 'Published under the Apache 2.0 License.',
      copyright: 'Copyright © 2026 DhoondlayAI'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  appearance: false
})
