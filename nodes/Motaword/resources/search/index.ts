import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Search Everywhere",
					"value": "Search Everywhere",
					"action": "Search everything in your account",
					"description": "Search through everything in your account, from projects to documents, from source strings to translations...",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search"
						}
					}
				},
				{
					"name": "Reindex Documents",
					"value": "Reindex Documents",
					"action": "Reindex for search all of the client source and translation documents.",
					"description": "Reindex for search all of the client source and translation documents.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/search/documents/reindex"
						}
					}
				},
				{
					"name": "Check Documents Reindex",
					"value": "Check Documents Reindex",
					"action": "Check reindex status of the client source and translation documents.",
					"description": "Check reindex status of the client source and translation documents.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/documents/reindex/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Search Everywhere"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query term",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Search Everywhere"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include%5B%5D",
			"description": "Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Search Everywhere"
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
						"Search"
					],
					"operation": [
						"Search Everywhere"
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
						"Search"
					],
					"operation": [
						"Search Everywhere"
					]
				}
			}
		},
		{
			"displayName": "POST /search/documents/reindex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Reindex Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /search/documents/reindex/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Check Documents Reindex"
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
						"Search"
					],
					"operation": [
						"Check Documents Reindex"
					]
				}
			}
		},
];
