import {
    getSidebar
} from 'vitepress-plugin-auto-sidebar'

import {
    resolve
} from 'path';

// https://vitepress.dev/reference/site-config
export const en = {
    lang: 'en',
    themeConfig: {
        nav: [{
                text: '🏠 Home',
                link: '/en/'
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
            contentDirs: ['en/devops/ansible'],
            useFrontmatter: true,
            collapsible: true,
            collapsed: true,
        }),
    },
};
