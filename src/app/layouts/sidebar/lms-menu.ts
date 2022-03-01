import { MenuItem } from './menu.model';

export const LMS_MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        link: '/lms/dashboard'
    },
    {
        id: 2,
        label: 'LMS.SIDEBAR.LEADS',
        icon: 'bx-group',
        subItems: [
            {
                id: 3,
                label: 'LMS.SIDEBAR.LEADSSUB.PEOPLE',
                parentId: 2,
                link: '/lms/leads/people'
            },
            {
                id: 4,
                label: 'LMS.SIDEBAR.LEADSSUB.ORGANIZATIONS',
                parentId: 2,
                link: '/lms/leads/organization'
            },
            {
                id: 5,
                label: 'LMS.SIDEBAR.LEADSSUB.LEADGROUPS',
                parentId: 2,
                link: '/lms/leads/lead-group'
            }
        ]
    },
    {
        id: 6,
        label: 'LMS.SIDEBAR.DEALS',
        icon: 'bx-task',
        subItems: [
            {
                id: 7,
                label: 'LMS.SIDEBAR.DEALSSUB.PIPELINEVIEW',
                parentId: 6,
                link: '/lms/deals/pipeline-view'
            },
            {
                id: 8,
                label: 'LMS.SIDEBAR.DEALSSUB.ALLDEALS',
                parentId: 6,
                link: '/lms/deals/all-deals'
            },
            {
                id: 9,
                label: 'LMS.SIDEBAR.DEALSSUB.PIPELINES',
                parentId: 6,
                link: '/lms/deals/pipelines'
            },
            {
                id: 10,
                label: 'LMS.SIDEBAR.DEALSSUB.LOSTREASONS',
                parentId: 6,
                link: '/lms/deals/lost-reasons'
            }
        ]
    },
    {
        id: 11,
        label: 'LMS.SIDEBAR.PROPOSALS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 12,
                label: 'LMS.SIDEBAR.PROPOSALSSUB.LIST',
                parentId: 11,
                link: '/lms/proposals/proposal-list'
            },
            {
                id: 13,
                label: 'LMS.SIDEBAR.PROPOSALSSUB.TEMPLATES',
                parentId: 11,
                link: '/lms/proposals/templates'
            }
        ]
    },
    {
        id: 13,
        label: 'LMS.SIDEBAR.ACTIVITIES',
        icon: 'dripicons-graph-line',
        subItems: [
            {
                id: 14,
                label: 'LMS.SIDEBAR.ACTIVITIESSUB.CALENDAR',
                parentId: 13,
                link: '/lms/activities/calendar-view'
            },
            {
                id: 15,
                label: 'LMS.SIDEBAR.ACTIVITIESSUB.LIST',
                parentId: 13,
                link: '/lms/activities/activity-list'
            }
        ]
    },
    {
        id: 16,
        label: 'LMS.SIDEBAR.REPORTS',
        icon: 'bx bx-bar-chart',
        subItems: [
            {
                id: 17,
                label: 'LMS.SIDEBAR.REPORTSSUB.DEAL',
                parentId: 16,
                link: '/lms/reports/deal'
            },
            {
                id: 18,
                label: 'LMS.SIDEBAR.REPORTSSUB.PROPOSAL',
                parentId: 16,
                link: '/lms/reports/proposal'
            }, {
                id: 19,
                label: 'LMS.SIDEBAR.REPORTSSUB.PIPELINE',
                parentId: 16,
                link: '/lms/reports/pipeline'
            }
        ]
    },
    {
        id: 20,
        label: 'LMS.SIDEBAR.USERSROLE',
        icon: 'bx bx-user-check',
        link: '/lms/users-role'
    },
    {
        id: 21,
        label: 'LMS.SIDEBAR.SETTINGS',
        icon: 'bx bx-cog',
        link: '/lms/settings'
    }
];
