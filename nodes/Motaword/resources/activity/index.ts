import type { INodeProperties } from 'n8n-workflow';

export const activityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					]
				}
			},
			"options": [
				{
					"name": "Get Sales Activities",
					"value": "Get Sales Activities",
					"action": "Get sales activities for a project",
					"description": "Get sales activities for a project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/sales/activities"
						}
					}
				},
				{
					"name": "Insert Sales Activity",
					"value": "Insert Sales Activity",
					"action": "Insert sales activity for a project",
					"description": "Insert sales activity for a project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/sales/activities"
						}
					}
				},
				{
					"name": "Get Activities",
					"value": "Get Activities",
					"action": "Monitor project activities",
					"description": "Get a list of real-time activities in the project, such as translation suggestion and translation approval.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/activities"
						}
					}
				},
				{
					"name": "Get Activity",
					"value": "Get Activity",
					"action": "View an activity",
					"description": "View the details of an activity in the project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/activities/{{$parameter[\"activityId\"]}}"
						}
					}
				},
				{
					"name": "Submit Comment",
					"value": "Submit Comment",
					"action": "Submit comment to an activity",
					"description": "Submit a comment to an activity in the project, such as translation or editing.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/activities/{{$parameter[\"activityId\"]}}"
						}
					}
				},
				{
					"name": "Get Activity Comments",
					"value": "Get Activity Comments",
					"action": "View activity comments",
					"description": "View a list of comments added to this activity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/activities/{{$parameter[\"activityId\"]}}/comments"
						}
					}
				},
				{
					"name": "Get Comments",
					"value": "Get Comments",
					"action": "View all project comments",
					"description": "View a list of activity comments in the project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/comments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /projects/{id}/sales/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Sales Activities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Sales Activities"
					]
				}
			}
		},
		{
			"displayName": "Exclude Owner",
			"name": "excludeOwner",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "excludeOwner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Sales Activities"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"default": "EMAIL",
			"type": "options",
			"options": [
				{
					"name": "EMAIL",
					"value": "EMAIL"
				},
				{
					"name": "NOTE",
					"value": "NOTE"
				},
				{
					"name": "INCOMING EMAIL",
					"value": "INCOMING_EMAIL"
				},
				{
					"name": "TASK",
					"value": "TASK"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Sales Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/sales/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Insert Sales Activity"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Insert Sales Activity"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Insert Sales Activity"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Insert Sales Activity"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Activity Type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Insert Sales Activity"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/activities/{activityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity"
					]
				}
			}
		},
		{
			"displayName": "Activity ID",
			"name": "activityId",
			"required": true,
			"description": "Activity ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/activities/{activityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"displayName": "Activity ID",
			"name": "activityId",
			"required": true,
			"description": "Activity ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"description": "Comment text.",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"displayName": "Commented At",
			"name": "commented_at",
			"type": "number",
			"default": 0,
			"description": "Unix epoch time",
			"routing": {
				"send": {
					"property": "commented_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
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
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"displayName": "Links",
			"name": "links",
			"type": "string",
			"default": {
				"activity": {},
				"project": {}
			},
			"routing": {
				"send": {
					"property": "links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Submit Comment"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/activities/{activityId}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity Comments"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity Comments"
					]
				}
			}
		},
		{
			"displayName": "Activity ID",
			"name": "activityId",
			"required": true,
			"description": "Activity ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Activity Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "per_page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activity"
					],
					"operation": [
						"Get Comments"
					]
				}
			}
		},
];
