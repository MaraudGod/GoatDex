import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GoatDex',
  description: 'A curated index of adult-content websites, tools, video, images, communities, archiving resources, and guides.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: '🐐 GOATs', link: '/goats' },
      { text: '🎬 Video', link: '/video' },
      { text: '🖼️ Images', link: '/images' },
      { text: '🛠️ Tools', link: '/tools' },
      { text: '🗄️ Archive', link: '/archiving' },
      { text: '🌐 Websites', link: '/websites' },
      { text: '📚 Guides', link: '/guides' }
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'Home', link: '/' },
          { text: '🐐 GOATs', link: '/goats' },
          { text: 'Starter Pack', link: '/starter-pack' }
        ]
      },
      {
        text: 'Adult Media',
        items: [
          { text: '🎬 Video', link: '/video' },
          { text: '🖼️ Images', link: '/images' },
          { text: '🌐 Websites', link: '/websites' },
          { text: '💬 Communities', link: '/communities' }
        ]
      },
      {
        text: 'Collect & Preserve',
        items: [
          { text: '📥 Downloading', link: '/downloading' },
          { text: '🗄️ Hoarding & Archiving', link: '/archiving' },
          { text: '⚙️ Automation', link: '/automation' }
        ]
      },
      {
        text: 'Discovery & Utilities',
        items: [
          { text: '🔎 Search & Discovery', link: '/search' },
          { text: '🛠️ Tools', link: '/tools' },
          { text: '🔒 Privacy & Safety', link: '/privacy' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: '📚 Guides', link: '/guides' },
          { text: 'About', link: '/about' },
          { text: 'Contribute', link: '/contribute' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MaraudGod/GoatDex' }
    ],
    editLink: {
      pattern: 'https://github.com/MaraudGod/GoatDex/edit/goatdex-v1-scaffold/docs/:path',
      text: 'Edit this page on GitHub'
    },
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'Curated links only. GoatDex does not host third-party media.',
      copyright: 'GoatDex'
    }
  }
})
