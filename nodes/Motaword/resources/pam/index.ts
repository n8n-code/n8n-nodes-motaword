import type { INodeProperties } from 'n8n-workflow';

export const pamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					]
				}
			},
			"options": [
				{
					"name": "Post Message",
					"value": "Post Message",
					"action": "Sends a message to chat",
					"description": "Sends a message to the channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pam/chat"
						}
					}
				},
				{
					"name": "Get Client Profile For Pam",
					"value": "Get Client Profile For Pam",
					"action": "Get the Pam profile of a client for this client ID",
					"description": "Get the Pam  profile of a client for this client ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pam/profiles/client/{{$parameter[\"clientId\"]}}"
						}
					}
				},
				{
					"name": "Get Project Completion Report For Pam",
					"value": "Get Project Completion Report For Pam",
					"action": "Get completion report data of a project",
					"description": "Get completion report data of a project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pam/projects/{{$parameter[\"projectId\"]}}/completion-report"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /pam/chat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "the message to be sent",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "name of the recipients in the channel",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "Slots",
			"name": "slots",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "contexts for next message",
			"routing": {
				"send": {
					"property": "slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "Thread Id",
			"name": "thread_id",
			"type": "string",
			"default": "",
			"description": "id of the thread",
			"routing": {
				"send": {
					"property": "thread_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "Thread Key",
			"name": "thread_key",
			"type": "string",
			"default": "",
			"description": "the key for thread_id default is project",
			"routing": {
				"send": {
					"property": "thread_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Post Message"
					]
				}
			}
		},
		{
			"displayName": "GET /pam/profiles/client/{clientId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Get Client Profile For Pam"
					]
				}
			}
		},
		{
			"displayName": "Client Id",
			"name": "clientId",
			"required": true,
			"description": "Client ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Get Client Profile For Pam"
					]
				}
			}
		},
		{
			"displayName": "GET /pam/projects/{projectId}/completion-report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Get Project Completion Report For Pam"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Quote ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pam"
					],
					"operation": [
						"Get Project Completion Report For Pam"
					]
				}
			}
		},
];
