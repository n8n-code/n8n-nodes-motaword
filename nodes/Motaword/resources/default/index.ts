import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Delete Cache",
					"value": "Delete Cache",
					"action": "Clear cache by key",
					"description": "Clear cache by key",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/cache/{{$parameter[\"key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /cache/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "Cache key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache"
					]
				}
			}
		},
];
