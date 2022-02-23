export const PIPELINEVIEW = [
    {
        "id": 1,
        "title": "Test Deal",
        "value": 100000,
        "pipelineId": 1,
        "stageId": 4,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 4,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 4,
        "description": "Deals",
        "expiredAt": "2022-01-31 00:00:00",
        "comment": null,
        "createdAt": "2022-01-04T06:29:50.000000Z",
        "updatedAt": "2022-02-08T10:45:50.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-04T06:29:50.000000Z\",\"2022-01-05T06:27:26.950143Z\",\"2022-01-05T06:27:29.554778Z\",\"2022-01-05T06:27:32.093980Z\",\"2022-01-24T13:58:44.672839Z\",\"2022-02-06T08:33:20.272588Z\",\"2022-02-06T08:33:22.864129Z\",\"2022-02-06T08:33:23.696649Z\"],\"move_at\":\"2022-02-06T08:33:22.864177Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-05T06:27:26.950212Z\",\"2022-01-05T06:27:29.554859Z\",\"2022-01-05T06:27:32.094054Z\",\"2022-01-05T06:27:33.793336Z\",\"2022-01-24T13:58:44.672939Z\",\"2022-01-24T13:58:44.672947Z\",\"2022-02-06T08:33:20.272676Z\",\"2022-02-06T08:33:22.864211Z\",\"2022-02-06T08:33:23.696724Z\",\"2022-02-08T10:45:50.805086Z\"],\"move_at\":\"2022-02-06T08:33:23.696769Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-05T06:27:33.793403Z\",\"2022-01-24T13:58:44.672982Z\",\"2022-02-08T10:45:50.805174Z\",\"2022-02-08T10:45:50.805183Z\"],\"move_at\":\"2022-02-06T08:33:23.696769Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-08T10:45:50.805224Z\"],\"move_at\":\"2022-02-08T10:45:50.805266Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 48,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 2,
        "title": "Test Deal 2",
        "value": 500,
        "pipelineId": 1,
        "stageId": 4,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 2,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-06T02:41:43.000000Z",
        "updatedAt": "2022-02-07T07:09:30.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-06T02:41:43.000000Z\",\"2022-01-13T01:44:56.906382Z\",\"2022-01-24T13:58:43.083379Z\",\"2022-02-07T07:09:26.097540Z\"],\"move_at\":\"2022-01-24T13:58:43.083432Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-13T01:44:56.906446Z\",\"2022-01-24T13:58:43.083468Z\",\"2022-02-07T07:09:26.097612Z\",\"2022-02-07T07:09:27.025282Z\"],\"move_at\":\"2022-02-07T07:09:26.097657Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-07T07:09:27.025347Z\",\"2022-02-07T07:09:28.058804Z\"],\"move_at\":\"2022-02-07T07:09:27.025391Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-07T07:09:28.058871Z\",\"2022-02-07T07:09:29.158709Z\",\"2022-02-07T07:09:30.425180Z\"],\"move_at\":\"2022-02-07T07:09:30.425222Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":5,\"timestamps\":[\"2022-02-07T07:09:29.158775Z\",\"2022-02-07T07:09:30.425253Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 47,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 3,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 6,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 5,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 11,
        "ownerId": 11,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:24:19.000000Z",
        "updatedAt": "2022-02-09T12:08:38.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:24:19.000000Z\",\"2022-02-08T10:42:24.694668Z\",\"2022-02-08T10:42:25.624569Z\",\"2022-02-09T12:08:34.487492Z\"],\"move_at\":\"2022-02-08T10:42:25.624618Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-02-08T10:42:24.694742Z\",\"2022-02-08T10:42:25.624653Z\",\"2022-02-09T12:08:34.487568Z\",\"2022-02-09T12:08:35.357173Z\"],\"move_at\":\"2022-02-09T12:08:34.487612Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-09T12:08:35.357240Z\",\"2022-02-09T12:08:36.169331Z\"],\"move_at\":\"2022-02-09T12:08:35.357283Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-09T12:08:36.169397Z\",\"2022-02-09T12:08:36.960385Z\"],\"move_at\":\"2022-02-09T12:08:36.169439Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-02-09T12:08:36.960450Z\",\"2022-02-09T12:08:38.086329Z\"],\"move_at\":\"2022-02-09T12:08:36.960499Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-02-09T12:08:38.086394Z\"],\"move_at\":\"2022-02-09T12:08:38.086438Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 11,
            "firstName": "Boon Keat",
            "lastName": "Goh",
            "fullName": "Boon Keat Goh",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 4,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 6,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:27:13.000000Z",
        "updatedAt": "2022-01-24T13:59:20.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:27:13.000000Z\",\"2022-01-24T13:58:53.509598Z\"],\"move_at\":\"2022-01-24T13:58:53.509469Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-24T13:58:53.509662Z\",\"2022-01-24T13:59:20.695862Z\"],\"move_at\":\"2022-01-24T13:58:53.509621Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-24T13:59:20.695927Z\"],\"move_at\":\"2022-01-24T13:59:20.695975Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 5,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 2,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 7,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:31:50.000000Z",
        "updatedAt": "2022-02-12T06:37:55.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:31:50.000000Z\",\"2022-01-24T13:59:09.469763Z\",\"2022-02-06T08:33:21.677726Z\",\"2022-02-08T10:42:26.769157Z\",\"2022-02-12T06:37:54.007371Z\",\"2022-02-12T06:37:55.684344Z\"],\"move_at\":\"2022-02-12T06:37:54.007420Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-24T13:59:09.469828Z\",\"2022-02-06T08:33:21.677810Z\",\"2022-02-08T10:42:26.769232Z\",\"2022-02-12T06:37:54.007454Z\",\"2022-02-12T06:37:55.684417Z\"],\"move_at\":\"2022-02-12T06:37:55.684462Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":3,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 6,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 7,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 7,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:31:50.000000Z",
        "updatedAt": "2022-02-21T10:07:27.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:31:50.000000Z\",\"2022-02-13T07:20:35.166725Z\"],\"move_at\":\"2022-02-13T07:20:35.166549Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-02-13T07:20:35.166796Z\",\"2022-02-21T10:07:27.271281Z\"],\"move_at\":\"2022-02-13T07:20:35.166753Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-21T10:07:27.271368Z\",\"2022-02-21T10:07:27.271377Z\"],\"move_at\":\"2022-02-13T07:20:35.166753Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-21T10:07:27.271439Z\",\"2022-02-21T10:07:27.271446Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-02-21T10:07:27.271506Z\",\"2022-02-21T10:07:27.271513Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-02-21T10:07:27.271572Z\",\"2022-02-21T10:07:27.271580Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[\"2022-02-21T10:07:27.271617Z\"],\"move_at\":\"2022-02-21T10:07:27.271663Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 7,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 8,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:34:15.000000Z",
        "updatedAt": "2022-01-11T04:34:15.000000Z",
        "histories": null,
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 8,
        "title": "SME",
        "value": 500,
        "pipelineId": 1,
        "stageId": 6,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 8,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:34:15.000000Z",
        "updatedAt": "2022-02-07T06:24:03.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:34:15.000000Z\",\"2022-01-13T01:46:10.738254Z\",\"2022-01-13T01:46:13.751415Z\",\"2022-01-13T01:46:14.791822Z\",\"2022-01-13T01:46:16.008412Z\",\"2022-01-13T01:46:19.891721Z\",\"2022-01-13T01:46:29.148816Z\",\"2022-01-13T01:46:31.825347Z\",\"2022-01-13T01:46:33.373359Z\",\"2022-01-24T13:58:56.275655Z\"],\"move_at\":\"2022-01-13T01:46:33.373408Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-13T01:46:10.738319Z\",\"2022-01-13T01:46:13.751495Z\",\"2022-01-13T01:46:14.791893Z\",\"2022-01-13T01:46:16.008494Z\",\"2022-01-13T01:46:19.891800Z\",\"2022-01-13T01:46:21.898247Z\",\"2022-01-13T01:46:25.809049Z\",\"2022-01-13T01:46:29.148896Z\",\"2022-01-13T01:46:31.825570Z\",\"2022-01-13T01:46:31.825581Z\",\"2022-01-13T01:46:32.474098Z\",\"2022-01-13T01:46:33.373441Z\",\"2022-01-24T13:58:56.275746Z\",\"2022-01-24T13:58:56.275754Z\"],\"move_at\":\"2022-01-13T01:46:33.373408Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-13T01:46:21.898311Z\",\"2022-01-13T01:46:25.809125Z\",\"2022-01-13T01:46:31.825648Z\",\"2022-01-13T01:46:31.825656Z\",\"2022-01-13T01:46:32.474191Z\",\"2022-01-13T01:46:32.474199Z\",\"2022-01-24T13:58:56.275814Z\",\"2022-01-24T13:58:56.275821Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-01-13T01:46:31.825704Z\",\"2022-01-13T01:46:32.474401Z\",\"2022-01-24T13:58:56.275876Z\",\"2022-01-24T13:58:56.275883Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-01-24T13:58:56.275928Z\",\"2022-02-07T06:24:03.467252Z\"],\"move_at\":\"2022-01-24T13:58:56.275966Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-02-07T06:24:03.467316Z\"],\"move_at\":\"2022-02-07T06:24:03.467358Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 9,
        "title": "SME",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 9,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:36:29.000000Z",
        "updatedAt": "2022-02-14T03:32:54.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-11T04:36:29.000000Z\",\"2022-02-14T03:32:52.439554Z\",\"2022-02-14T03:32:54.208936Z\"],\"move_at\":\"2022-02-14T03:32:54.208983Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":2,\"timestamps\":[\"2022-02-14T03:32:52.439618Z\",\"2022-02-14T03:32:54.209017Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 10,
        "title": "Wealth",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 9,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:36:29.000000Z",
        "updatedAt": "2022-01-11T04:36:29.000000Z",
        "histories": null,
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 11,
        "title": "Wealth",
        "value": 500,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 10,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T04:41:05.000000Z",
        "updatedAt": "2022-01-24T13:58:58.000000Z",
        "histories": "[{\"stage_id\":1,\"move_at\":\"2022-01-24T13:58:58.647816Z\",\"call\":\"initial\",\"last_stage\":true,\"current_stage\":false,\"timestamps\":[\"2022-01-11T04:41:05.000000Z\",\"2022-01-24T13:58:58.647949Z\"]},{\"stage_id\":2,\"move_at\":\"2022-01-24T13:58:58.647972Z\",\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[\"2022-01-24T13:58:58.648012Z\",\"2022-01-24T13:58:58.648020Z\"]},{\"stage_id\":3,\"move_at\":\"2022-01-24T13:58:58.648034Z\",\"call\":\"initial\",\"last_stage\":false,\"current_stage\":true,\"timestamps\":[\"2022-01-24T13:58:58.648067Z\"]},{\"stage_id\":4,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]},{\"stage_id\":5,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]},{\"stage_id\":6,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]},{\"stage_id\":7,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]}]",
        "avgAgeOfDeal": 42,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 14,
        "title": "SME",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 12,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 11,
        "ownerId": 11,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T10:23:06.000000Z",
        "updatedAt": "2022-01-11T10:23:06.000000Z",
        "histories": null,
        "avgAgeOfDeal": 41,
        "owner": {
            "id": 11,
            "firstName": "Boon Keat",
            "lastName": "Goh",
            "fullName": "Boon Keat Goh",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 15,
        "title": "SME",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 12,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 7,
        "ownerId": 7,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-11T10:27:09.000000Z",
        "updatedAt": "2022-01-11T10:27:09.000000Z",
        "histories": null,
        "avgAgeOfDeal": 41,
        "owner": {
            "id": 7,
            "firstName": "pearly",
            "lastName": "kong02",
            "fullName": "pearly kong02",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 16,
        "title": "Wealth",
        "value": 1500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 13,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-12T06:56:39.000000Z",
        "updatedAt": "2022-01-12T06:56:39.000000Z",
        "histories": null,
        "avgAgeOfDeal": 40,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 17,
        "title": "Wealth",
        "value": 1500,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 14,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-13T03:26:29.000000Z",
        "updatedAt": "2022-01-24T13:59:29.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-13T03:26:29.000000Z\",\"2022-01-24T13:59:00.871449Z\"],\"move_at\":\"2022-01-24T13:59:00.871313Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-24T13:59:00.871513Z\",\"2022-01-24T13:59:29.875485Z\"],\"move_at\":\"2022-01-24T13:59:00.871472Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-24T13:59:29.875550Z\"],\"move_at\":\"2022-01-24T13:59:29.875593Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 40,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 18,
        "title": "Wealth",
        "value": 1500,
        "pipelineId": 1,
        "stageId": 5,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 15,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-13T03:28:07.000000Z",
        "updatedAt": "2022-01-24T13:59:25.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-13T03:28:07.000000Z\",\"2022-01-24T13:59:01.604931Z\"],\"move_at\":\"2022-01-24T13:59:01.604797Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-24T13:59:01.604996Z\",\"2022-01-24T13:59:01.605003Z\"],\"move_at\":\"2022-01-24T13:59:01.604954Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-24T13:59:01.605051Z\",\"2022-01-24T13:59:25.006228Z\"],\"move_at\":\"2022-01-24T13:59:01.605017Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-01-24T13:59:25.006331Z\",\"2022-01-24T13:59:25.006342Z\"],\"move_at\":\"2022-01-24T13:59:01.605017Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-01-24T13:59:25.006384Z\"],\"move_at\":\"2022-01-24T13:59:25.006432Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 40,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 19,
        "title": "SME",
        "value": 1000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 16,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 5,
        "ownerId": 5,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-14T02:27:13.000000Z",
        "updatedAt": "2022-01-14T02:27:13.000000Z",
        "histories": null,
        "avgAgeOfDeal": 39,
        "owner": {
            "id": 5,
            "firstName": "pearly",
            "lastName": "kong01",
            "fullName": "pearly kong01",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 20,
        "title": "Wealth",
        "value": 1500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 16,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-14T02:35:42.000000Z",
        "updatedAt": "2022-01-14T02:35:42.000000Z",
        "histories": null,
        "avgAgeOfDeal": 39,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 21,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 17,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-14T06:50:48.000000Z",
        "updatedAt": "2022-01-14T06:50:48.000000Z",
        "histories": null,
        "avgAgeOfDeal": 38,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 22,
        "title": "SME",
        "value": 1000,
        "pipelineId": 1,
        "stageId": 4,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 16,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 7,
        "ownerId": 7,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-14T07:23:24.000000Z",
        "updatedAt": "2022-01-24T13:59:04.000000Z",
        "histories": "[{\"stage_id\":1,\"move_at\":\"2022-01-24T13:59:04.930980Z\",\"call\":\"initial\",\"last_stage\":true,\"current_stage\":false,\"timestamps\":[\"2022-01-14T07:23:24.000000Z\",\"2022-01-24T13:59:04.931111Z\"]},{\"stage_id\":2,\"move_at\":\"2022-01-24T13:59:04.931133Z\",\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[\"2022-01-24T13:59:04.931217Z\",\"2022-01-24T13:59:04.931226Z\"]},{\"stage_id\":3,\"move_at\":\"2022-01-24T13:59:04.931241Z\",\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[\"2022-01-24T13:59:04.931276Z\",\"2022-01-24T13:59:04.931283Z\"]},{\"stage_id\":4,\"move_at\":\"2022-01-24T13:59:04.931296Z\",\"call\":\"initial\",\"last_stage\":false,\"current_stage\":true,\"timestamps\":[\"2022-01-24T13:59:04.931329Z\"]},{\"stage_id\":5,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]},{\"stage_id\":6,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]},{\"stage_id\":7,\"move_at\":null,\"call\":\"initial\",\"last_stage\":false,\"current_stage\":false,\"timestamps\":[]}]",
        "avgAgeOfDeal": 38,
        "owner": {
            "id": 7,
            "firstName": "pearly",
            "lastName": "kong02",
            "fullName": "pearly kong02",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 23,
        "title": "Personal Financing",
        "value": 100000,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 18,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:31:39.000000Z",
        "updatedAt": "2022-02-07T09:24:28.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-19T09:31:39.000000Z\",\"2022-01-19T09:37:37.323544Z\",\"2022-01-19T09:38:08.228936Z\",\"2022-01-19T09:38:08.228949Z\",\"2022-01-19T09:38:09.215788Z\",\"2022-01-19T09:38:09.215802Z\",\"2022-01-19T09:38:11.342890Z\",\"2022-01-19T09:38:11.342903Z\",\"2022-01-19T09:38:11.626107Z\",\"2022-01-19T09:38:11.626120Z\",\"2022-01-19T09:38:11.920576Z\",\"2022-01-19T09:38:11.920589Z\",\"2022-01-19T09:38:12.800896Z\",\"2022-01-19T09:38:12.800909Z\",\"2022-01-19T09:38:15.918727Z\",\"2022-01-19T09:38:15.918740Z\",\"2022-01-19T09:38:16.670674Z\",\"2022-01-19T09:38:16.670687Z\",\"2022-01-19T09:38:18.782319Z\",\"2022-01-19T09:38:18.782332Z\",\"2022-01-19T09:38:19.067336Z\",\"2022-01-19T09:38:19.067349Z\",\"2022-01-19T09:38:19.924476Z\",\"2022-01-19T09:38:19.924489Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-19T09:37:37.323614Z\",\"2022-01-19T09:37:39.141415Z\",\"2022-01-19T09:38:08.229015Z\",\"2022-01-19T09:38:08.229023Z\",\"2022-01-19T09:38:09.215870Z\",\"2022-01-19T09:38:09.215878Z\",\"2022-01-19T09:38:11.342972Z\",\"2022-01-19T09:38:11.342980Z\",\"2022-01-19T09:38:11.626191Z\",\"2022-01-19T09:38:11.626199Z\",\"2022-01-19T09:38:11.920656Z\",\"2022-01-19T09:38:11.920664Z\",\"2022-01-19T09:38:12.800977Z\",\"2022-01-19T09:38:12.800991Z\",\"2022-01-19T09:38:15.918809Z\",\"2022-01-19T09:38:15.918817Z\",\"2022-01-19T09:38:16.670755Z\",\"2022-01-19T09:38:16.670763Z\",\"2022-01-19T09:38:18.782401Z\",\"2022-01-19T09:38:18.782410Z\",\"2022-01-19T09:38:19.067417Z\",\"2022-01-19T09:38:19.067425Z\",\"2022-01-19T09:38:19.924557Z\",\"2022-01-19T09:38:19.924565Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-19T09:37:39.141482Z\",\"2022-01-19T09:37:39.919583Z\",\"2022-01-19T09:38:08.229079Z\",\"2022-01-19T09:38:08.229087Z\",\"2022-01-19T09:38:09.215938Z\",\"2022-01-19T09:38:09.215945Z\",\"2022-01-19T09:38:11.343038Z\",\"2022-01-19T09:38:11.343046Z\",\"2022-01-19T09:38:11.626259Z\",\"2022-01-19T09:38:11.626267Z\",\"2022-01-19T09:38:11.920723Z\",\"2022-01-19T09:38:11.920731Z\",\"2022-01-19T09:38:12.801051Z\",\"2022-01-19T09:38:12.801059Z\",\"2022-01-19T09:38:15.918877Z\",\"2022-01-19T09:38:15.918884Z\",\"2022-01-19T09:38:16.670858Z\",\"2022-01-19T09:38:16.670866Z\",\"2022-01-19T09:38:18.782469Z\",\"2022-01-19T09:38:18.782477Z\",\"2022-01-19T09:38:19.067485Z\",\"2022-01-19T09:38:19.067492Z\",\"2022-01-19T09:38:19.924624Z\",\"2022-01-19T09:38:19.924631Z\",\"2022-02-07T09:24:28.887900Z\"],\"move_at\":\"2022-02-07T09:24:28.887942Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[\"2022-01-19T09:37:39.919648Z\",\"2022-01-19T09:38:08.229124Z\",\"2022-01-19T09:38:09.215984Z\",\"2022-01-19T09:38:11.343083Z\",\"2022-01-19T09:38:11.626306Z\",\"2022-01-19T09:38:11.920768Z\",\"2022-01-19T09:38:12.801097Z\",\"2022-01-19T09:38:15.918923Z\",\"2022-01-19T09:38:16.670906Z\",\"2022-01-19T09:38:18.782515Z\",\"2022-01-19T09:38:19.067531Z\",\"2022-01-19T09:38:19.924669Z\",\"2022-02-07T09:24:28.887973Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": {
            "id": 18,
            "name": "Lead0001",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 31,
                    "value": "pearly.kong+1@imocha.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 31,
                    "value": "0121112222",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 24,
        "title": "SME",
        "value": 1000,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 2,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 5,
        "ownerId": 5,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:33:18.000000Z",
        "updatedAt": "2022-02-13T08:05:57.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-19T09:33:18.000000Z\",\"2022-01-19T09:57:43.116706Z\",\"2022-02-13T07:20:39.480998Z\",\"2022-02-13T08:05:30.528994Z\",\"2022-02-13T08:05:54.229847Z\",\"2022-02-13T08:05:57.622062Z\"],\"move_at\":\"2022-02-13T08:05:54.229893Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-19T09:57:43.116770Z\",\"2022-02-13T07:20:39.481082Z\",\"2022-02-13T08:05:30.529065Z\",\"2022-02-13T08:05:49.292408Z\",\"2022-02-13T08:05:51.658279Z\",\"2022-02-13T08:05:52.199993Z\",\"2022-02-13T08:05:53.285649Z\",\"2022-02-13T08:05:53.849888Z\",\"2022-02-13T08:05:54.229943Z\",\"2022-02-13T08:05:54.229950Z\",\"2022-02-13T08:05:57.622201Z\",\"2022-02-13T08:05:57.622210Z\"],\"move_at\":\"2022-02-13T08:05:54.229893Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-13T08:05:49.292474Z\",\"2022-02-13T08:05:51.658353Z\",\"2022-02-13T08:05:52.200055Z\",\"2022-02-13T08:05:53.285722Z\",\"2022-02-13T08:05:53.849953Z\",\"2022-02-13T08:05:54.229985Z\",\"2022-02-13T08:05:57.622251Z\"],\"move_at\":\"2022-02-13T08:05:57.622293Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 5,
            "firstName": "pearly",
            "lastName": "kong01",
            "fullName": "pearly kong01",
            "profilePicture": null
        },
        "contextable": null,
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 25,
        "title": "SME",
        "value": 1000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 19,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 11,
        "ownerId": 11,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:34:43.000000Z",
        "updatedAt": "2022-01-19T09:34:43.000000Z",
        "histories": null,
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 11,
            "firstName": "Boon Keat",
            "lastName": "Goh",
            "fullName": "Boon Keat Goh",
            "profilePicture": null
        },
        "contextable": {
            "id": 19,
            "name": "Lead0003",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 11,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 32,
                    "value": "pearly.kong+3@imocha.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 19,
                    "createdAt": "2022-01-19T09:34:43.000000Z",
                    "updatedAt": "2022-01-19T09:34:43.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 32,
                    "value": "0123334444",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 19,
                    "createdAt": "2022-01-19T09:34:43.000000Z",
                    "updatedAt": "2022-01-19T09:34:43.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 26,
        "title": "Wealth",
        "value": 1500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 20,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:35:58.000000Z",
        "updatedAt": "2022-01-19T09:35:58.000000Z",
        "histories": null,
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": {
            "id": 20,
            "name": "Lead0004",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 8,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 33,
                    "value": "pearly.kong+4@imocha.vcom.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 20,
                    "createdAt": "2022-01-19T09:35:58.000000Z",
                    "updatedAt": "2022-01-19T09:35:58.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 33,
                    "value": "0124445555",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 20,
                    "createdAt": "2022-01-19T09:35:58.000000Z",
                    "updatedAt": "2022-01-19T09:35:58.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 27,
        "title": "Personal Financing",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 21,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:42:22.000000Z",
        "updatedAt": "2022-01-19T09:42:22.000000Z",
        "histories": null,
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": {
            "id": 21,
            "name": "Lead0005",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 5,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 34,
                    "value": "lead0005@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 21,
                    "createdAt": "2022-01-19T09:42:22.000000Z",
                    "updatedAt": "2022-01-19T09:42:22.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 34,
                    "value": "0123334444",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 21,
                    "createdAt": "2022-01-19T09:42:22.000000Z",
                    "updatedAt": "2022-01-19T09:42:22.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 28,
        "title": "SME",
        "value": 500000,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 21,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 5,
        "ownerId": 5,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-19T09:42:22.000000Z",
        "updatedAt": "2022-01-19T09:57:47.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-19T09:42:22.000000Z\",\"2022-01-19T09:48:25.262964Z\"],\"move_at\":\"2022-01-19T09:48:25.262834Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-19T09:48:25.263028Z\",\"2022-01-19T09:48:27.374996Z\",\"2022-01-19T09:57:41.260449Z\",\"2022-01-19T09:57:47.793670Z\"],\"move_at\":\"2022-01-19T09:57:41.260491Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-19T09:48:27.375066Z\",\"2022-01-19T09:48:28.125475Z\",\"2022-01-19T09:57:41.260540Z\",\"2022-01-19T09:57:41.260548Z\",\"2022-01-19T09:57:47.793736Z\"],\"move_at\":\"2022-01-19T09:57:47.793780Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[\"2022-01-19T09:48:28.125548Z\",\"2022-01-19T09:48:28.811005Z\",\"2022-01-19T09:57:40.525311Z\",\"2022-01-19T09:57:41.260582Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-01-19T09:48:28.811074Z\",\"2022-01-19T09:57:40.525381Z\"],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 33,
        "owner": {
            "id": 5,
            "firstName": "pearly",
            "lastName": "kong01",
            "fullName": "pearly kong01",
            "profilePicture": null
        },
        "contextable": {
            "id": 21,
            "name": "Lead0005",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 5,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 34,
                    "value": "lead0005@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 21,
                    "createdAt": "2022-01-19T09:42:22.000000Z",
                    "updatedAt": "2022-01-19T09:42:22.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 34,
                    "value": "0123334444",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 21,
                    "createdAt": "2022-01-19T09:42:22.000000Z",
                    "updatedAt": "2022-01-19T09:42:22.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 21,
                "name": "Lead0005",
                "pivot": {
                    "dealId": 28,
                    "personId": 21
                },
                "email": [
                    {
                        "id": 34,
                        "value": "lead0005@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 21,
                        "createdAt": "2022-01-19T09:42:22.000000Z",
                        "updatedAt": "2022-01-19T09:42:22.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 43,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 3,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 35,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-20T07:16:19.000000Z",
        "updatedAt": "2022-02-07T09:24:32.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-20T07:16:19.000000Z\",\"2022-01-20T07:36:12.365052Z\"],\"move_at\":\"2022-01-20T07:36:12.364881Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-20T07:36:12.365120Z\",\"2022-01-20T07:36:13.343494Z\"],\"move_at\":\"2022-01-20T07:36:12.365077Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-20T07:36:13.343560Z\",\"2022-01-20T07:36:14.511700Z\",\"2022-02-07T09:24:32.790647Z\"],\"move_at\":\"2022-02-07T09:24:32.790689Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":4,\"timestamps\":[\"2022-01-20T07:36:14.511764Z\",\"2022-02-07T09:24:32.790720Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 32,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": {
            "id": 35,
            "name": "Lead0010",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 4,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 48,
                    "value": "lead0010@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 35,
                    "createdAt": "2022-01-20T07:16:19.000000Z",
                    "updatedAt": "2022-01-20T07:16:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 48,
                    "value": "0129990000",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 35,
                    "createdAt": "2022-01-20T07:16:19.000000Z",
                    "updatedAt": "2022-01-20T07:16:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 44,
        "title": "Wealth Management",
        "value": 100000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 35,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": "Investment Product",
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-20T07:37:57.000000Z",
        "updatedAt": "2022-01-20T07:37:57.000000Z",
        "histories": null,
        "avgAgeOfDeal": 32,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": {
            "id": 35,
            "name": "Lead0010",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 4,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 48,
                    "value": "lead0010@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 35,
                    "createdAt": "2022-01-20T07:16:19.000000Z",
                    "updatedAt": "2022-01-20T07:16:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 48,
                    "value": "0129990000",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 35,
                    "createdAt": "2022-01-20T07:16:19.000000Z",
                    "updatedAt": "2022-01-20T07:16:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 35,
                "name": "Lead0010",
                "pivot": {
                    "dealId": 44,
                    "personId": 35
                },
                "email": [
                    {
                        "id": 48,
                        "value": "lead0010@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 35,
                        "createdAt": "2022-01-20T07:16:19.000000Z",
                        "updatedAt": "2022-01-20T07:16:19.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 45,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 36,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-20T08:19:03.000000Z",
        "updatedAt": "2022-01-20T08:19:03.000000Z",
        "histories": null,
        "avgAgeOfDeal": 32,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": {
            "id": 36,
            "name": "Lead0011",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 4,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 49,
                    "value": "lead0011@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 36,
                    "createdAt": "2022-01-20T08:19:03.000000Z",
                    "updatedAt": "2022-01-20T08:19:03.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 49,
                    "value": "+60 12-123 3122",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 36,
                    "createdAt": "2022-01-20T08:19:03.000000Z",
                    "updatedAt": "2022-01-20T08:19:03.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 46,
        "title": "Personal Financing",
        "value": 20000,
        "pipelineId": 1,
        "stageId": 6,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 37,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-21T02:38:30.000000Z",
        "updatedAt": "2022-01-21T02:47:08.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-21T02:38:30.000000Z\",\"2022-01-21T02:46:59.500213Z\"],\"move_at\":\"2022-01-21T02:46:59.500081Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-21T02:46:59.500277Z\",\"2022-01-21T02:47:04.355381Z\"],\"move_at\":\"2022-01-21T02:46:59.500236Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-21T02:47:04.355447Z\",\"2022-01-21T02:47:05.687743Z\"],\"move_at\":\"2022-01-21T02:47:04.355496Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-01-21T02:47:05.687807Z\",\"2022-01-21T02:47:08.261680Z\"],\"move_at\":\"2022-01-21T02:47:05.687850Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-01-21T02:47:08.261765Z\",\"2022-01-21T02:47:08.261774Z\"],\"move_at\":\"2022-01-21T02:47:05.687850Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-01-21T02:47:08.261815Z\"],\"move_at\":\"2022-01-21T02:47:08.261857Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 32,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": {
            "id": 37,
            "name": "Lead020",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 50,
                    "value": "lead020@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 37,
                    "createdAt": "2022-01-21T02:38:30.000000Z",
                    "updatedAt": "2022-01-21T02:38:30.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 50,
                    "value": "0123330000",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 37,
                    "createdAt": "2022-01-21T02:38:30.000000Z",
                    "updatedAt": "2022-01-21T02:38:30.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 37,
                "name": "Lead020",
                "pivot": {
                    "dealId": 46,
                    "personId": 37
                },
                "email": [
                    {
                        "id": 50,
                        "value": "lead020@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 37,
                        "createdAt": "2022-01-21T02:38:30.000000Z",
                        "updatedAt": "2022-01-21T02:38:30.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 47,
        "title": "Testing Deal 1",
        "value": 3000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 37,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 11,
        "ownerId": 11,
        "description": "Testing",
        "expiredAt": "2022-01-31 00:00:00",
        "comment": null,
        "createdAt": "2022-01-21T07:47:11.000000Z",
        "updatedAt": "2022-01-21T07:48:32.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-21T07:47:11.000000Z\",\"2022-01-21T07:48:27.613859Z\",\"2022-01-21T07:48:32.200029Z\"],\"move_at\":\"2022-01-21T07:48:32.200076Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":2,\"timestamps\":[\"2022-01-21T07:48:27.613922Z\",\"2022-01-21T07:48:29.642754Z\",\"2022-01-21T07:48:30.353027Z\",\"2022-01-21T07:48:32.200109Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-21T07:48:29.642818Z\",\"2022-01-21T07:48:30.353104Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 31,
        "owner": {
            "id": 11,
            "firstName": "Boon Keat",
            "lastName": "Goh",
            "fullName": "Boon Keat Goh",
            "profilePicture": null
        },
        "contextable": {
            "id": 37,
            "name": "Lead020",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 50,
                    "value": "lead020@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 37,
                    "createdAt": "2022-01-21T02:38:30.000000Z",
                    "updatedAt": "2022-01-21T02:38:30.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 50,
                    "value": "0123330000",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 37,
                    "createdAt": "2022-01-21T02:38:30.000000Z",
                    "updatedAt": "2022-01-21T02:38:30.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 37,
                "name": "Lead020",
                "pivot": {
                    "dealId": 47,
                    "personId": 37
                },
                "email": [
                    {
                        "id": 50,
                        "value": "lead020@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 37,
                        "createdAt": "2022-01-21T02:38:30.000000Z",
                        "updatedAt": "2022-01-21T02:38:30.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 49,
        "title": "Personal Financing",
        "value": 100000,
        "pipelineId": 1,
        "stageId": 6,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 39,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-01-26T02:38:14.000000Z",
        "updatedAt": "2022-01-26T02:53:22.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-26T02:38:14.000000Z\",\"2022-01-26T02:52:22.896812Z\"],\"move_at\":\"2022-01-26T02:52:22.896686Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-01-26T02:52:22.896874Z\",\"2022-01-26T02:52:29.679438Z\"],\"move_at\":\"2022-01-26T02:52:22.896834Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-01-26T02:52:29.679503Z\",\"2022-01-26T02:52:31.168988Z\"],\"move_at\":\"2022-01-26T02:52:29.679547Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-01-26T02:52:31.169064Z\",\"2022-01-26T02:52:32.226354Z\"],\"move_at\":\"2022-01-26T02:52:31.169106Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-01-26T02:52:32.226418Z\",\"2022-01-26T02:52:34.008619Z\",\"2022-01-26T02:53:21.133592Z\",\"2022-01-26T02:53:22.650018Z\"],\"move_at\":\"2022-01-26T02:53:21.133633Z\",\"call\":\"forward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-01-26T02:52:34.008684Z\",\"2022-01-26T02:53:21.133664Z\",\"2022-01-26T02:53:22.650081Z\"],\"move_at\":\"2022-01-26T02:53:22.650124Z\",\"call\":\"forward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"forward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 27,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": {
            "id": 39,
            "name": "Lead030",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 51,
                    "value": "lead030@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 39,
                    "createdAt": "2022-01-26T02:38:14.000000Z",
                    "updatedAt": "2022-01-26T02:38:14.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 51,
                    "value": "01211223344",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 39,
                    "createdAt": "2022-01-26T02:38:14.000000Z",
                    "updatedAt": "2022-01-26T02:38:14.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 39,
                "name": "Lead030",
                "pivot": {
                    "dealId": 49,
                    "personId": 39
                },
                "email": [
                    {
                        "id": 51,
                        "value": "lead030@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 39,
                        "createdAt": "2022-01-26T02:38:14.000000Z",
                        "updatedAt": "2022-01-26T02:38:14.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 52,
        "title": "Datuk A",
        "value": 500000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 310,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 42,
        "ownerId": 42,
        "description": "TRRF",
        "expiredAt": "2022-01-31 00:00:00",
        "comment": null,
        "createdAt": "2022-01-27T00:55:26.000000Z",
        "updatedAt": "2022-02-06T08:36:41.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-01-27T00:55:26.000000Z\",\"2022-02-06T08:36:35.548794Z\",\"2022-02-06T08:36:41.968675Z\"],\"move_at\":\"2022-02-06T08:36:41.968723Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":2,\"timestamps\":[\"2022-02-06T08:36:35.548861Z\",\"2022-02-06T08:36:41.968757Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 26,
        "owner": {
            "id": 42,
            "firstName": "Yap",
            "lastName": "Meng Yau",
            "fullName": "Yap Meng Yau",
            "profilePicture": null
        },
        "contextable": {
            "id": 310,
            "name": "Datuk A",
            "address": null,
            "contactTypeId": 1,
            "ownerId": 42,
            "contactType": {
                "id": 1,
                "name": "Customer",
                "class": "success"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 322,
                    "value": "MYYAP@BANKISLAM.COM.MY",
                    "typeId": 1,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 310,
                    "createdAt": "2022-01-27T00:46:43.000000Z",
                    "updatedAt": "2022-01-27T00:46:43.000000Z",
                    "type": {
                        "id": 1,
                        "name": "Work",
                        "class": "success",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 322,
                    "value": "014123456",
                    "typeId": 1,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 310,
                    "createdAt": "2022-01-27T00:46:43.000000Z",
                    "updatedAt": "2022-01-27T00:46:43.000000Z",
                    "type": {
                        "id": 1,
                        "name": "Work",
                        "class": "success",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 310,
                "name": "Datuk A",
                "pivot": {
                    "dealId": 52,
                    "personId": 310
                },
                "email": [
                    {
                        "id": 322,
                        "value": "MYYAP@BANKISLAM.COM.MY",
                        "typeId": 1,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 310,
                        "createdAt": "2022-01-27T00:46:43.000000Z",
                        "updatedAt": "2022-01-27T00:46:43.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 53,
        "title": "Home Financing-i",
        "value": 500000,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 304,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 26,
        "ownerId": 26,
        "description": null,
        "expiredAt": "2022-01-28 00:00:00",
        "comment": null,
        "createdAt": "2022-01-27T12:36:03.000000Z",
        "updatedAt": "2022-01-27T12:36:03.000000Z",
        "histories": null,
        "avgAgeOfDeal": 25,
        "owner": {
            "id": 26,
            "firstName": "Mohd Zamri",
            "lastName": "Zaedan",
            "fullName": "Mohd Zamri Zaedan",
            "profilePicture": null
        },
        "contextable": {
            "id": 304,
            "name": "Maimun Binti Salleh",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 26,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 316,
                    "value": "maileh@gmail.com",
                    "typeId": null,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 304,
                    "createdAt": "2022-01-26T09:42:38.000000Z",
                    "updatedAt": "2022-01-26T09:42:38.000000Z",
                    "type": null
                }
            ],
            "phone": [
                {
                    "id": 316,
                    "value": "+60143830244",
                    "typeId": null,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 304,
                    "createdAt": "2022-01-26T09:42:38.000000Z",
                    "updatedAt": "2022-01-26T09:42:38.000000Z",
                    "type": null
                }
            ]
        },
        "contactPerson": [
            {
                "id": 304,
                "name": "Maimun Binti Salleh",
                "pivot": {
                    "dealId": 53,
                    "personId": 304
                },
                "email": [
                    {
                        "id": 316,
                        "value": "maileh@gmail.com",
                        "typeId": null,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 304,
                        "createdAt": "2022-01-26T09:42:38.000000Z",
                        "updatedAt": "2022-01-26T09:42:38.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 54,
        "title": "test",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 18,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 43,
        "ownerId": 43,
        "description": "test",
        "expiredAt": "2022-02-25 00:00:00",
        "comment": null,
        "createdAt": "2022-02-08T10:43:10.000000Z",
        "updatedAt": "2022-02-08T10:43:10.000000Z",
        "histories": null,
        "avgAgeOfDeal": 13,
        "owner": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng",
            "profilePicture": null
        },
        "contextable": {
            "id": 18,
            "name": "Lead0001",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 31,
                    "value": "pearly.kong+1@imocha.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 31,
                    "value": "0121112222",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 18,
                "name": "Lead0001",
                "pivot": {
                    "dealId": 54,
                    "personId": 18
                },
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
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 55,
        "title": "test",
        "value": 500,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 18,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 43,
        "ownerId": 43,
        "description": "test",
        "expiredAt": "2022-02-25 00:00:00",
        "comment": null,
        "createdAt": "2022-02-08T10:43:47.000000Z",
        "updatedAt": "2022-02-08T10:43:47.000000Z",
        "histories": null,
        "avgAgeOfDeal": 13,
        "owner": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng",
            "profilePicture": null
        },
        "contextable": {
            "id": 18,
            "name": "Lead0001",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 31,
                    "value": "pearly.kong+1@imocha.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 31,
                    "value": "0121112222",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 18,
                "name": "Lead0001",
                "pivot": {
                    "dealId": 55,
                    "personId": 18
                },
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
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 56,
        "title": "test",
        "value": 500,
        "pipelineId": 1,
        "stageId": 2,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 18,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 43,
        "ownerId": 43,
        "description": "test",
        "expiredAt": "2022-02-23 00:00:00",
        "comment": null,
        "createdAt": "2022-02-08T10:44:47.000000Z",
        "updatedAt": "2022-02-08T10:44:47.000000Z",
        "histories": null,
        "avgAgeOfDeal": 13,
        "owner": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng",
            "profilePicture": null
        },
        "contextable": {
            "id": 18,
            "name": "Lead0001",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 1,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 31,
                    "value": "pearly.kong+1@imocha.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 31,
                    "value": "0121112222",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 18,
                    "createdAt": "2022-01-19T09:31:39.000000Z",
                    "updatedAt": "2022-01-19T09:31:39.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 18,
                "name": "Lead0001",
                "pivot": {
                    "dealId": 56,
                    "personId": 18
                },
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
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 57,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 314,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 30,
        "ownerId": 30,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T04:59:02.000000Z",
        "updatedAt": "2022-02-10T04:59:02.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 30,
            "firstName": "Amirul",
            "lastName": "Hafiz",
            "fullName": "Amirul Hafiz",
            "profilePicture": null
        },
        "contextable": {
            "id": 314,
            "name": "Muhammad Zaied",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 30,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 325,
                    "value": "mzaied@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 314,
                    "createdAt": "2022-02-10T04:59:02.000000Z",
                    "updatedAt": "2022-02-10T04:59:02.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 325,
                    "value": "0111111111",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 314,
                    "createdAt": "2022-02-10T04:59:02.000000Z",
                    "updatedAt": "2022-02-10T04:59:02.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 58,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 314,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 30,
        "ownerId": 30,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T04:59:06.000000Z",
        "updatedAt": "2022-02-10T04:59:06.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 30,
            "firstName": "Amirul",
            "lastName": "Hafiz",
            "fullName": "Amirul Hafiz",
            "profilePicture": null
        },
        "contextable": {
            "id": 314,
            "name": "Muhammad Zaied",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 30,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 325,
                    "value": "mzaied@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 314,
                    "createdAt": "2022-02-10T04:59:02.000000Z",
                    "updatedAt": "2022-02-10T04:59:02.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 325,
                    "value": "0111111111",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 314,
                    "createdAt": "2022-02-10T04:59:02.000000Z",
                    "updatedAt": "2022-02-10T04:59:02.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 59,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 315,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:23.000000Z",
        "updatedAt": "2022-02-10T05:57:23.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": {
            "id": 315,
            "name": "",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 8,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 60,
        "title": "SME",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 315,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 11,
        "ownerId": 11,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:23.000000Z",
        "updatedAt": "2022-02-10T05:57:23.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 11,
            "firstName": "Boon Keat",
            "lastName": "Goh",
            "fullName": "Boon Keat Goh",
            "profilePicture": null
        },
        "contextable": {
            "id": 315,
            "name": "",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 8,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 61,
        "title": "Wealth",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 315,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 8,
        "ownerId": 8,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:23.000000Z",
        "updatedAt": "2022-02-10T05:57:23.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 8,
            "firstName": "pearly",
            "lastName": "kong03",
            "fullName": "pearly kong03",
            "profilePicture": null
        },
        "contextable": {
            "id": 315,
            "name": "",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 8,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 326,
                    "value": "",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 315,
                    "createdAt": "2022-02-10T05:57:23.000000Z",
                    "updatedAt": "2022-02-10T05:57:23.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 62,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 2,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 4,
        "ownerId": 4,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:29.000000Z",
        "updatedAt": "2022-02-12T08:15:10.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-02-10T05:57:29.000000Z\",\"2022-02-12T08:14:10.821064Z\",\"2022-02-12T08:14:40.834123Z\",\"2022-02-12T08:14:42.447837Z\",\"2022-02-12T08:14:43.806483Z\",\"2022-02-12T08:14:45.169173Z\"],\"move_at\":\"2022-02-12T08:14:43.806531Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-02-12T08:14:10.821126Z\",\"2022-02-12T08:14:12.356006Z\",\"2022-02-12T08:14:40.834221Z\",\"2022-02-12T08:14:40.834229Z\",\"2022-02-12T08:14:42.447909Z\",\"2022-02-12T08:14:43.806565Z\",\"2022-02-12T08:14:45.169267Z\",\"2022-02-12T08:14:45.169276Z\",\"2022-02-12T08:15:10.961760Z\"],\"move_at\":\"2022-02-12T08:15:10.961802Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":3,\"timestamps\":[\"2022-02-12T08:14:12.356075Z\",\"2022-02-12T08:14:13.522774Z\",\"2022-02-12T08:14:40.834280Z\",\"2022-02-12T08:14:40.834288Z\",\"2022-02-12T08:14:45.169337Z\",\"2022-02-12T08:14:45.169345Z\",\"2022-02-12T08:14:48.151936Z\",\"2022-02-12T08:15:10.961833Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-12T08:14:13.522838Z\",\"2022-02-12T08:14:15.077181Z\",\"2022-02-12T08:14:40.834338Z\",\"2022-02-12T08:14:40.834345Z\",\"2022-02-12T08:14:45.169404Z\",\"2022-02-12T08:14:45.169411Z\",\"2022-02-12T08:14:46.118551Z\",\"2022-02-12T08:14:48.152018Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-02-12T08:14:15.077250Z\",\"2022-02-12T08:14:16.019018Z\",\"2022-02-12T08:14:40.834394Z\",\"2022-02-12T08:14:40.834401Z\",\"2022-02-12T08:14:45.169448Z\",\"2022-02-12T08:14:46.118623Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-02-12T08:14:16.019083Z\",\"2022-02-12T08:14:17.840795Z\",\"2022-02-12T08:14:40.834448Z\",\"2022-02-12T08:14:40.834455Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":7,\"timestamps\":[\"2022-02-12T08:14:17.840858Z\",\"2022-02-12T08:14:40.834486Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false}]",
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 4,
            "firstName": "pearly",
            "lastName": "kong",
            "fullName": "pearly kong",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 63,
        "title": "SME",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 42,
        "ownerId": 42,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:29.000000Z",
        "updatedAt": "2022-02-10T05:57:29.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 42,
            "firstName": "Yap",
            "lastName": "Meng Yau",
            "fullName": "Yap Meng Yau",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 64,
        "title": "Wealth",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:29.000000Z",
        "updatedAt": "2022-02-10T05:57:29.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 65,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 30,
        "ownerId": 30,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:36.000000Z",
        "updatedAt": "2022-02-10T05:57:36.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 30,
            "firstName": "Amirul",
            "lastName": "Hafiz",
            "fullName": "Amirul Hafiz",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 66,
        "title": "SME",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 7,
        "ownerId": 7,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:36.000000Z",
        "updatedAt": "2022-02-10T05:57:36.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 7,
            "firstName": "pearly",
            "lastName": "kong02",
            "fullName": "pearly kong02",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 67,
        "title": "Wealth",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 316,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 10,
        "ownerId": 10,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-10T05:57:36.000000Z",
        "updatedAt": "2022-02-10T05:57:36.000000Z",
        "histories": null,
        "avgAgeOfDeal": 11,
        "owner": {
            "id": 10,
            "firstName": "Jeff",
            "lastName": "Lam",
            "fullName": "Jeff Lam",
            "profilePicture": null
        },
        "contextable": {
            "id": 316,
            "name": "Amirul Hafiz",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 10,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 327,
                    "value": "ahafiz@bankislam.com.my",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 327,
                    "value": "0134893613",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 316,
                    "createdAt": "2022-02-10T05:57:29.000000Z",
                    "updatedAt": "2022-02-10T05:57:29.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 68,
        "title": "Sunday Deal",
        "value": 10000,
        "pipelineId": 1,
        "stageId": 6,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 317,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 45,
        "ownerId": 45,
        "description": "line1\nline2\nline3",
        "expiredAt": "2022-03-31 00:00:00",
        "comment": null,
        "createdAt": "2022-02-13T07:33:17.000000Z",
        "updatedAt": "2022-02-13T07:34:40.000000Z",
        "histories": "[{\"stage_id\":1,\"timestamps\":[\"2022-02-13T07:33:17.000000Z\",\"2022-02-13T07:34:10.032123Z\"],\"move_at\":\"2022-02-13T07:34:10.031945Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":2,\"timestamps\":[\"2022-02-13T07:34:10.032188Z\",\"2022-02-13T07:34:30.686807Z\"],\"move_at\":\"2022-02-13T07:34:10.032147Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":3,\"timestamps\":[\"2022-02-13T07:34:30.686871Z\",\"2022-02-13T07:34:31.218041Z\"],\"move_at\":\"2022-02-13T07:34:30.686924Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":4,\"timestamps\":[\"2022-02-13T07:34:31.218104Z\",\"2022-02-13T07:34:31.679017Z\"],\"move_at\":\"2022-02-13T07:34:31.218147Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":5,\"timestamps\":[\"2022-02-13T07:34:31.679079Z\",\"2022-02-13T07:34:32.093866Z\"],\"move_at\":\"2022-02-13T07:34:31.679121Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":false},{\"stage_id\":6,\"timestamps\":[\"2022-02-13T07:34:32.093927Z\",\"2022-02-13T07:34:32.490661Z\",\"2022-02-13T07:34:40.045579Z\"],\"move_at\":\"2022-02-13T07:34:40.045620Z\",\"call\":\"backward\",\"last_stage\":false,\"current_stage\":true},{\"stage_id\":7,\"timestamps\":[\"2022-02-13T07:34:32.490724Z\",\"2022-02-13T07:34:40.045652Z\"],\"move_at\":null,\"call\":\"backward\",\"last_stage\":true,\"current_stage\":false}]",
        "avgAgeOfDeal": 8,
        "owner": {
            "id": 45,
            "firstName": "demo",
            "lastName": "demo",
            "fullName": "demo demo",
            "profilePicture": null
        },
        "contextable": {
            "id": 317,
            "name": "Sunday Love",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 45,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 328,
                    "value": "sunday.love@gmail.com",
                    "typeId": 2,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 317,
                    "createdAt": "2022-02-13T07:29:25.000000Z",
                    "updatedAt": "2022-02-13T07:29:25.000000Z",
                    "type": {
                        "id": 2,
                        "name": "Home",
                        "class": "info",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 328,
                    "value": "+60 16-223 34455",
                    "typeId": 2,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 317,
                    "createdAt": "2022-02-13T07:29:25.000000Z",
                    "updatedAt": "2022-02-13T07:29:25.000000Z",
                    "type": {
                        "id": 2,
                        "name": "Home",
                        "class": "info",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 317,
                "name": "Sunday Love",
                "pivot": {
                    "dealId": 68,
                    "personId": 317
                },
                "email": [
                    {
                        "id": 328,
                        "value": "sunday.love@gmail.com",
                        "typeId": 2,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 317,
                        "createdAt": "2022-02-13T07:29:25.000000Z",
                        "updatedAt": "2022-02-13T07:29:25.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 69,
        "title": "test",
        "value": 20,
        "pipelineId": 1,
        "stageId": 1,
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
        "updatedAt": "2022-02-14T03:13:08.000000Z",
        "histories": null,
        "avgAgeOfDeal": 8,
        "owner": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng",
            "profilePicture": null
        },
        "contextable": {
            "id": 312,
            "name": "Ho Chi Min",
            "address": null,
            "contactTypeId": 2,
            "ownerId": 42,
            "contactType": {
                "id": 2,
                "name": "Lead from Branch",
                "class": "info"
            },
            "profilePicture": {
                "id": 1,
                "path": "\/storage\/avatar\/620cda265e0e3.png",
                "type": "profile_picture",
                "createdAt": "2022-02-16T11:04:06.000000Z",
                "updatedAt": "2022-02-16T11:04:06.000000Z",
                "fullUrl": "http:\/\/lms-demo.imocha.com.my\/leads\/storage\/avatar\/620cda265e0e3.png"
            },
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
            ]
        },
        "contactPerson": [
            {
                "id": 312,
                "name": "Ho Chi Min",
                "pivot": {
                    "dealId": 69,
                    "personId": 312
                },
                "email": [
                    {
                        "id": 330,
                        "value": "scott@ascott.gmail.com.uk",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 312,
                        "createdAt": "2022-02-16T07:43:38.000000Z",
                        "updatedAt": "2022-02-16T07:43:38.000000Z"
                    },
                    {
                        "id": 331,
                        "value": "test2@email.com",
                        "typeId": null,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 312,
                        "createdAt": "2022-02-16T07:43:38.000000Z",
                        "updatedAt": "2022-02-16T07:43:38.000000Z"
                    }
                ]
            }
        ],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 70,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 319,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 12,
        "ownerId": 12,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-16T08:12:19.000000Z",
        "updatedAt": "2022-02-16T08:12:19.000000Z",
        "histories": null,
        "avgAgeOfDeal": 5,
        "owner": {
            "id": 12,
            "firstName": "Seth",
            "lastName": "Lee",
            "fullName": "Seth Lee",
            "profilePicture": null
        },
        "contextable": {
            "id": 319,
            "name": "Lead025",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 12,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 332,
                    "value": "lead025@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 319,
                    "createdAt": "2022-02-16T08:12:19.000000Z",
                    "updatedAt": "2022-02-16T08:12:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 331,
                    "value": "01233445566",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 319,
                    "createdAt": "2022-02-16T08:12:19.000000Z",
                    "updatedAt": "2022-02-16T08:12:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [],
        "status": {
            "id": 13,
            "name": "status_open",
            "class": "primary",
            "type": "deal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Open"
        }
    },
    {
        "id": 71,
        "title": "Personal Financing",
        "value": 0,
        "pipelineId": 1,
        "stageId": 1,
        "contextableType": "App\\Models\\CRM\\Person\\Person",
        "contextableId": 319,
        "lostReasonId": null,
        "statusId": 13,
        "createdBy": 1,
        "ownerId": 1,
        "description": null,
        "expiredAt": null,
        "comment": null,
        "createdAt": "2022-02-16T08:12:23.000000Z",
        "updatedAt": "2022-02-22T02:21:34.000000Z",
        "histories": null,
        "avgAgeOfDeal": 5,
        "owner": {
            "id": 1,
            "firstName": "NG CHIN",
            "lastName": "TAH",
            "fullName": "NG CHIN TAH",
            "profilePicture": null
        },
        "contextable": {
            "id": 319,
            "name": "Lead025",
            "address": null,
            "contactTypeId": 5,
            "ownerId": 12,
            "contactType": {
                "id": 5,
                "name": "Lead from Web",
                "class": "link"
            },
            "profilePicture": null,
            "email": [
                {
                    "id": 332,
                    "value": "lead025@xmail.com",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 319,
                    "createdAt": "2022-02-16T08:12:19.000000Z",
                    "updatedAt": "2022-02-16T08:12:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ],
            "phone": [
                {
                    "id": 331,
                    "value": "01233445566",
                    "typeId": 3,
                    "contextableType": "App\\Models\\CRM\\Person\\Person",
                    "contextableId": 319,
                    "createdAt": "2022-02-16T08:12:19.000000Z",
                    "updatedAt": "2022-02-16T08:12:19.000000Z",
                    "type": {
                        "id": 3,
                        "name": "Office",
                        "class": "warning",
                        "createdAt": null,
                        "updatedAt": null
                    }
                }
            ]
        },
        "contactPerson": [
            {
                "id": 319,
                "name": "Lead025",
                "pivot": {
                    "dealId": 71,
                    "personId": 319
                },
                "email": [
                    {
                        "id": 332,
                        "value": "lead025@xmail.com",
                        "typeId": 3,
                        "contextableType": "App\\Models\\CRM\\Person\\Person",
                        "contextableId": 319,
                        "createdAt": "2022-02-16T08:12:19.000000Z",
                        "updatedAt": "2022-02-16T08:12:19.000000Z"
                    }
                ]
            }
        ],
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
];