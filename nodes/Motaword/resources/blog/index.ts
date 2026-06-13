import type { INodeProperties } from 'n8n-workflow';

export const blogDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Blog"
					]
				}
			},
			"options": [
				{
					"name": "Get Blog Posts",
					"value": "Get Blog Posts",
					"action": "Get blog posts - ordered by created desc by default",
					"description": "Get blog posts - ordered by created desc by default",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/blogs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /blogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blog"
					],
					"operation": [
						"Get Blog Posts"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blog"
					],
					"operation": [
						"Get Blog Posts"
					]
				}
			}
		},
		{
			"displayName": "Fallback",
			"name": "fallback",
			"description": "When `true`, and no article is found in the locale, it falls back to `locale=en`.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "fallback",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blog"
					],
					"operation": [
						"Get Blog Posts"
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
						"Blog"
					],
					"operation": [
						"Get Blog Posts"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"default": 1,
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
						"Blog"
					],
					"operation": [
						"Get Blog Posts"
					]
				}
			}
		},
];
