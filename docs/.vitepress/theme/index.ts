import DefaultTheme from 'vitepress/theme'
import RepoCard from './components/RepoCard.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('RepoCard', RepoCard)
    app.component('ProjectGrid', ProjectGrid)
  }
}
