import type { INodeProperties } from 'n8n-workflow';

export const documentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					]
				}
			},
			"options": [
				{
					"name": "Get Documents",
					"value": "Get Documents",
					"action": "View your documents",
					"description": "View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents"
						}
					}
				},
				{
					"name": "Get All Document Subjects",
					"value": "Get All Document Subjects",
					"action": "Get a list of subjects of projects",
					"description": "Get a list of subjects of projects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/subjects"
						}
					}
				},
				{
					"name": "Get Document",
					"value": "Get Document",
					"action": "View a single document",
					"description": "View a single document from your MotaWord account with its translation info.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Document Progress",
					"value": "Get Document Progress",
					"action": "View a document translation progress",
					"description": "View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"documentId\"]}}/progress"
						}
					}
				},
				{
					"name": "Regenerate Preview",
					"value": "Regenerate Preview",
					"action": "Regenerate preview and return preview URL for given file",
					"description": "Regenerate preview and return preview URL for given file",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/documents/{{$parameter[\"documentId\"]}}/regenerate_preview"
						}
					}
				},
				{
					"name": "Get Similar Documents",
					"value": "Get Similar Documents",
					"action": "Find documents similar to this document.",
					"description": "Find documents similar to this document. Optionally, include translation information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/documents/{{$parameter[\"documentId\"]}}/similars"
						}
					}
				},
				{
					"name": "Use As Draft",
					"value": "Use As Draft",
					"action": "Use the translation of given source manual document as manual draft source for the given target document.",
					"description": "Use the translation of given source manual document as manual draft source for the given target document.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/documents/{{$parameter[\"documentId\"]}}/use_as_draft"
						}
					}
				},
				{
					"name": "Use As Regular",
					"value": "Use As Regular",
					"action": "Use the translation of the given manual document as a regular file.",
					"description": "Use the translation of the given manual document as a regular file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/documents/{{$parameter[\"documentId\"]}}/use_as_regular"
						}
					}
				},
				{
					"name": "Get User Documents",
					"value": "Get User Documents",
					"action": "Get a list of your documents",
					"description": "Get a list of your documents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/documents"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Recent",
			"name": "recent",
			"description": "When true, this will return the most 4 recent active documents.",
			"default": 0,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "recent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Type Filter",
			"name": "type_filter",
			"default": "ALL",
			"type": "options",
			"options": [
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "TEXT DOCUMENTS",
					"value": "TEXT_DOCUMENTS"
				},
				{
					"name": "PRESENTATIONS",
					"value": "PRESENTATIONS"
				},
				{
					"name": "SPREADSHEETS",
					"value": "SPREADSHEETS"
				},
				{
					"name": "PDFS",
					"value": "PDFS"
				},
				{
					"name": "IMAGES",
					"value": "IMAGES"
				},
				{
					"name": "SUBTITLES",
					"value": "SUBTITLES"
				},
				{
					"name": "DESIGNS",
					"value": "DESIGNS"
				},
				{
					"name": "LOCALIZATION",
					"value": "LOCALIZATION"
				},
				{
					"name": "WEB",
					"value": "WEB"
				},
				{
					"name": "STYLE GUIDES",
					"value": "STYLE_GUIDES"
				},
				{
					"name": "GLOSSARIES",
					"value": "GLOSSARIES"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type_filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "language_code",
			"description": "searches in source language of documents, in source and target languages of document's quote",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "language_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
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
						"Document"
					],
					"operation": [
						"Get Documents"
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
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"default": "updated_at",
			"type": "options",
			"options": [
				{
					"name": "ID",
					"value": "id"
				},
				{
					"name": "Updated At",
					"value": "updated_at"
				},
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "order_type",
			"default": "desc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Documents"
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
						"Document"
					],
					"operation": [
						"Get Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/subjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get All Document Subjects"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID or filename",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{documentId}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Document Progress"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Document Progress"
					]
				}
			}
		},
		{
			"displayName": "POST /documents/{documentId}/regenerate_preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Regenerate Preview"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Regenerate Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /documents/{documentId}/similars",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Similar Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get Similar Documents"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "Determines the number of similar documents to return.",
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
						"Document"
					],
					"operation": [
						"Get Similar Documents"
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
						"Document"
					],
					"operation": [
						"Get Similar Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /documents/{documentId}/use_as_draft",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Draft"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Draft"
					]
				}
			}
		},
		{
			"displayName": "From File ID",
			"name": "fromFileId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "fromFileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Draft"
					]
				}
			}
		},
		{
			"displayName": "From Manual Translation File ID",
			"name": "fromManualTranslationFileId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "fromManualTranslationFileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Draft"
					]
				}
			}
		},
		{
			"displayName": "To Manual Translation File ID",
			"name": "toManualTranslationFileId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "toManualTranslationFileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Draft"
					]
				}
			}
		},
		{
			"displayName": "POST /documents/{documentId}/use_as_regular",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Allow Original File Preview",
			"name": "allowOriginalFilePreview",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "allowOriginalFilePreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Allow Review In Manual Editor",
			"name": "allowReviewInManualEditor",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "allowReviewInManualEditor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Disable Invitations",
			"name": "disableInvitations",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableInvitations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "From Manual Translation File ID",
			"name": "fromManualTranslationFileId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "fromManualTranslationFileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Hide Numbers",
			"name": "hideNumbers",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "hideNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "Recreate",
			"name": "recreate",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "recreate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Use As Regular"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "User ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Recent",
			"name": "recent",
			"description": "When true, this will return the most 4 recent active documents.",
			"default": 0,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "recent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Type Filter",
			"name": "type_filter",
			"default": "ALL",
			"type": "options",
			"options": [
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "TEXT DOCUMENTS",
					"value": "TEXT_DOCUMENTS"
				},
				{
					"name": "PRESENTATIONS",
					"value": "PRESENTATIONS"
				},
				{
					"name": "SPREADSHEETS",
					"value": "SPREADSHEETS"
				},
				{
					"name": "PDFS",
					"value": "PDFS"
				},
				{
					"name": "IMAGES",
					"value": "IMAGES"
				},
				{
					"name": "SUBTITLES",
					"value": "SUBTITLES"
				},
				{
					"name": "DESIGNS",
					"value": "DESIGNS"
				},
				{
					"name": "LOCALIZATION",
					"value": "LOCALIZATION"
				},
				{
					"name": "WEB",
					"value": "WEB"
				},
				{
					"name": "STYLE GUIDES",
					"value": "STYLE_GUIDES"
				},
				{
					"name": "GLOSSARIES",
					"value": "GLOSSARIES"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type_filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "language_code",
			"description": "searches in source language of documents, in source and target languages of document's quote",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "language_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
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
						"Document"
					],
					"operation": [
						"Get User Documents"
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
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"default": "updated_at",
			"type": "options",
			"options": [
				{
					"name": "ID",
					"value": "id"
				},
				{
					"name": "Updated At",
					"value": "updated_at"
				},
				{
					"name": "Created At",
					"value": "created_at"
				},
				{
					"name": "Name",
					"value": "name"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "order_type",
			"default": "desc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "order_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document"
					],
					"operation": [
						"Get User Documents"
					]
				}
			}
		},
];
