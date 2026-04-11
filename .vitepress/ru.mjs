import {
    getSidebar
} from 'vitepress-plugin-auto-sidebar'

import {
    resolve
} from 'path';

// https://vitepress.dev/reference/site-config
export const ru = {
    lang: 'ru',
    themeConfig: {
        nav: [{
                text: '🏠 Домой',
                link: '/ru/'
            },
            {
                text: '🔁 DevOps',
                items: [{
                    text: '🛠️ Ansible',
                    link: 'devops/ansible/'
                }, ]
            }
        ],

        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/hidden-wolf-pool/hidden-wolf-pool.github.io'
        }],

        search: {
            provider: 'local'
        },

        sidebar: getSidebar({
            contentRoot: resolve(__dirname, '../docs'),
            contentDirs: ['ru/devops/ansible'],
            useFrontmatter: true,
            collapsible: true,
            collapsed: true,
        }),
    },
};
