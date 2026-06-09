import type { INodeProperties } from 'n8n-workflow';

export const corporateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					]
				}
			},
			"options": [
				{
					"name": "Get Corporate",
					"value": "Get Corporate",
					"action": "View your corporate account",
					"description": "View the details of the corporate account that your user account belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporate"
						}
					}
				},
				{
					"name": "Get Available Corporate Permissions",
					"value": "Get Available Corporate Permissions",
					"action": "View available permissions",
					"description": "View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporate/permissions"
						}
					}
				},
				{
					"name": "Get Corporate User Groups",
					"value": "Get Corporate User Groups",
					"action": "View user groups",
					"description": "View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporate/user-groups"
						}
					}
				},
				{
					"name": "Save Corporate User Group",
					"value": "Save Corporate User Group",
					"action": "Create or update a corporate user group",
					"description": "Create or update a corporate user group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/corporate/user-groups"
						}
					}
				},
				{
					"name": "Get Corporate Users",
					"value": "Get Corporate Users",
					"action": "View users",
					"description": "View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporate/users"
						}
					}
				},
				{
					"name": "Save Corporate User",
					"value": "Save Corporate User",
					"action": "Create or update a user",
					"description": "Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/corporate/users"
						}
					}
				},
				{
					"name": "Get Corporates List",
					"value": "Get Corporates List",
					"action": "Get a list of corporate accounts",
					"description": "Get a list of corporate accounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporates/all"
						}
					}
				},
				{
					"name": "Get Corporate By ID",
					"value": "Get Corporate By ID",
					"action": "Get details of this corporate account",
					"description": "Get details of this corporate account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporates/{{$parameter[\"corporateId\"]}}"
						}
					}
				},
				{
					"name": "Get Available Corporate Permissions By ID",
					"value": "Get Available Corporate Permissions By ID",
					"action": "Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.",
					"description": "Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporates/{{$parameter[\"corporateId\"]}}/permissions"
						}
					}
				},
				{
					"name": "Get Corporate User Groups By ID",
					"value": "Get Corporate User Groups By ID",
					"action": "Get a list of user groups for this corporate account",
					"description": "Get a list of user groups for this corporate account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporates/{{$parameter[\"corporateId\"]}}/user-groups"
						}
					}
				},
				{
					"name": "Save Corporate User Group By ID",
					"value": "Save Corporate User Group By ID",
					"action": "Create or update a corporate user group for this corporate account",
					"description": "Create or update a corporate user group for this corporate account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/corporates/{{$parameter[\"corporateId\"]}}/user-groups"
						}
					}
				},
				{
					"name": "Get Corporate Users By ID",
					"value": "Get Corporate Users By ID",
					"action": "Get a list of users for this corporate account",
					"description": "Get a list of users for this corporate account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/corporates/{{$parameter[\"corporateId\"]}}/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /corporate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate"
					]
				}
			}
		},
		{
			"displayName": "GET /corporate/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Available Corporate Permissions"
					]
				}
			}
		},
		{
			"displayName": "GET /corporate/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate User Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /corporate/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporate_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "corporate_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group"
					]
				}
			}
		},
		{
			"displayName": "GET /corporate/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate Users"
					]
				}
			}
		},
		{
			"displayName": "POST /corporate/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User"
					]
				}
			}
		},
		{
			"displayName": "POST /corporate/users<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User"
					]
				}
			}
		},
		{
			"displayName": "GET /corporates/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporates List"
					]
				}
			}
		},
		{
			"displayName": "GET /corporates/{corporateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporateId",
			"required": true,
			"description": "Corporate ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /corporates/{corporateId}/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Available Corporate Permissions By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporateId",
			"required": true,
			"description": "Corporate ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Available Corporate Permissions By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /corporates/{corporateId}/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate User Groups By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporateId",
			"required": true,
			"description": "Corporate ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate User Groups By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /corporates/{corporateId}/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporateId",
			"required": true,
			"description": "Corporate ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporate_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "corporate_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "Permissions",
			"name": "permissions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "permissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Save Corporate User Group By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /corporates/{corporateId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate Users By ID"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporateId",
			"required": true,
			"description": "Corporate ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Corporate"
					],
					"operation": [
						"Get Corporate Users By ID"
					]
				}
			}
		},
];
