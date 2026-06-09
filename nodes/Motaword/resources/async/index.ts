import type { INodeProperties } from 'n8n-workflow';

export const asyncDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Async"
					]
				}
			},
			"options": [
				{
					"name": "Download Async",
					"value": "Download Async",
					"action": "Download result of an async operation",
					"description": "Download the result of an async operation that you have requested in other endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/async/download"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /async/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Async"
					],
					"operation": [
						"Download Async"
					]
				}
			}
		},
		{
			"displayName": "Async Request Key",
			"name": "async_request_key",
			"required": true,
			"description": "Async operation key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "async_request_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Async"
					],
					"operation": [
						"Download Async"
					]
				}
			}
		},
];
