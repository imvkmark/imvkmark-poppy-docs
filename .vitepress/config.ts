import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '4.x',
    activeMatch: `^/(4\.x)/`,
    link: '/4.x/'
  },
  {
    text: '开发约定',
    activeMatch: `^/develop\/spec/`,
    link: '/develop/spec'
  },
  {
    text: 'Change Log',
    activeMatch: `^/develop\/changelog/`,
    link: '/develop/changelog'
  },
  {
    text: '其他',
    activeMatch: `^/(develop)(1\.x)|(2\.x)|(3.x)/`,
    items: [
      { text: '1.x', link: '1.x/tree' },
      { text: '2.x', link: '2.x/' },
      { text: '3.x', link: '3.x/' }
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/1.x': [
    {
      text: '1.x',
      items: [
        {
          text: '模型',
          link: '/1.x/model'
        },
        {
          text: '文件目录树',
          link: '/1.x/tree'
        }
      ]
    }
  ],
  '/2.x': [
    {
      text: '2.x',
      items: [
        {
          text: '开发者模式/ACL',
          link: '/2.x/acl'
        },
        {
          text: 'Action 业务逻辑封装',
          link: '/2.x/action'
        },
        {
          text: 'Api文档 1.0',
          link: '/2.x/api'
        },
        {
          text: 'compass - LemonCMS',
          link: '/2.x/compass'
        },
        {
          text: 'Env 环境配置',
          link: '/2.x/env'
        },
        {
          text: '入门手册',
          link: '/2.x/index'
        },
        {
          text: '多语言',
          link: '/2.x/lang'
        },
        {
          text: '模型 v2.0',
          link: '/2.x/model'
        },
        {
          text: '策略(Policy)',
          link: '/2.x/policy'
        },
        {
          text: 'RBAC 角色控制',
          link: '/2.x/rbac-role'
        },
        {
          text: 'rbac 在项目中的实现',
          link: '/2.x/rbac'
        },
        {
          text: '路由 / 控制器',
          link: '/2.x/route'
        },
        {
          text: 'sample - 创建后台访问模块',
          link: '/2.x/sample'
        },
        {
          text: '服务器环境配置',
          link: '/2.x/server'
        },
        {
          text: '图片上传',
          link: '/2.x/upload'
        }
      ]
    }
  ],
  '/3.x': [
    {
      text: '入门',
      items: [
        {
          text: 'Readme',
          link: '/3.x/index'
        }
      ]
    },
    {
      text: '框架',
      items: [
        {
          text: '配置',
          link: '/3.x/framework/config'
        },
        {
          text: '扩展开发',
          link: '/3.x/framework/extension'
        },
        {
          text: '开发计划',
          link: '/3.x/framework/plan'
        },
        {
          text: 'README',
          link: '/3.x/framework/readme'
        },
        {
          text: '错误码',
          link: '/3.x/framework/resp'
        },
        {
          text: '文件树',
          link: '/3.x/framework/tree'
        }
      ]
    },
    {
      text: '组件',
      items: [
        {
          text: 'CanalEs - 同步导入监听组件',
          link: '/3.x/components/canal-es'
        },
        {
          text: '核心',
          link: '/3.x/components/core'
        },
        {
          text: '管理后台',
          link: '/3.x/components/mgr-page'
        },
        {
          text: '系统',
          link: '/3.x/components/system'
        }
      ]
    },
    {
      text: '项目',
      items: [
        {
          text: '最佳实践',
          link: '/3.x/project/best-practice'
        },
        {
          text: 'Code Review',
          link: '/3.x/project/code-review'
        },
        {
          text: '前后端分离项目约定',
          link: '/3.x/project/fe-backend'
        },
        {
          text: '[WIP] Laravel-Mix',
          link: '/3.x/project/fe-mix'
        },
        {
          text: '安装',
          link: '/3.x/project/install'
        },
        {
          text: '说明',
          link: '/3.x/project/readme'
        }
      ]
    },
    {
      text: '模型',
      items: [
        {
          text: '业务逻辑',
          link: '/3.x/module/action'
        },
        {
          text: '事件',
          link: '/3.x/module/event'
        },
        {
          text: '服务和钩子',
          link: '/3.x/module/hook'
        },
        {
          text: '国际化',
          link: '/3.x/module/lang'
        },
        {
          text: '菜单',
          link: '/3.x/module/menus'
        },
        {
          text: '模型',
          link: '/3.x/module/models'
        },
        {
          text: '权限',
          link: '/3.x/module/permission'
        },
        {
          text: '策略',
          link: '/3.x/module/policy'
        },
        {
          text: '批次更新',
          link: '/3.x/module/progress'
        },
        {
          text: '常见问题',
          link: '/3.x/module/qa'
        },
        {
          text: '说明',
          link: '/3.x/module/readme'
        }
      ]
    }
  ],
  '/4.x': [
    {
      text: '前言',
      items: [
        {
          text: '版本说明',
          link: '/4.x/'
        },
        {
          text: '升级说明',
          link: '/4.x/upgrade'
        },
        {
          text: '常见问题',
          link: '/4.x/faq'
        }
      ]
    },
    {
      text: '框架',
      items: [
        {
          text: 'Resp',
          link: '/4.x/framework/resp'
        }
      ]
    },
    {
      text: '模块',
      items: [
        {
          text: '入门',
          link: '/4.x/module/readme'
        },
        {
          text: '菜单和权限',
          link: '/4.x/module/menu-and-permission'
        },
        {
          text: '服务和钩子',
          link: '/4.x/module/hook'
        },
        {
          text: '模型',
          link: '/4.x/module/models'
        },
        {
          text: '策略',
          link: '/4.x/module/policy'
        },
        {
          text: '事件',
          link: '/4.x/module/event'
        },
        {
          text: '更新',
          link: '/4.x/module/progress'
        }
      ]
    },
    {
      text: '插件',
      items: [
        {
          text: 'Core',
          link: '/4.x/poppy/core'
        },
        {
          text: 'System',
          link: '/4.x/poppy/system'
        },
        {
          text: 'Mgr Page',
          link: '/4.x/poppy/mgr-page'
        },
        {
          text: 'Aliyun Oss',
          link: '/4.x/poppy/aliyun-oss'
        },
        {
          text: 'Aliyun Push',
          link: '/4.x/poppy/aliyun-push'
        },
        {
          text: 'App',
          link: '/4.x/poppy/app'
        },
        {
          text: 'Sms',
          link: '/4.x/poppy/sms'
        }
      ]
    },
    {
      text: '扩展',
      items: [
        {
          text: '支付宝支付',
          link: '/4.x/poppy/ext-alipay'
        },
        {
          text: 'Ip Store',
          link: '/4.x/poppy/ext-ip_store'
        },
        {
          text: 'Phpstan',
          link: '/4.x/poppy/ext-phpstan'
        }
      ]
    },
    {
      text: '[WIP]MgrApp',
      items: [
        {
          text: '管理平台',
          link: '/4.x/poppy/mgr-app'
        },
        {
          text: 'Form',
          link: '/4.x/poppy/mgr-app-form'
        },
        {
          text: 'Grid',
          link: '/4.x/poppy/mgr-app-grid'
        },
        {
          text: 'Table',
          link: '/4.x/poppy/mgr-app-table'
        }
      ]
    }
  ],
  '/develop': [
    {
      text: '开发',
      items: [
        {
          text: 'ChangeLog',
          link: '/develop/changelog'
        },
        {
          text: '开发规范',
          link: '/develop/spec'
        }
      ]
    }
  ]
}

// Placeholder of the i18n config for @vuejs-translations.
const i18n: ThemeConfig['i18n'] = {
  toc: '页内导航'
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'Poppy Framework',
  description: 'Poppy Framework - 基于 Laravel 的模块化加载框架',
  srcDir: 'src',
  srcExclude: [],
  scrollOffset: 'header',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    i18n,

    // algolia,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/imvkmark/' },
      { icon: 'twitter', link: 'https://twitter.com/DuoliVk' }
    ],

    editLink: {
      repo: 'imvkmark/poppy-docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: '鲁ICP备13016276号-9',
        link: 'https://beian.miit.gov.cn/#/Integrated/index'
      },
      copyright: `Copyright © 2015-${new Date().getFullYear()} duoli`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
