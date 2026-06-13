import type { INodeProperties } from 'n8n-workflow';

export const stringsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					]
				}
			},
			"options": [
				{
					"name": "Post Continuous Project File Strings",
					"value": "Post Continuous Project File Strings",
					"action": "Get a list of strings and its translations in the project.",
					"description": "Get a list of strings and its translations in the project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/strings"
						}
					}
				},
				{
					"name": "Get Continuous Project File Strings",
					"value": "Get Continuous Project File Strings",
					"action": "View strings their translations in a continuous document",
					"description": "View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/strings"
						}
					}
				},
				{
					"name": "Get Continuous Project Strings",
					"value": "Get Continuous Project Strings",
					"action": "View strings and translations in continuous project",
					"description": "View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/strings"
						}
					}
				},
				{
					"name": "Clear Translation Cache",
					"value": "Clear Translation Cache",
					"action": "Clear translation cache",
					"description": "Clear/delete continuous project translation cache.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/strings/cached"
						}
					}
				},
				{
					"name": "Get Translation Cache",
					"value": "Get Translation Cache",
					"action": "View cached strings translations in continuous project",
					"description": "MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/strings/cached"
						}
					}
				},
				{
					"name": "Recache Translations",
					"value": "Recache Translations",
					"action": "Recache translations",
					"description": "Recache translations for the continuous project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/strings/recache-tms"
						}
					}
				},
				{
					"name": "Get Document Translations",
					"value": "Get Document Translations",
					"action": "View strings and translations of a document",
					"description": "View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/translations"
						}
					}
				},
				{
					"name": "Get Document Translations For Language",
					"value": "Get Document Translations For Language",
					"action": "View strings and translations of a document for target language",
					"description": "View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/translations/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "Get Project Strings",
					"value": "Get Project Strings",
					"action": "View project strings and translations",
					"description": "View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings"
						}
					}
				},
				{
					"name": "Package Project Translation Memory",
					"value": "Package Project Translation Memory",
					"action": "Download project translation memory",
					"description": "Package and download project translation memory in TMX format",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings/package"
						}
					}
				},
				{
					"name": "Package Project Translation Memory Status",
					"value": "Package Project Translation Memory Status",
					"action": "Check translation memory packaging status",
					"description": "Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings/package/status"
						}
					}
				},
				{
					"name": "Package Project Translation Memory For Language",
					"value": "Package Project Translation Memory For Language",
					"action": "Download language-specific project translation memory",
					"description": "Package and download project translation memory in TMX format for a specific target language.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings/{{$parameter[\"languageCode\"]}}/package"
						}
					}
				},
				{
					"name": "Package Project Translation Memory For Language Status",
					"value": "Package Project Translation Memory For Language Status",
					"action": "Check language-specific translation memory packaging status",
					"description": "Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings/{{$parameter[\"languageCode\"]}}/package/status"
						}
					}
				},
				{
					"name": "Get Project Strings For Language",
					"value": "Get Project Strings For Language",
					"action": "View strings and translations for target language",
					"description": "View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/strings/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "Get Strings",
					"value": "Get Strings",
					"action": "View account strings (translation memory)",
					"description": "Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/strings"
						}
					}
				},
				{
					"name": "Update Translation Memory Unit",
					"value": "Update Translation Memory Unit",
					"action": "Update string translation",
					"description": "Update the translation of a string from your account strings/translation memory.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/strings"
						}
					}
				},
				{
					"name": "Package User Translation Memory",
					"value": "Package User Translation Memory",
					"action": "Download account translation memory",
					"description": "Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/strings/{{$parameter[\"languageCode\"]}}/package"
						}
					}
				},
				{
					"name": "Package User Translation Memory For Language Status",
					"value": "Package User Translation Memory For Language Status",
					"action": "Check account translation memory packaging status",
					"description": "Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/strings/{{$parameter[\"languageCode\"]}}/package/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/documents/strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Post Continuous Project File Strings"
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
						"Strings"
					],
					"operation": [
						"Post Continuous Project File Strings"
					]
				}
			}
		},
		{
			"displayName": "Document Name",
			"name": "documentName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "documentName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Post Continuous Project File Strings"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/documents/{documentId}/strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Continuous Project File Strings"
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
						"Strings"
					],
					"operation": [
						"Get Continuous Project File Strings"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Document ID/Name",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Continuous Project File Strings"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Continuous Project Strings"
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
						"Strings"
					],
					"operation": [
						"Get Continuous Project Strings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /continuous_projects/{projectId}/strings/cached",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Clear Translation Cache"
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
						"Strings"
					],
					"operation": [
						"Clear Translation Cache"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "Locale",
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
						"Strings"
					],
					"operation": [
						"Clear Translation Cache"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"description": "Continuous Project File ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "file_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Clear Translation Cache"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/strings/cached",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Translation Cache"
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
						"Strings"
					],
					"operation": [
						"Get Translation Cache"
					]
				}
			}
		},
		{
			"displayName": "Flatten",
			"name": "flatten",
			"description": "Flatten cache results and ignore document keys",
			"default": 1,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "flatten",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Translation Cache"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/strings/recache-tms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Recache Translations"
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
						"Strings"
					],
					"operation": [
						"Recache Translations"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "Locale",
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
						"Strings"
					],
					"operation": [
						"Recache Translations"
					]
				}
			}
		},
		{
			"displayName": "File ID",
			"name": "file_id",
			"description": "Continuous Project File ID",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "file_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Recache Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/documents/{documentId}/translations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Document Translations"
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
						"Strings"
					],
					"operation": [
						"Get Document Translations"
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
						"Strings"
					],
					"operation": [
						"Get Document Translations"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/documents/{documentId}/translations/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Document Translations For Language"
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
						"Strings"
					],
					"operation": [
						"Get Document Translations For Language"
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
						"Strings"
					],
					"operation": [
						"Get Document Translations For Language"
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
						"Strings"
					],
					"operation": [
						"Get Document Translations For Language"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Project Strings"
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
						"Strings"
					],
					"operation": [
						"Get Project Strings"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/strings/package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory"
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
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "Async",
			"name": "async",
			"description": "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "async",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Translation Memory file format",
			"default": "tmx",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/strings/package/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory Status"
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
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory Status"
					]
				}
			}
		},
		{
			"displayName": "Async Request Key",
			"name": "async_request_key",
			"required": true,
			"description": "Async operation key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "async_request_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory Status"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{projectId}/strings/{languageCode}/package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language"
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
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "languageCode",
			"required": true,
			"description": "Language Code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language"
					]
				}
			}
		},
		{
			"displayName": "Async",
			"name": "async",
			"description": "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "async",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Translation Memory file format",
			"default": "tmx",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/strings/{languageCode}/package/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language Status"
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
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language Status"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "languageCode",
			"required": true,
			"description": "Language Code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language Status"
					]
				}
			}
		},
		{
			"displayName": "Async Request Key",
			"name": "async_request_key",
			"required": true,
			"description": "Async operation key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "async_request_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package Project Translation Memory For Language Status"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/strings/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Project Strings For Language"
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
						"Strings"
					],
					"operation": [
						"Get Project Strings For Language"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"required": true,
			"description": "Target language code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Project Strings For Language"
					]
				}
			}
		},
		{
			"displayName": "GET /strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Strings"
					]
				}
			}
		},
		{
			"displayName": "Source Language",
			"name": "source_language",
			"description": "Source Language Code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "source_language",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Get Strings"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "Requested page",
			"default": 0,
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
						"Strings"
					],
					"operation": [
						"Get Strings"
					]
				}
			}
		},
		{
			"displayName": "PUT /strings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Update Translation Memory Unit"
					]
				}
			}
		},
		{
			"displayName": "Source Language",
			"name": "sourceLanguage",
			"type": "string",
			"default": "",
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
						"Strings"
					],
					"operation": [
						"Update Translation Memory Unit"
					]
				}
			}
		},
		{
			"displayName": "Source Text",
			"name": "sourceText",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sourceText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Update Translation Memory Unit"
					]
				}
			}
		},
		{
			"displayName": "Target Language",
			"name": "targetLanguage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "targetLanguage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Update Translation Memory Unit"
					]
				}
			}
		},
		{
			"displayName": "Target Text",
			"name": "targetText",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "targetText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Update Translation Memory Unit"
					]
				}
			}
		},
		{
			"displayName": "POST /strings/{languageCode}/package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "languageCode",
			"required": true,
			"description": "Source Language Code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "Async",
			"name": "async",
			"description": "If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "async",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "If you don't need us to email the TMX, set this to '0'. Default is 1.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory"
					]
				}
			}
		},
		{
			"displayName": "GET /strings/{languageCode}/package/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory For Language Status"
					]
				}
			}
		},
		{
			"displayName": "Language Code",
			"name": "languageCode",
			"required": true,
			"description": "Language Code",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory For Language Status"
					]
				}
			}
		},
		{
			"displayName": "Async Request Key",
			"name": "async_request_key",
			"required": true,
			"description": "Async operation key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "async_request_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Strings"
					],
					"operation": [
						"Package User Translation Memory For Language Status"
					]
				}
			}
		},
];
