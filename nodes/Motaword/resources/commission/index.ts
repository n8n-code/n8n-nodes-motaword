import type { INodeProperties } from 'n8n-workflow';

export const commissionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					]
				}
			},
			"options": [
				{
					"name": "Get Commissions",
					"value": "Get Commissions",
					"action": "Returns a commission list of current client.",
					"description": "Returns a commission list of current client.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commissions"
						}
					}
				},
				{
					"name": "Get Commissions By Filter",
					"value": "Get Commissions By Filter",
					"action": "Returns a commission list of current client.",
					"description": "Returns a commission list of current client.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/commissions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /commissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions"
					]
				}
			}
		},
		{
			"displayName": "POST /commissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Budget Code",
			"name": "budget_code",
			"type": "string",
			"default": "",
			"description": "budget code filter. valid for corporate accounts only.",
			"routing": {
				"send": {
					"property": "budget_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Date From",
			"name": "date_from",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "date_from",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Date To",
			"name": "date_to",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "date_to",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Source Languages",
			"name": "source_languages",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of source language codes.",
			"routing": {
				"send": {
					"property": "source_languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Target Languages",
			"name": "target_languages",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of target language codes.",
			"routing": {
				"send": {
					"property": "target_languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of corporate user IDs. Valid for corporate accounts only.",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Commission"
					],
					"operation": [
						"Get Commissions By Filter"
					]
				}
			}
		},
];
