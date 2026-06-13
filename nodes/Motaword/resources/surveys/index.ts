import type { INodeProperties } from 'n8n-workflow';

export const surveysDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					]
				}
			},
			"options": [
				{
					"name": "Get Questions",
					"value": "Get Questions",
					"action": "Get survey questions in given scope and type",
					"description": "Get survey questions in given scope and type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/surveys/{{$parameter[\"scope\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Submit Answers",
					"value": "Submit Answers",
					"action": "Post survey answers for scope and type",
					"description": "Post survey answers for scope and type",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/surveys/{{$parameter[\"scope\"]}}/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /surveys/{scope}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Get Questions"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"description": "Scope",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Get Questions"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Type",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Get Questions"
					]
				}
			}
		},
		{
			"displayName": "Attach Answers For Project",
			"name": "attach_answers_for_project",
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "attach_answers_for_project",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Get Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /surveys/{scope}/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"description": "Scope",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "Type",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
		{
			"displayName": "Answers",
			"name": "answers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "answers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Surveys"
					],
					"operation": [
						"Submit Answers"
					]
				}
			}
		},
];
