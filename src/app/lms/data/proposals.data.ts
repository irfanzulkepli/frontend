export const PROPOSALS = [
    {
        "id": 1,
        "subject": "Lorem ipsum",
        "content": "<div id=\"lipsum\">\n<p>\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend \nultrices auctor. Nullam tempor maximus nulla, sed volutpat enim \nvestibulum nec. Orci varius natoque penatibus et magnis dis parturient \nmontes, nascetur ridiculus mus. Vivamus non convallis neque, quis \niaculis justo. Phasellus turpis metus, viverra in faucibus ac, cursus ut\n quam. Quisque pellentesque velit at leo bibendum pellentesque. Maecenas\n tristique, nunc ac feugiat pellentesque, dui arcu elementum lorem, ut \ncondimentum massa metus eu eros. Cras sodales magna accumsan libero \nscelerisque scelerisque. Integer interdum nec arcu vitae dignissim. \nAenean consectetur metus purus, sed auctor est facilisis id. Sed sed \ndapibus eros. Phasellus neque sem, efficitur non dapibus semper, tempus \neget tellus.\n<\/p>\n<p>\nCurabitur erat dolor, finibus a justo ut, blandit venenatis tellus. Nunc\n sit amet diam eget massa tincidunt blandit. Nunc facilisis porttitor \nultrices. Vestibulum ultrices, metus vitae tempor suscipit, metus ante \nrhoncus ipsum, sed sagittis enim diam nec eros. Nullam bibendum nulla id\n diam auctor viverra et et lacus. Maecenas ac aliquam sapien, nec \neleifend est. Nam varius, sapien ac rutrum laoreet, mi turpis tincidunt \nlorem, ut convallis dui arcu nec sem.\n<\/p>\n<p>\nSed vel fringilla orci. Suspendisse egestas, erat eu dapibus facilisis, \nodio est sollicitudin magna, quis venenatis nunc purus quis magna. \nInteger elementum dignissim ligula, quis tincidunt turpis pretium in. \nFusce sodales magna sed dictum convallis. Aenean nec cursus elit. \nPellentesque eget nisl ac neque rhoncus volutpat at vel lectus. Cras id \ntortor non felis sagittis porttitor. Praesent placerat quam ut libero \nsemper lobortis. Nulla et tellus non quam condimentum eleifend. \nPellentesque aliquet orci vitae quam fermentum fermentum. Mauris \nporttitor, diam eu laoreet lobortis, purus nisl tempor lacus, ac rutrum \ntortor felis id eros. Aenean pellentesque, ante ac semper pharetra, est \nnibh aliquet sem, at hendrerit quam enim a sapien. Sed viverra finibus \nex, nec auctor ipsum pretium eu.\n<\/p>\n<p>\nPellentesque dolor velit, imperdiet a euismod quis, fermentum ut quam. \nNunc diam neque, mattis sed orci at, sodales posuere purus. Donec sit \namet ligula rhoncus, pretium turpis in, fermentum justo. Phasellus \nsemper malesuada dolor, ut vehicula risus commodo quis. Mauris in \nlaoreet purus. Donec convallis risus et gravida consequat. Phasellus \nsollicitudin, diam eget auctor blandit, nibh enim lacinia lorem, vitae \nrutrum mi dui id risus. Integer id ante gravida, tincidunt turpis nec, \ntempus ex. Integer sed nisl arcu. Nullam nibh dui, volutpat quis \nultrices sed, bibendum et urna. Morbi libero lorem, blandit eget aliquet\n nec, rutrum at est. Integer nunc ex, sagittis vitae cursus vitae, \nsodales in arcu. Nullam rhoncus a massa at porta. Sed non ante egestas, \nsagittis nibh ac, laoreet neque. Aenean tristique dolor libero, in \nbibendum tortor efficitur ac. Nulla eget commodo felis.\n<\/p>\n<p>\nEtiam vitae nibh quis sem tristique tempor. Suspendisse mollis lorem \ncursus convallis scelerisque. Curabitur non est tellus. Praesent euismod\n magna ut neque tempor, in aliquam dui cursus. Phasellus ut nulla a \nlibero tincidunt pharetra. Etiam sit amet libero dictum urna luctus \npharetra. Proin viverra, nulla vestibulum maximus vulputate, nunc massa \ntempor tortor, nec condimentum orci dui eleifend orci. Fusce consequat \ntellus dui, vel auctor metus tempus nec. Vestibulum tincidunt turpis id \npulvinar aliquet. Donec ornare pretium tortor, eu sodales ante tempor \nquis.\n<\/p><\/div>",
        "statusId": 7,
        "dealId": 73,
        "ownerId": 43,
        "createdBy": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng"
        },
        "sentAt": "2022-02-28 17:32:42",
        "acceptedAt": null,
        "createdAt": "2022-02-28T09:31:33.000000Z",
        "updatedAt": "2022-02-28T09:32:46.000000Z",
        "expiredAt": null,
        "status": {
            "id": 7,
            "name": "status_sent",
            "class": "primary",
            "type": "proposal",
            "createdAt": null,
            "updatedAt": null,
            "translatedName": "Sent"
        },
        "deal": {
            "id": 73,
            "title": "Personal Financing",
            "value": 500000,
            "pipelineId": 1,
            "stageId": 1,
            "contextableType": "App\\Models\\CRM\\Person\\Person",
            "contextableId": 320,
            "lostReasonId": null,
            "statusId": 13,
            "createdBy": 12,
            "ownerId": 12,
            "description": null,
            "expiredAt": null,
            "comment": null,
            "createdAt": "2022-02-23T03:08:41.000000Z",
            "updatedAt": "2022-02-23T03:38:37.000000Z",
            "histories": null,
            "avgAgeOfDeal": 6,
            "contactPerson": [
                {
                    "id": 320,
                    "name": "Lead1000",
                    "address": null,
                    "contactTypeId": 5,
                    "createdBy": 4,
                    "ownerId": 4,
                    "createdAt": "2022-02-23T03:08:38.000000Z",
                    "updatedAt": "2022-02-23T03:08:38.000000Z",
                    "countryId": null,
                    "area": null,
                    "state": null,
                    "city": null,
                    "zipCode": null,
                    "attachLoginUserId": null,
                    "pivot": {
                        "dealId": 73,
                        "personId": 320
                    },
                    "email": [
                        {
                            "id": 333,
                            "value": "lead1000@xmail.com",
                            "typeId": 3,
                            "contextableType": "App\\Models\\CRM\\Person\\Person",
                            "contextableId": 320,
                            "createdAt": "2022-02-23T03:08:38.000000Z",
                            "updatedAt": "2022-02-23T03:08:38.000000Z"
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
        "tags": [],
        "owner": {
            "id": 43,
            "firstName": "Von",
            "lastName": "Feng",
            "fullName": "Von Feng"
        }
    }
];