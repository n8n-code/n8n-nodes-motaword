import type { INodeProperties } from 'n8n-workflow';

export const statsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					]
				}
			},
			"options": [
				{
					"name": "Get Commission Stats",
					"value": "Get Commission Stats",
					"action": "Returns the total commissions stats.",
					"description": "Returns the total commissions stats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/commissions"
						}
					}
				},
				{
					"name": "Get Commission Stats By Filter",
					"value": "Get Commission Stats By Filter",
					"action": "Returns the total commissions stats by report filter.",
					"description": "Returns the total commissions stats by report filter.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/stats/commissions"
						}
					}
				},
				{
					"name": "Get Popular Pairs",
					"value": "Get Popular Pairs",
					"action": "View your popular language pairs",
					"description": "View your popular language pairs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/popular-pairs"
						}
					}
				},
				{
					"name": "Get Project Stats",
					"value": "Get Project Stats",
					"action": "View your project statistics",
					"description": "View your project statistics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/projects"
						}
					}
				},
				{
					"name": "Get String Stats",
					"value": "Get String Stats",
					"action": "View your translation statistics",
					"description": "View your translation statistics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats/strings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /stats/commissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Commission Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /stats/commissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
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
						"Stats"
					],
					"operation": [
						"Get Commission Stats By Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /stats/popular-pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Popular Pairs"
					]
				}
			}
		},
		{
			"displayName": "GET /stats/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get Project Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /stats/strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Get String Stats"
					]
				}
			}
		},
];
