import type { INodeProperties } from 'n8n-workflow';

export const glossaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					]
				}
			},
			"options": [
				{
					"name": "Download Global Glossary",
					"value": "Download Global Glossary",
					"action": "Download account glossary.",
					"description": "Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/glossary"
						}
					}
				},
				{
					"name": "Update Global Glossary",
					"value": "Update Global Glossary",
					"action": "Create or update the account glossary",
					"description": "Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/glossary"
						}
					}
				},
				{
					"name": "Get Glossaries",
					"value": "Get Glossaries",
					"action": "View glossaries",
					"description": "View a list of glossaries previously uploaded to the project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries"
						}
					}
				},
				{
					"name": "Create Glossary",
					"value": "Create Glossary",
					"action": "Upload a glossary file",
					"description": "Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries"
						}
					}
				},
				{
					"name": "Delete Glossary",
					"value": "Delete Glossary",
					"action": "Delete a glossary",
					"description": "Delete the existing glossary from the project.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries/{{$parameter[\"glossaryId\"]}}"
						}
					}
				},
				{
					"name": "Get Glossary",
					"value": "Get Glossary",
					"action": "View a glossary",
					"description": "View the details of a glossary file uploaded to a project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries/{{$parameter[\"glossaryId\"]}}"
						}
					}
				},
				{
					"name": "Update Glossary",
					"value": "Update Glossary",
					"action": "Update a glossary",
					"description": "Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries/{{$parameter[\"glossaryId\"]}}"
						}
					}
				},
				{
					"name": "Download Glossary",
					"value": "Download Glossary",
					"action": "Download a glossary",
					"description": "Download a previously uploaded glossary file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/glossaries/{{$parameter[\"glossaryId\"]}}/download"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /glossary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Download Global Glossary"
					]
				}
			}
		},
		{
			"displayName": "POST /glossary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Global Glossary"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Glossary",
			"name": "glossary",
			"type": "string",
			"default": "",
			"description": "Glossary file. Currently supported formats: .xlsx, .tbx",
			"routing": {
				"send": {
					"property": "glossary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Global Glossary"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/glossaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Get Glossaries"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Get Glossaries"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/glossaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Create Glossary"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Create Glossary"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Glossaries",
			"name": "glossaries",
			"type": "string",
			"default": "",
			"description": "You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.",
			"routing": {
				"send": {
					"property": "glossaries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Create Glossary"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{projectId}/glossaries/{glossaryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Delete Glossary"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Delete Glossary"
					]
				}
			}
		},
		{
			"displayName": "Glossary ID",
			"name": "glossaryId",
			"required": true,
			"description": "Glossary ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Delete Glossary"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/glossaries/{glossaryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Get Glossary"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Get Glossary"
					]
				}
			}
		},
		{
			"displayName": "Glossary ID",
			"name": "glossaryId",
			"required": true,
			"description": "Glossary ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Get Glossary"
					]
				}
			}
		},
		{
			"displayName": "PUT /projects/{projectId}/glossaries/{glossaryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Glossary"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Glossary"
					]
				}
			}
		},
		{
			"displayName": "Glossary ID",
			"name": "glossaryId",
			"required": true,
			"description": "Glossary ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Glossary"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Glossaries",
			"name": "glossaries",
			"type": "string",
			"default": "",
			"description": "You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.",
			"routing": {
				"send": {
					"property": "glossaries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Update Glossary"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/glossaries/{glossaryId}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Download Glossary"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Download Glossary"
					]
				}
			}
		},
		{
			"displayName": "Glossary ID",
			"name": "glossaryId",
			"required": true,
			"description": "Glossary ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Glossary"
					],
					"operation": [
						"Download Glossary"
					]
				}
			}
		},
];
