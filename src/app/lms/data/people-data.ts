export const PEOPLE = {
  "id": 312,
  "name": "Ho Chi Min",
  "address": null,
  "contactTypeId": 2,
  "createdBy": {
    "id": 42,
    "firstName": "Yap",
    "lastName": "Meng Yau",
    "fullName": "Yap Meng Yau"
  },
  "ownerId": 42,
  "createdAt": "2022-01-27T02:18:36.000000Z",
  "updatedAt": "2022-02-16T11:02:48.000000Z",
  "countryId": 133,
  "area": "test",
  "state": "test",
  "city": "test",
  "zipCode": "test",
  "attachLoginUserId": null,
  "openDealsCount": 1,
  "closeDealsCount": 0,
  "linkedContactCount": 0,
  "contactType": {
    "id": 2,
    "name": "Lead from Branch",
    "class": "info"
  },
  "owner": {
    "id": 42,
    "firstName": "Yap",
    "lastName": "Meng Yau",
    "email": "myyap@bankislam.com.my",
    "lastLoginAt": null,
    "createdBy": 10,
    "statusId": 1,
    "invitationToken": "bXl5YXBAYmFua2lzbGFtLmNvbS5teS1pbnZpdGF0aW9uLWZyb20tdXM=",
    "createdAt": "2022-01-26T08:32:38.000000Z",
    "updatedAt": "2022-01-27T00:43:21.000000Z",
    "deletedAt": null,
    "fullName": "Yap Meng Yau",
    "profilePicture": null
  },
  "phone": [
    {
      "id": 330,
      "value": "+60 10-674 5327",
      "typeId": 3,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdAt": "2022-02-16T07:43:38.000000Z",
      "updatedAt": "2022-02-16T07:43:38.000000Z",
      "type": {
        "id": 3,
        "name": "Office",
        "class": "warning",
        "createdAt": null,
        "updatedAt": null
      }
    }
  ],
  "email": [
    {
      "id": 330,
      "value": "scott@ascott.gmail.com.uk",
      "typeId": 3,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdAt": "2022-02-16T07:43:38.000000Z",
      "updatedAt": "2022-02-16T07:43:38.000000Z",
      "type": {
        "id": 3,
        "name": "Office",
        "class": "warning",
        "createdAt": null,
        "updatedAt": null
      }
    },
    {
      "id": 331,
      "value": "test2@email.com",
      "typeId": null,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdAt": "2022-02-16T07:43:38.000000Z",
      "updatedAt": "2022-02-16T07:43:38.000000Z",
      "type": null
    }
  ],
  "country": {
    "id": 133,
    "name": "Malaysia"
  },
  "organizations": [],
  "tags": [
    {
      "id": 10,
      "name": "074 - SELAYANG",
      "colorCode": "#a4e6c2",
      "pivot": {
        "taggableId": 312,
        "tagId": 10,
        "taggableType": "App\\Models\\CRM\\Person\\Person"
      }
    }
  ],
  "profilePicture": {
    "id": 1,
    "path": "\/storage\/avatar\/620cda265e0e3.png",
    "type": "profile_picture",
    "createdAt": "2022-02-16T11:04:06.000000Z",
    "updatedAt": "2022-02-16T11:04:06.000000Z",
    "fullUrl": "http:\/\/lms-demo.imocha.com.my\/leads\/storage\/avatar\/620cda265e0e3.png"
  },
  "deals": [
    {
      "id": 69,
      "title": "test",
      "value": 20,
      "pipelineId": 1,
      "stageId": 3,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "lostReasonId": null,
      "statusId": 13,
      "createdBy": 43,
      "ownerId": 43,
      "description": "test",
      "expiredAt": "2022-02-24 00:00:00",
      "comment": null,
      "createdAt": "2022-02-14T03:13:08.000000Z",
      "updatedAt": "2022-02-23T03:39:29.000000Z",
      "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-02-14T03:13:08.000000Z\",\"2022-02-23T03:39:27.438965Z\"],\"move_at\":\"2022-02-23T03:39:27.438834Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-02-23T03:39:27.439030Z\",\"2022-02-23T03:39:29.001767Z\"],\"move_at\":\"2022-02-23T03:39:27.438988Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-23T03:39:29.001832Z\"],\"move_at\":\"2022-02-23T03:39:29.001876Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
      "avgAgeOfDeal": 14,
      "contextable": {
        "id": 312,
        "name": "Ho Chi Min",
        "address": null,
        "contactTypeId": 2,
        "createdBy": 42,
        "ownerId": 42,
        "createdAt": "2022-01-27T02:18:36.000000Z",
        "updatedAt": "2022-02-16T11:02:48.000000Z",
        "countryId": 133,
        "area": "test",
        "state": "test",
        "city": "test",
        "zipCode": "test",
        "attachLoginUserId": null,
        "profilePicture": {
          "id": 1,
          "path": "\/storage\/avatar\/620cda265e0e3.png",
          "type": "profile_picture",
          "createdAt": "2022-02-16T11:04:06.000000Z",
          "updatedAt": "2022-02-16T11:04:06.000000Z",
          "fullUrl": "http:\/\/lms-demo.imocha.com.my\/leads\/storage\/avatar\/620cda265e0e3.png"
        }
      },
      "owner": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "fullName": "Von Feng",
        "profilePicture": null
      },
      "status": {
        "id": 13,
        "name": "status_open",
        "class": "primary",
        "type": "deal",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "Open"
      }
    }
  ],
  "followers": [
    {
      "id": 3,
      "personId": 18,
      "contextableId": 312,
      "person": {
        "id": 18,
        "name": "Lead0001",
        "email": [
          {
            "id": 31,
            "value": "pearly.kong+1@imocha.com.my",
            "typeId": 3,
            "contextableType": "App\\Models\\CRM\\Person\\Person",
            "contextableId": 18,
            "createdAt": "2022-01-19T09:31:39.000000Z",
            "updatedAt": "2022-01-19T09:31:39.000000Z"
          }
        ],
        "profilePicture": null
      }
    },
    {
      "id": 4,
      "personId": 19,
      "contextableId": 312,
      "person": {
        "id": 19,
        "name": "Lead0003",
        "email": [
          {
            "id": 32,
            "value": "pearly.kong+3@imocha.com.my",
            "typeId": 3,
            "contextableType": "App\\Models\\CRM\\Person\\Person",
            "contextableId": 19,
            "createdAt": "2022-01-19T09:34:43.000000Z",
            "updatedAt": "2022-01-19T09:34:43.000000Z"
          }
        ],
        "profilePicture": null
      }
    }
  ],
  "activity": [
    {
      "id": 18,
      "title": "Mr. Ho",
      "description": "Called customer @ 27 Jan 22, 8am. Customer not eligible to apply the financing product due to <2 years business operations",
      "activityTypeId": 6,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 42,
        "firstName": "Yap",
        "lastName": "Meng Yau",
        "email": "myyap@bankislam.com.my",
        "lastLoginAt": null,
        "createdBy": 10,
        "statusId": 1,
        "invitationToken": "bXl5YXBAYmFua2lzbGFtLmNvbS5teS1pbnZpdGF0aW9uLWZyb20tdXM=",
        "createdAt": "2022-01-26T08:32:38.000000Z",
        "updatedAt": "2022-01-27T00:43:21.000000Z",
        "deletedAt": null,
        "fullName": "Yap Meng Yau"
      },
      "statusId": 12,
      "startedAt": "2022-01-27",
      "endedAt": "2022-01-27",
      "startTime": "10:03:00",
      "endTime": "10:18:00",
      "createdAt": "2022-01-27T02:21:41.000000Z",
      "updatedAt": "2022-01-27T02:21:41.000000Z",
      "icon": "cpu",
      "activityType": {
        "id": 6,
        "name": "Others",
        "icon": "cpu",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 12,
        "name": "status_done",
        "class": "success",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "default.status_done"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 20,
      "title": "test",
      "description": "test",
      "activityTypeId": 1,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 12,
      "startedAt": "2022-02-08",
      "endedAt": "2022-02-08",
      "startTime": "14:00:00",
      "endTime": "14:15:00",
      "createdAt": "2022-02-08T06:15:26.000000Z",
      "updatedAt": "2022-02-11T06:22:00.000000Z",
      "icon": "phone-call",
      "activityType": {
        "id": 1,
        "name": "Call",
        "icon": "phone-call",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 12,
        "name": "status_done",
        "class": "success",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "default.status_done"
      },
      "participants": [
        {
          "id": 18,
          "name": "Lead0001",
          "address": null,
          "contactTypeId": 5,
          "createdBy": 1,
          "ownerId": 1,
          "createdAt": "2022-01-19T09:31:39.000000Z",
          "updatedAt": "2022-01-19T09:31:39.000000Z",
          "countryId": null,
          "area": null,
          "state": null,
          "city": null,
          "zipCode": null,
          "attachLoginUserId": null,
          "pivot": {
            "activityId": 20,
            "personId": 18
          },
          "profilePicture": null
        }
      ],
      "collaborators": []
    },
    {
      "id": 21,
      "title": "test 2",
      "description": "test",
      "activityTypeId": 3,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 11,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T06:22:40.000000Z",
      "updatedAt": "2022-02-11T06:22:40.000000Z",
      "icon": "mail",
      "activityType": {
        "id": 3,
        "name": "Email",
        "icon": "mail",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 11,
        "name": "status_todo",
        "class": "primary",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "Todo"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 22,
      "title": "test2",
      "description": null,
      "activityTypeId": 1,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 11,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:13:32.000000Z",
      "updatedAt": "2022-02-11T08:13:32.000000Z",
      "icon": "phone-call",
      "activityType": {
        "id": 1,
        "name": "Call",
        "icon": "phone-call",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 11,
        "name": "status_todo",
        "class": "primary",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "Todo"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 23,
      "title": "test3",
      "description": null,
      "activityTypeId": 2,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 11,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:13:39.000000Z",
      "updatedAt": "2022-02-11T08:13:39.000000Z",
      "icon": "users",
      "activityType": {
        "id": 2,
        "name": "Meeting",
        "icon": "users",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 11,
        "name": "status_todo",
        "class": "primary",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "Todo"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 24,
      "title": "test4",
      "description": null,
      "activityTypeId": 4,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 11,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:13:45.000000Z",
      "updatedAt": "2022-02-11T08:13:45.000000Z",
      "icon": "credit-card",
      "activityType": {
        "id": 4,
        "name": "Task",
        "icon": "credit-card",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 11,
        "name": "status_todo",
        "class": "primary",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "Todo"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 25,
      "title": "test5",
      "description": null,
      "activityTypeId": 5,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 12,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:13:52.000000Z",
      "updatedAt": "2022-02-13T08:38:55.000000Z",
      "icon": "calendar",
      "activityType": {
        "id": 5,
        "name": "Deadline",
        "icon": "calendar",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 12,
        "name": "status_done",
        "class": "success",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "default.status_done"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 26,
      "title": "test6",
      "description": null,
      "activityTypeId": 6,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 12,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:14:00.000000Z",
      "updatedAt": "2022-02-12T08:04:51.000000Z",
      "icon": "cpu",
      "activityType": {
        "id": 6,
        "name": "Others",
        "icon": "cpu",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 12,
        "name": "status_done",
        "class": "success",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "default.status_done"
      },
      "participants": [],
      "collaborators": []
    },
    {
      "id": 27,
      "title": "test7",
      "description": "test",
      "activityTypeId": 1,
      "contextableType": "App\\Models\\CRM\\Person\\Person",
      "contextableId": 312,
      "createdBy": {
        "id": 43,
        "firstName": "Von",
        "lastName": "Feng",
        "email": "tzefeng.fong@imocha.com.my",
        "lastLoginAt": null,
        "createdBy": 1,
        "statusId": 1,
        "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
        "createdAt": "2022-01-27T09:28:03.000000Z",
        "updatedAt": "2022-01-27T09:29:06.000000Z",
        "deletedAt": null,
        "fullName": "Von Feng"
      },
      "statusId": 12,
      "startedAt": "2022-02-11",
      "endedAt": "2022-02-11",
      "startTime": "14:06:00",
      "endTime": "14:21:00",
      "createdAt": "2022-02-11T08:18:13.000000Z",
      "updatedAt": "2022-02-13T08:39:40.000000Z",
      "icon": "phone-call",
      "activityType": {
        "id": 1,
        "name": "Call",
        "icon": "phone-call",
        "createdAt": null,
        "updatedAt": null
      },
      "status": {
        "id": 12,
        "name": "status_done",
        "class": "success",
        "type": "activity",
        "createdAt": null,
        "updatedAt": null,
        "translatedName": "default.status_done"
      },
      "participants": [
        {
          "id": 18,
          "name": "Lead0001",
          "address": null,
          "contactTypeId": 5,
          "createdBy": 1,
          "ownerId": 1,
          "createdAt": "2022-01-19T09:31:39.000000Z",
          "updatedAt": "2022-01-19T09:31:39.000000Z",
          "countryId": null,
          "area": null,
          "state": null,
          "city": null,
          "zipCode": null,
          "attachLoginUserId": null,
          "pivot": {
            "activityId": 27,
            "personId": 18
          },
          "profilePicture": null
        }
      ],
      "collaborators": [
        {
          "id": 43,
          "firstName": "Von",
          "lastName": "Feng",
          "email": "tzefeng.fong@imocha.com.my",
          "lastLoginAt": null,
          "createdBy": 1,
          "statusId": 1,
          "invitationToken": "dHplZmVuZy5mb25nQGltb2NoYS5jb20ubXktaW52aXRhdGlvbi1mcm9tLXVz",
          "createdAt": "2022-01-27T09:28:03.000000Z",
          "updatedAt": "2022-01-27T09:29:06.000000Z",
          "deletedAt": null,
          "fullName": "Von Feng",
          "pivot": {
            "activityId": 27,
            "userId": 43
          },
          "profilePicture": null
        },
        {
          "id": 45,
          "firstName": "demo",
          "lastName": "demo",
          "email": "ebxc@imocha.com.my",
          "lastLoginAt": null,
          "createdBy": 10,
          "statusId": 1,
          "invitationToken": "ZWJ4Y0BpbW9jaGEuY29tLm15LWludml0YXRpb24tZnJvbS11cw==",
          "createdAt": "2022-02-08T04:37:55.000000Z",
          "updatedAt": "2022-02-08T04:38:49.000000Z",
          "deletedAt": null,
          "fullName": "demo demo",
          "pivot": {
            "activityId": 27,
            "userId": 45
          },
          "profilePicture": null
        }
      ]
    }
  ],
  "customFields": []
};