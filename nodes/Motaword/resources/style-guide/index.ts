import type { INodeProperties } from 'n8n-workflow';

export const styleGuideDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					]
				}
			},
			"options": [
				{
					"name": "Get Style Guides",
					"value": "Get Style Guides",
					"action": "View style guides",
					"description": "View a list of style guides in your project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides"
						}
					}
				},
				{
					"name": "Create Style Guide",
					"value": "Create Style Guide",
					"action": "Upload a new style guide",
					"description": "Upload a new style guide",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides"
						}
					}
				},
				{
					"name": "Delete Style Guide",
					"value": "Delete Style Guide",
					"action": "Delete a style guide",
					"description": "Delete the existing style guide from the project.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides/{{$parameter[\"styleGuideId\"]}}"
						}
					}
				},
				{
					"name": "Get Style Guide",
					"value": "Get Style Guide",
					"action": "View a style guide",
					"description": "View the details of a style guide uploaded to a project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides/{{$parameter[\"styleGuideId\"]}}"
						}
					}
				},
				{
					"name": "Update Style Guide",
					"value": "Update Style Guide",
					"action": "Update a style guide",
					"description": "Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides/{{$parameter[\"styleGuideId\"]}}"
						}
					}
				},
				{
					"name": "Download Style Guide",
					"value": "Download Style Guide",
					"action": "Download a style guide",
					"description": "Download a previously uploaded style guide file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/styleguides/{{$parameter[\"styleGuideId\"]}}/download"
						}
					}
				},
				{
					"name": "Download Global Style Guide",
					"value": "Download Global Style Guide",
					"action": "Download account style guide",
					"description": "Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/styleguide"
						}
					}
				},
				{
					"name": "Update Global Style Guide",
					"value": "Update Global Style Guide",
					"action": "Create or update the account style guide",
					"description": "Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/styleguide"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /projects/{projectId}/styleguides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Get Style Guides"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Get Style Guides"
					]
				}
			}
		},
		{
			"displayName": "With",
			"name": "with%5B%5D",
			"description": "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
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
						"Style Guide"
					],
					"operation": [
						"Get Style Guides"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/styleguides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Create Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Create Style Guide"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Styleguides",
			"name": "styleguides",
			"type": "string",
			"default": "",
			"description": "You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.",
			"routing": {
				"send": {
					"property": "styleguides",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Create Style Guide"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{projectId}/styleguides/{styleGuideId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Delete Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Delete Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Style Guide Id",
			"name": "styleGuideId",
			"required": true,
			"description": "Style Guide ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Delete Style Guide"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/styleguides/{styleGuideId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Get Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Get Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Style Guide Id",
			"name": "styleGuideId",
			"required": true,
			"description": "Style Guide ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Get Style Guide"
					]
				}
			}
		},
		{
			"displayName": "With",
			"name": "with%5B%5D",
			"description": "Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.",
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
						"Style Guide"
					],
					"operation": [
						"Get Style Guide"
					]
				}
			}
		},
		{
			"displayName": "PUT /projects/{projectId}/styleguides/{styleGuideId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Style Guide Id",
			"name": "styleGuideId",
			"required": true,
			"description": "Style guide ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Style Guide"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Styleguides",
			"name": "styleguides",
			"type": "string",
			"default": "",
			"description": "You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.",
			"routing": {
				"send": {
					"property": "styleguides",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Style Guide"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/styleguides/{styleGuideId}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Download Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Project Id",
			"name": "projectId",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Download Style Guide"
					]
				}
			}
		},
		{
			"displayName": "Style Guide Id",
			"name": "styleGuideId",
			"required": true,
			"description": "Style Guide ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Download Style Guide"
					]
				}
			}
		},
		{
			"displayName": "GET /styleguide",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Download Global Style Guide"
					]
				}
			}
		},
		{
			"displayName": "POST /styleguide",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Global Style Guide"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Styleguide",
			"name": "styleguide",
			"type": "string",
			"default": "",
			"description": "Style guide file. Currently supported formats: .pdf, .docx, .txt",
			"routing": {
				"send": {
					"property": "styleguide",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Style Guide"
					],
					"operation": [
						"Update Global Style Guide"
					]
				}
			}
		},
];
