module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'introduction',
        },
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'getting-started/add-bot-to-server',
                'getting-started/first-steps',
                'getting-started/the-different-poll-types',
            ],
        },
        {
            type: 'doc',
            id: 'faq',
        },
        {
            type: 'doc',
            id: 'troubleshooting',
        },
        {
            type: 'category',
            label: 'Commands',
            items: [
                'commands/poll',
                'commands/timepoll',
                'commands/closepoll',
                'commands/listpolls',
            ],
        },
        {
            type: 'category',
            label: 'Permissions',
            items: [
                'permissions/permission-system',
                'permissions/required-bot-permissions',
            ],
        },
    ],
};