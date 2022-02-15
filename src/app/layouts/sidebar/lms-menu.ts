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
                parentId: 6
            },
            {
                id: 8,
                label: 'LMS.SIDEBAR.DEALSSUB.ALLDEALS',
                parentId: 6
            },
            {
                id: 9,
                label: 'LMS.SIDEBAR.DEALSSUB.PIPELINES',
                parentId: 6
            },
            {
                id: 10,
                label: 'LMS.SIDEBAR.DEALSSUB.LOSTREASONS',
                parentId: 6
            }
        ]
    },
    // {
    //     id: 11,
    //     label: 'LMS.SIDEBAR.PROPOSALS',
    //     icon: 'bx-home-circle'
    // },
    // {
    //     id: 12,
    //     label: 'LMS.SIDEBAR.ACTIVITIES',
    //     icon: 'bx-home-circle'
    // },
    // {
    //     id: 13,
    //     label: 'LMS.SIDEBAR.REPORTS',
    //     icon: 'bx-home-circle'
    // },
    // {
    //     id: 14,
    //     label: 'LMS.SIDEBAR.USERROLE',
    //     icon: 'bx-home-circle'
    // },
    // {
    //     id: 15,
    //     label: 'LMS.SIDEBAR.SETTINGS',
    //     icon: 'bx-home-circle'
    // }
];
