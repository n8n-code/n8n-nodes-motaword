import type { INodeProperties } from 'n8n-workflow';

export const reportDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					]
				}
			},
			"options": [
				{
					"name": "Get Filter Contents",
					"value": "Get Filter Contents",
					"action": "Returns available options for selected timeframe.",
					"description": "Returns available options for selected timeframe.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/filter"
						}
					}
				},
				{
					"name": "Get Language Pairs Report",
					"value": "Get Language Pairs Report",
					"action": "Language pairs report",
					"description": "View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/language-pairs"
						}
					}
				},
				{
					"name": "Get Projects Report",
					"value": "Get Projects Report",
					"action": "Projects report",
					"description": "View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/projects"
						}
					}
				},
				{
					"name": "Generate QA Report",
					"value": "Generate QA Report",
					"action": "Generate a QA report for given filter",
					"description": "Generate a QA report for given filter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/qa"
						}
					}
				},
				{
					"name": "Get Users Report",
					"value": "Get Users Report",
					"action": "Company users report",
					"description": "View translation reports for each user under your company account. You need the permission to view users in your company.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/users"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /reports/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Get Filter Contents"
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
						"Report"
					],
					"operation": [
						"Get Filter Contents"
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
						"Report"
					],
					"operation": [
						"Get Filter Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/language-pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
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
						"Report"
					],
					"operation": [
						"Get Language Pairs Report"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
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
						"Report"
					],
					"operation": [
						"Get Projects Report"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/qa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Budget Codes",
			"name": "budget_codes",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "budget_codes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "categories",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Clients",
			"name": "clients",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
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
						"Report"
					],
					"operation": [
						"Generate QA Report"
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
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Documents",
			"name": "documents",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "documents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Projects",
			"name": "projects",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "projects",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Severities",
			"name": "severities",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "severities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Source Languages",
			"name": "source_languages",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Subjects",
			"name": "subjects",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "subjects",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Target Languages",
			"name": "target_languages",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "Vendors",
			"name": "vendors",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "vendors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Generate QA Report"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
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
						"Report"
					],
					"operation": [
						"Get Users Report"
					]
				}
			}
		},
];
