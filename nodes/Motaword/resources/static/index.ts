import type { INodeProperties } from 'n8n-workflow';

export const staticDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Static"
					]
				}
			},
			"options": [
				{
					"name": "Get Endpoints",
					"value": "Get Endpoints",
					"action": "Available endpoints",
					"description": "The root endpoint will provide you with an OpenAPI definition of MotaWord API.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				},
				{
					"name": "Get Formats",
					"value": "Get Formats",
					"action": "List of supported file formats",
					"description": "Get a list of supported formats for documents, style guides and extensions.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/formats"
						}
					}
				},
				{
					"name": "Get Languages",
					"value": "Get Languages",
					"action": "List of supported languages",
					"description": "Get a list of supported languages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/languages"
						}
					}
				},
				{
					"name": "Get Swagger Yaml",
					"value": "Get Swagger Yaml",
					"action": "OpenAPI YAML representation of our API",
					"description": "Get Swagger YAML",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/swagger"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static"
					],
					"operation": [
						"Get Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /formats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static"
					],
					"operation": [
						"Get Formats"
					]
				}
			}
		},
		{
			"displayName": "GET /languages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static"
					],
					"operation": [
						"Get Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /swagger",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Static"
					],
					"operation": [
						"Get Swagger Yaml"
					]
				}
			}
		},
];
