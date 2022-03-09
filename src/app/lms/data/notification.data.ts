export const NOTIFICATION = [
    {
        "id": 1,
        "name": "user_invitation",
        "typeId": 1,
        "translatedName": "User invitation",
        "templates": [
            {
                "id": 1,
                "subject": "User invitation form {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 1,
                    "notificationTemplateId": 1
                }
            }
        ],
        "settings": null
    },
    {
        "id": 2,
        "name": "password_reset",
        "typeId": 1,
        "translatedName": "Password reset",
        "templates": [
            {
                "id": 2,
                "subject": "Password reset link provided by {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 2,
                    "notificationTemplateId": 2
                }
            }
        ],
        "settings": null
    },
    {
        "id": 3,
        "name": "user_joined",
        "typeId": 1,
        "translatedName": "User joined",
        "templates": [
            {
                "id": 3,
                "subject": "A new user has been joined in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 3,
                    "notificationTemplateId": 3
                }
            },
            {
                "id": 4,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 3,
                    "notificationTemplateId": 4
                }
            }
        ],
        "settings": {
            "id": 1,
            "notificationEventId": 3,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 1,
                    "notificationSettingId": 1,
                    "audienceType": "roles",
                    "audiences": [
                        1
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 4,
        "name": "roles_created",
        "typeId": 1,
        "translatedName": "Roles created",
        "templates": [
            {
                "id": 5,
                "subject": "A new roles has been created in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 4,
                    "notificationTemplateId": 5
                }
            },
            {
                "id": 6,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 4,
                    "notificationTemplateId": 6
                }
            }
        ],
        "settings": {
            "id": 2,
            "notificationEventId": 4,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 2,
                    "notificationSettingId": 2,
                    "audienceType": "roles",
                    "audiences": [
                        1
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 5,
        "name": "roles_updated",
        "typeId": 1,
        "translatedName": "Roles updated",
        "templates": [
            {
                "id": 7,
                "subject": "A roles has been updated in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 5,
                    "notificationTemplateId": 7
                }
            },
            {
                "id": 8,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 5,
                    "notificationTemplateId": 8
                }
            }
        ],
        "settings": {
            "id": 3,
            "notificationEventId": 5,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 3,
                    "notificationSettingId": 3,
                    "audienceType": "roles",
                    "audiences": [
                        1
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 6,
        "name": "roles_deleted",
        "typeId": 1,
        "translatedName": "Roles deleted",
        "templates": [
            {
                "id": 9,
                "subject": "A roles has been deleted in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 6,
                    "notificationTemplateId": 9
                }
            },
            {
                "id": 10,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 6,
                    "notificationTemplateId": 10
                }
            }
        ],
        "settings": {
            "id": 4,
            "notificationEventId": 6,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 4,
                    "notificationSettingId": 4,
                    "audienceType": "roles",
                    "audiences": [
                        1
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 7,
        "name": "pipeline_created",
        "typeId": 1,
        "translatedName": "Pipeline created",
        "templates": [
            {
                "id": 11,
                "subject": " A new pipeline named {pipeline_name} has been created in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 7,
                    "notificationTemplateId": 11
                }
            },
            {
                "id": 12,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 7,
                    "notificationTemplateId": 12
                }
            }
        ],
        "settings": {
            "id": 5,
            "notificationEventId": 7,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 5,
                    "notificationSettingId": 5,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 8,
        "name": "pipeline_updated",
        "typeId": 1,
        "translatedName": "Pipeline updated",
        "templates": [
            {
                "id": 13,
                "subject": "A new pipeline named {pipeline_name} has been updated in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 8,
                    "notificationTemplateId": 13
                }
            },
            {
                "id": 14,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 8,
                    "notificationTemplateId": 14
                }
            }
        ],
        "settings": {
            "id": 6,
            "notificationEventId": 8,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 6,
                    "notificationSettingId": 6,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 9,
        "name": "pipeline_deleted",
        "typeId": 1,
        "translatedName": "Pipeline deleted",
        "templates": [
            {
                "id": 15,
                "subject": "A new pipeline named {pipeline_name} has been deleted in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 9,
                    "notificationTemplateId": 15
                }
            },
            {
                "id": 16,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 9,
                    "notificationTemplateId": 16
                }
            }
        ],
        "settings": {
            "id": 7,
            "notificationEventId": 9,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 7,
                    "notificationSettingId": 7,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 10,
        "name": "deal_created",
        "typeId": 1,
        "translatedName": "Deal created",
        "templates": [
            {
                "id": 17,
                "subject": "A new deal named {deal_name} has been created in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 10,
                    "notificationTemplateId": 17
                }
            },
            {
                "id": 18,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 10,
                    "notificationTemplateId": 18
                }
            }
        ],
        "settings": {
            "id": 8,
            "notificationEventId": 10,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 8,
                    "notificationSettingId": 8,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 11,
        "name": "deal_updated",
        "typeId": 1,
        "translatedName": "Deal updated",
        "templates": [
            {
                "id": 19,
                "subject": "A new deal named {deal_name} has been updated in {app_name}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 11,
                    "notificationTemplateId": 19
                }
            },
            {
                "id": 20,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 11,
                    "notificationTemplateId": 20
                }
            }
        ],
        "settings": {
            "id": 9,
            "notificationEventId": 11,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 9,
                    "notificationSettingId": 9,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 12,
        "name": "deal_deleted",
        "typeId": 1,
        "translatedName": "Deal deleted",
        "templates": [
            {
                "id": 21,
                "subject": "A deal named {deal_name} has been deleted by {action_by}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 12,
                    "notificationTemplateId": 21
                }
            },
            {
                "id": 22,
                "subject": null,
                "type": "database",
                "pivot": {
                    "notificationEventId": 12,
                    "notificationTemplateId": 22
                }
            }
        ],
        "settings": {
            "id": 10,
            "notificationEventId": 12,
            "updatedBy": null,
            "notifyBy": [
                "database",
                "mail"
            ],
            "createdAt": "2021-09-29T05:39:31.000000Z",
            "updatedAt": "2021-09-29T05:39:31.000000Z",
            "audiences": [
                {
                    "id": 10,
                    "notificationSettingId": 10,
                    "audienceType": "roles",
                    "audiences": [
                        1,
                        2
                    ],
                    "createdAt": "2021-09-29T05:39:31.000000Z",
                    "updatedAt": "2021-09-29T05:39:31.000000Z"
                }
            ]
        }
    },
    {
        "id": 13,
        "name": "deal_assigned",
        "typeId": 1,
        "translatedName": "Deal assigned",
        "templates": [
            {
                "id": 23,
                "subject": "A lead under {deal_name} has been assigned by {action_by}",
                "type": "mail",
                "pivot": {
                    "notificationEventId": 13,
                    "notificationTemplateId": 23
                }
            }
        ],
        "settings": null
    }
]