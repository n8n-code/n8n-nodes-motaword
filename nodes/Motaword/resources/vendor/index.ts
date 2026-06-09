import type { INodeProperties } from 'n8n-workflow';

export const vendorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					]
				}
			},
			"options": [
				{
					"name": "Get Available Vendors",
					"value": "Get Available Vendors",
					"action": "Get a list of vendors available for the criteria given",
					"description": "Get a list of vendors available for the criteria given",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/available-vendors"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /users/available-vendors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "With",
			"name": "with%5B%5D",
			"description": "Include detailed information. Possible values 'user'. Requesting user info enrichment takes much longer.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "with[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "Corporate Id",
			"name": "corporateId",
			"type": "number",
			"default": 0,
			"description": "Corporate account ID to filter for vendor authorization",
			"routing": {
				"send": {
					"property": "corporateId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "Manual Work Permission",
			"name": "manualWorkPermission",
			"type": "boolean",
			"default": 0,
			"description": "Filter vendors for manual work permission",
			"routing": {
				"send": {
					"property": "manualWorkPermission",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "Source Language",
			"name": "sourceLanguage",
			"type": "string",
			"default": "",
			"description": "Source language code",
			"routing": {
				"send": {
					"property": "sourceLanguage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "Target Languages",
			"name": "targetLanguages",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of target language codes.",
			"routing": {
				"send": {
					"property": "targetLanguages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of vendor types",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Vendor"
					],
					"operation": [
						"Get Available Vendors"
					]
				}
			}
		},
];
