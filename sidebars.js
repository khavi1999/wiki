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