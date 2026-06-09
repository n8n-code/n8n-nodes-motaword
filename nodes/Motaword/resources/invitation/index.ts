import type { INodeProperties } from 'n8n-workflow';

export const invitationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Invitation"
					]
				}
			},
			"options": [
				{
					"name": "Get Invitation Vendors",
					"value": "Get Invitation Vendors",
					"action": "Get vendor list for compiled invitation needs",
					"description": "Get vendor list for compiled invitation needs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/invitation/vendors"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /invitation/vendors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invitation"
					],
					"operation": [
						"Get Invitation Vendors"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"targetLanguage\": [\n    null\n  ],\n  \"taskType\": [\n    null\n  ]\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invitation"
					],
					"operation": [
						"Get Invitation Vendors"
					]
				}
			}
		},
];
