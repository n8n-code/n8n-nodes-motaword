import type { INodeProperties } from 'n8n-workflow';

export const projectWebhooksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					]
				}
			},
			"options": [
				{
					"name": "Delete Project Webhook",
					"value": "Delete Project Webhook",
					"action": "Delete project webhooks",
					"description": "Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"id\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Get Project Webhooks",
					"value": "Get Project Webhooks",
					"action": "View project webhooks",
					"description": "This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Post Project Webhook",
					"value": "Post Project Webhook",
					"action": "Update project webhook",
					"description": "Update project webhook URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/webhooks"
						}
					}
				},
				{
					"name": "Update Project Webhook",
					"value": "Update Project Webhook",
					"action": "Update project webhook",
					"description": "Update project webhook URL",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/projects/{{$parameter[\"id\"]}}/webhooks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /projects/{id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Delete Project Webhook"
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
						"Project Webhooks"
					],
					"operation": [
						"Delete Project Webhook"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Get Project Webhooks"
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
						"Project Webhooks"
					],
					"operation": [
						"Get Project Webhooks"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Post Project Webhook"
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
						"Project Webhooks"
					],
					"operation": [
						"Post Project Webhook"
					]
				}
			}
		},
		{
			"displayName": "Callback URL",
			"name": "callback_url",
			"type": "string",
			"default": "",
			"description": "Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
			"routing": {
				"send": {
					"property": "callback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Post Project Webhook"
					]
				}
			}
		},
		{
			"displayName": "PUT /projects/{id}/webhooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Update Project Webhook"
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
						"Project Webhooks"
					],
					"operation": [
						"Update Project Webhook"
					]
				}
			}
		},
		{
			"displayName": "Callback URL",
			"name": "callback_url",
			"type": "string",
			"default": "",
			"description": "Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
			"routing": {
				"send": {
					"property": "callback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Webhooks"
					],
					"operation": [
						"Update Project Webhook"
					]
				}
			}
		},
];
