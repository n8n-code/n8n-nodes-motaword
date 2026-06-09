import type { INodeProperties } from 'n8n-workflow';

export const projectDocumentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					]
				}
			},
			"options": [
				{
					"name": "Get Project Documents",
					"value": "Get Project Documents",
					"action": "View project source documents",
					"description": "Get a list of source files you uploaded to be translated in your project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents"
						}
					}
				},
				{
					"name": "Create Project Document",
					"value": "Create Project Document",
					"action": "Upload a new document",
					"description": "Upload a new document",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents"
						}
					}
				},
				{
					"name": "Delete Project Document",
					"value": "Delete Project Document",
					"action": "Delete the document",
					"description": "Delete the document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Project Document",
					"value": "Get Project Document",
					"action": "View a project source document",
					"description": "View the details of a source file you uploaded to be translated in your project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Update Project Document",
					"value": "Update Project Document",
					"action": "Update the document.",
					"description": "Update the document. File name and contents will replaced with the new one.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Download Project Document",
					"value": "Download Project Document",
					"action": "Download a project source document",
					"description": "Download an actual source file you uploaded to be translated in your project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/download"
						}
					}
				},
				{
					"name": "Download Translated Document For Language",
					"value": "Download Translated Document For Language",
					"action": "Download translated document",
					"description": "Download translated document in the given target language.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/translations/download/{{$parameter[\"language\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /projects/{projectId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Get Project Documents"
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
						"Project Document"
					],
					"operation": [
						"Get Project Documents"
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
						"Project Document"
					],
					"operation": [
						"Get Project Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Create Project Document"
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
						"Project Document"
					],
					"operation": [
						"Create Project Document"
					]
				}
			}
		},
		{
			"displayName": "Documents",
			"name": "documents[]",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "You can add as many files as you want in documents[] parameter.",
			"routing": {
				"send": {
					"property": "documents[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Create Project Document"
					]
				}
			}
		},
		{
			"displayName": "Schemes",
			"name": "schemes[]",
			"type": "string",
			"default": "",
			"description": "JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.",
			"routing": {
				"send": {
					"property": "schemes[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Create Project Document"
					]
				}
			}
		},
		{
			"displayName": "Source Links",
			"name": "source-links[]",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents",
			"routing": {
				"send": {
					"property": "source-links[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Create Project Document"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{projectId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Delete Project Document"
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
						"Project Document"
					],
					"operation": [
						"Delete Project Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Delete Project Document"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Get Project Document"
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
						"Project Document"
					],
					"operation": [
						"Get Project Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Get Project Document"
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
						"Project Document"
					],
					"operation": [
						"Get Project Document"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Update Project Document"
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
						"Project Document"
					],
					"operation": [
						"Update Project Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Update Project Document"
					]
				}
			}
		},
		{
			"displayName": "Documents",
			"name": "documents",
			"type": "string",
			"default": "",
			"description": "Single file data. The name is plural to provide a consistent naming convention.",
			"routing": {
				"send": {
					"property": "documents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Update Project Document"
					]
				}
			}
		},
		{
			"displayName": "Schemes",
			"name": "schemes",
			"type": "string",
			"default": "",
			"description": "JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation.",
			"routing": {
				"send": {
					"property": "schemes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Update Project Document"
					]
				}
			}
		},
		{
			"displayName": "Source Link",
			"name": "source-link",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "source-link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Update Project Document"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/documents/{documentId}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Project Document"
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
						"Project Document"
					],
					"operation": [
						"Download Project Document"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Project Document"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/documents/{documentId}/translations/download/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Translated Document For Language"
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
						"Project Document"
					],
					"operation": [
						"Download Translated Document For Language"
					]
				}
			}
		},
		{
			"displayName": "Document Id",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Translated Document For Language"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"required": true,
			"description": "Target language code.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Translated Document For Language"
					]
				}
			}
		},
		{
			"displayName": "Certified",
			"name": "certified",
			"description": "Download certified translation",
			"default": 0,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "certified",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project Document"
					],
					"operation": [
						"Download Translated Document For Language"
					]
				}
			}
		},
];
