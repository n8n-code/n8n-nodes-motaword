import type { INodeProperties } from 'n8n-workflow';

export const integrationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					]
				}
			},
			"options": [
				{
					"name": "Get Integrations Token",
					"value": "Get Integrations Token",
					"action": "Generate a new access token for MotaWord's integrations service",
					"description": "Generate a new access token for MotaWord's integrations service",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/integrations/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /integrations/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrations"
					],
					"operation": [
						"Get Integrations Token"
					]
				}
			}
		},
];
