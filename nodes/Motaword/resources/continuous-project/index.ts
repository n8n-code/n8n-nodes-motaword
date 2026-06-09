import type { INodeProperties } from 'n8n-workflow';

export const continuousProjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					]
				}
			},
			"options": [
				{
					"name": "Get Continuous Projects",
					"value": "Get Continuous Projects",
					"action": "View continuous projects",
					"description": "View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects"
						}
					}
				},
				{
					"name": "Create Continuous Project",
					"value": "Create Continuous Project",
					"action": "Create a continuous project",
					"description": "Create a new continuous project for your software, website, CI/CD translation needs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects"
						}
					}
				},
				{
					"name": "Delete Continuous Project",
					"value": "Delete Continuous Project",
					"action": "Delete a continuous project",
					"description": "Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Continuous Project",
					"value": "Get Continuous Project",
					"action": "View a continuous project",
					"description": "View the details of a continuous project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Continuous Project",
					"value": "Update Continuous Project",
					"action": "Update a continuous project",
					"description": "Update the details and settings of continuous project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Analytics Token",
					"value": "Get Analytics Token",
					"action": "Get JWT token to be used in analytics dashboards",
					"description": "Get JWT token to be used in analytics dashboards",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/analytics-token"
						}
					}
				},
				{
					"name": "Collect Analytics",
					"value": "Collect Analytics",
					"action": "Save/collect analytics data from Active widget",
					"description": "Save/collect analytics data from Active widget",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/collect-analytics"
						}
					}
				},
				{
					"name": "Complete",
					"value": "Complete",
					"action": "Complete continuous project",
					"description": "Complete continuous project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/complete"
						}
					}
				},
				{
					"name": "Get Quote For Documents",
					"value": "Get Quote For Documents",
					"action": "Get quote for documents",
					"description": "Get a new quote for provided documents in continuous project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/documents/quote"
						}
					}
				},
				{
					"name": "Complete Continuous Document",
					"value": "Complete Continuous Document",
					"action": "Complete a continuous project document",
					"description": "Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/documents/{{$parameter[\"documentId\"]}}/complete"
						}
					}
				},
				{
					"name": "Get Quote For Document",
					"value": "Get Quote For Document",
					"action": "Get a quote for a continuous project document",
					"description": "Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/documents/{{$parameter[\"documentId\"]}}/quote"
						}
					}
				},
				{
					"name": "Get Quote For Languages",
					"value": "Get Quote For Languages",
					"action": "Get quote for languages",
					"description": "Get a new quote for provided target languages in continuous project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/languages/quote"
						}
					}
				},
				{
					"name": "Complete Language",
					"value": "Complete Language",
					"action": "Complete continuous project language",
					"description": "Complete continuous project language",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/languages/{{$parameter[\"targetLanguage\"]}}/complete"
						}
					}
				},
				{
					"name": "Get Quote For Language",
					"value": "Get Quote For Language",
					"action": "Get quote for language",
					"description": "Get a new quote for provided target language in continuous project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/languages/{{$parameter[\"targetLanguage\"]}}/quote"
						}
					}
				},
				{
					"name": "Delete Subscription",
					"value": "Delete Subscription",
					"action": "Delete subscription for continuous project",
					"description": "Delete subscription for continuous project",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/subscription"
						}
					}
				},
				{
					"name": "Get Subscription",
					"value": "Get Subscription",
					"action": "Get subscription for continuous project",
					"description": "Get subscription for continuous project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/subscription"
						}
					}
				},
				{
					"name": "Create Subscription",
					"value": "Create Subscription",
					"action": "Create subscription for continuous project",
					"description": "Create subscription for continuous project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/subscription"
						}
					}
				},
				{
					"name": "Update Subscription",
					"value": "Update Subscription",
					"action": "Update subscription for continuous project",
					"description": "Update subscription for continuous project",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/subscription"
						}
					}
				},
				{
					"name": "Update Subscription Payment Method",
					"value": "Update Subscription Payment Method",
					"action": "Update subscription payment method for continuous project",
					"description": "Update subscription payment method for continuous project",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/subscription/payment"
						}
					}
				},
				{
					"name": "Translate",
					"value": "Translate",
					"action": "Instantly translate your content",
					"description": "Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"id\"]}}/translate/{{$parameter[\"targetLanguage\"]}}"
						}
					}
				},
				{
					"name": "Get Continuous Project Documents",
					"value": "Get Continuous Project Documents",
					"action": "View continuous documents",
					"description": "View the documents under this continuous project",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents"
						}
					}
				},
				{
					"name": "Add Document",
					"value": "Add Document",
					"action": "Add a new document to your continuous project",
					"description": "Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents"
						}
					}
				},
				{
					"name": "Post Continuous Project Document Progress",
					"value": "Post Continuous Project Document Progress",
					"action": "Get continuous project document progress for multiple IDs",
					"description": "Get continuous project document progress for multiple IDs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/progress"
						}
					}
				},
				{
					"name": "Get Continuous Project Document",
					"value": "Get Continuous Project Document",
					"action": "View a continuous document",
					"description": "View the details of a source document in continuous translation project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Update Document",
					"value": "Update Document",
					"action": "Update the document",
					"description": "Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Continuous Project Document Progress",
					"value": "Get Continuous Project Document Progress",
					"action": "Monitor progress of a continuous document",
					"description": "Monitor the translation progress of a document in a continuous project in real-time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/documents/{{$parameter[\"documentId\"]}}/progress"
						}
					}
				},
				{
					"name": "Get Continuous Project Invoices",
					"value": "Get Continuous Project Invoices",
					"action": "Invoices of a continuous project",
					"description": "Get real-time access to a continuous project's invoices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/invoices"
						}
					}
				},
				{
					"name": "Get Continuous Project Progress",
					"value": "Get Continuous Project Progress",
					"action": "Monitor progress and status of a continous project",
					"description": "Monitor the translation progress of an ongoing continuous project in real-time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/progress"
						}
					}
				},
				{
					"name": "Get Active Widgets",
					"value": "Get Active Widgets",
					"action": "View Active widgets",
					"description": "View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets"
						}
					}
				},
				{
					"name": "Create Active Widget",
					"value": "Create Active Widget",
					"action": "Create a new Active widget",
					"description": "Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets"
						}
					}
				},
				{
					"name": "Delete Active Widget",
					"value": "Delete Active Widget",
					"action": "Delete a single widget for this Active project",
					"description": "Delete a single widget for this Active project",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets/{{$parameter[\"widgetId\"]}}"
						}
					}
				},
				{
					"name": "Get Active Widget",
					"value": "Get Active Widget",
					"action": "View an Active widget",
					"description": "View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets/{{$parameter[\"widgetId\"]}}"
						}
					}
				},
				{
					"name": "Update Active Widget",
					"value": "Update Active Widget",
					"action": "Update Active widget settings.",
					"description": "Update Active widget settings.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets/{{$parameter[\"widgetId\"]}}"
						}
					}
				},
				{
					"name": "Reset Active Widget Token",
					"value": "Reset Active Widget Token",
					"action": "Reset Active widget token",
					"description": "Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/continuous_projects/{{$parameter[\"projectId\"]}}/widgets/{{$parameter[\"widgetId\"]}}/reset-token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /continuous_projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Projects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Type of continuous project.",
			"default": "active",
			"type": "options",
			"options": [
				{
					"name": "Active",
					"value": "active"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Analytics Enabled",
			"name": "analytics_enabled",
			"type": "boolean",
			"default": true,
			"description": "Should we collect analytics data from Active for this continuous project?",
			"routing": {
				"send": {
					"property": "analytics_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Auto Start Postedit",
			"name": "auto_start_postedit",
			"type": "boolean",
			"default": true,
			"description": "Immediately start post-editing project for translation requests that are applied MT.",
			"routing": {
				"send": {
					"property": "auto_start_postedit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Is Enabled",
			"name": "is_enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Last Activity At",
			"name": "last_activity_at",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "last_activity_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Links",
			"name": "links",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Mt Enabled",
			"name": "mt_enabled",
			"type": "boolean",
			"default": true,
			"description": "Immediately apply MT on translation requests if they are missing from TM.",
			"routing": {
				"send": {
					"property": "mt_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Mt Engine",
			"name": "mt_engine",
			"type": "string",
			"default": "",
			"description": "One of \"MOTAWORD\", \"GOOGLE\", \"AMAZON\", \"MS\". Default is \"MOTAWORD\".",
			"routing": {
				"send": {
					"property": "mt_engine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Postedit Enabled",
			"name": "postedit_enabled",
			"type": "boolean",
			"default": true,
			"description": "Get an instant quote for translation requests that are applied MT.",
			"routing": {
				"send": {
					"property": "postedit_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Source Language",
			"name": "source_language",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "source_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"description": "One of \"a => ACTIVE\", \"i => INACTIVE\", \"d => DELETED\", \"c => SCHEDULED CANCELLATION\", \"p => SCHEDULED CHANGE\"",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Subscription",
			"name": "subscription",
			"type": "json",
			"default": "{\n  \"downgrade\": [\n    null\n  ],\n  \"products\": [\n    null\n  ],\n  \"upgrade\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "subscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
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
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"description": "Continuous project type. We currently have only 2 types, NULL and \"active\".",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Word Count",
			"name": "word_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "word_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "DELETE /continuous_projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Analytics Enabled",
			"name": "analytics_enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "analytics_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Auto Start Postedit",
			"name": "auto_start_postedit",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "auto_start_postedit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Is Enabled",
			"name": "is_enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Languages",
			"name": "languages",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Mt Enabled",
			"name": "mt_enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "mt_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "Postedit Enabled",
			"name": "postedit_enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "postedit_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Continuous Project"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{id}/analytics-token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Analytics Token"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Analytics Token"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/collect-analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "Anonymous ID",
			"name": "anonymousId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "anonymousId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Collect Analytics"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/documents/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Documents"
					]
				}
			}
		},
		{
			"displayName": "Files",
			"name": "files",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "files",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/documents/{documentId}/complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete Continuous Document"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete Continuous Document"
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
						"Continuous Project"
					],
					"operation": [
						"Complete Continuous Document"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/documents/{documentId}/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Document"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Document"
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
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Document"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/languages/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Languages"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Languages"
					]
				}
			}
		},
		{
			"displayName": "Languages",
			"name": "languages",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Languages"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/languages/{targetLanguage}/complete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete Language"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete Language"
					]
				}
			}
		},
		{
			"displayName": "Target Language",
			"name": "targetLanguage",
			"required": true,
			"description": "Target language that you want to complete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Complete Language"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/languages/{targetLanguage}/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Language"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Language"
					]
				}
			}
		},
		{
			"displayName": "Target Language",
			"name": "targetLanguage",
			"required": true,
			"description": "Target language that you want to complete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Quote For Language"
					]
				}
			}
		},
		{
			"displayName": "DELETE /continuous_projects/{id}/subscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Subscription"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Subscription"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{id}/subscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Subscription"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/subscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Downgrade",
			"name": "downgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe downgradable plan",
			"routing": {
				"send": {
					"property": "downgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Payment Method",
			"name": "payment_method",
			"type": "number",
			"default": 0,
			"description": "Stripe subscription plan payment card internal id",
			"routing": {
				"send": {
					"property": "payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Period End",
			"name": "period_end",
			"type": "string",
			"default": "",
			"description": "Stripe plan period end",
			"routing": {
				"send": {
					"property": "period_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "plan_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan id",
			"routing": {
				"send": {
					"property": "plan_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "plan_name",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan name",
			"routing": {
				"send": {
					"property": "plan_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "string",
			"default": "",
			"description": "Stripe plan price",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Products",
			"name": "products",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Schedule Name",
			"name": "schedule_name",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled plan period end",
			"routing": {
				"send": {
					"property": "schedule_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Schedule Start",
			"name": "schedule_start",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled start date",
			"routing": {
				"send": {
					"property": "schedule_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscription_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription id for this project",
			"routing": {
				"send": {
					"property": "subscription_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "Upgrade",
			"name": "upgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe upgradable plan",
			"routing": {
				"send": {
					"property": "upgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "With Trial",
			"name": "withTrial",
			"type": "string",
			"default": "",
			"description": "Stripe plan trial",
			"routing": {
				"send": {
					"property": "withTrial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "PUT /continuous_projects/{id}/subscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Downgrade",
			"name": "downgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe downgradable plan",
			"routing": {
				"send": {
					"property": "downgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Payment Method",
			"name": "payment_method",
			"type": "number",
			"default": 0,
			"description": "Stripe subscription plan payment card internal id",
			"routing": {
				"send": {
					"property": "payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Period End",
			"name": "period_end",
			"type": "string",
			"default": "",
			"description": "Stripe plan period end",
			"routing": {
				"send": {
					"property": "period_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "plan_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan id",
			"routing": {
				"send": {
					"property": "plan_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "plan_name",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan name",
			"routing": {
				"send": {
					"property": "plan_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "string",
			"default": "",
			"description": "Stripe plan price",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Products",
			"name": "products",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Schedule Name",
			"name": "schedule_name",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled plan period end",
			"routing": {
				"send": {
					"property": "schedule_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Schedule Start",
			"name": "schedule_start",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled start date",
			"routing": {
				"send": {
					"property": "schedule_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscription_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription id for this project",
			"routing": {
				"send": {
					"property": "subscription_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "Upgrade",
			"name": "upgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe upgradable plan",
			"routing": {
				"send": {
					"property": "upgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "With Trial",
			"name": "withTrial",
			"type": "string",
			"default": "",
			"description": "Stripe plan trial",
			"routing": {
				"send": {
					"property": "withTrial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "PUT /continuous_projects/{id}/subscription/payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Downgrade",
			"name": "downgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe downgradable plan",
			"routing": {
				"send": {
					"property": "downgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Payment Method",
			"name": "payment_method",
			"type": "number",
			"default": 0,
			"description": "Stripe subscription plan payment card internal id",
			"routing": {
				"send": {
					"property": "payment_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Period End",
			"name": "period_end",
			"type": "string",
			"default": "",
			"description": "Stripe plan period end",
			"routing": {
				"send": {
					"property": "period_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Plan ID",
			"name": "plan_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan id",
			"routing": {
				"send": {
					"property": "plan_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Plan Name",
			"name": "plan_name",
			"type": "string",
			"default": "",
			"description": "Stripe subscription plan name",
			"routing": {
				"send": {
					"property": "plan_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "string",
			"default": "",
			"description": "Stripe plan price",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Products",
			"name": "products",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "products",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Schedule Name",
			"name": "schedule_name",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled plan period end",
			"routing": {
				"send": {
					"property": "schedule_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Schedule Start",
			"name": "schedule_start",
			"type": "string",
			"default": "",
			"description": "Stripe Scheduled start date",
			"routing": {
				"send": {
					"property": "schedule_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscription_id",
			"type": "string",
			"default": "",
			"description": "Stripe subscription id for this project",
			"routing": {
				"send": {
					"property": "subscription_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "Upgrade",
			"name": "upgrade",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Stripe upgradable plan",
			"routing": {
				"send": {
					"property": "upgrade",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "With Trial",
			"name": "withTrial",
			"type": "string",
			"default": "",
			"description": "Stripe plan trial",
			"routing": {
				"send": {
					"property": "withTrial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Subscription Payment Method"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{id}/translate/{targetLanguage}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "Target Language",
			"name": "targetLanguage",
			"required": true,
			"description": "Target language that you want to instantly translate your file into.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "Contents",
			"name": "contents",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Simple list of strings to be translated. You can also choose to upload files instead of strings.",
			"routing": {
				"send": {
					"property": "contents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "Documents",
			"name": "documents",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "You can add as many files as you want in documents parameter.",
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
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "filters",
			"type": "json",
			"default": "{\n  \"skipMt\": [\n    null\n  ],\n  \"skipPostEdit\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "Meta",
			"name": "meta",
			"type": "json",
			"default": "{}",
			"description": "Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards.",
			"routing": {
				"send": {
					"property": "meta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Translate"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Documents"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Documents"
					]
				}
			}
		},
		{
			"displayName": "Filter By Language",
			"name": "filterByLanguage",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filterByLanguage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Add Document"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Add Document"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Add Document"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/documents/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Post Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Post Continuous Project Document Progress"
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
						"Continuous Project"
					],
					"operation": [
						"Post Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "Filter By Language",
			"name": "filterByLanguage",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "filterByLanguage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Post Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document"
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
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Continuous project document ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Document"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/documents/{documentId}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document Progress"
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
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "Filter By Language",
			"name": "filterByLanguage",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filterByLanguage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Document Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Invoices"
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
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Invoices"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Progress"
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
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Progress"
					]
				}
			}
		},
		{
			"displayName": "Filter By Language",
			"name": "filterByLanguage",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filterByLanguage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Continuous Project Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/widgets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Active Widgets"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Active Widgets"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/widgets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Allow Hash In URL",
			"name": "allow_hash_in_url",
			"type": "boolean",
			"default": true,
			"description": "When true, hash params are included in filenames. When false, params are ignored.",
			"routing": {
				"send": {
					"property": "allow_hash_in_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Allow Query In URL",
			"name": "allow_query_in_url",
			"type": "boolean",
			"default": true,
			"description": "When true, query params are included in filenames. When false, params are ignored.",
			"routing": {
				"send": {
					"property": "allow_query_in_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect Source Language",
			"name": "auto_detect_source_language",
			"type": "boolean",
			"default": true,
			"description": "When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.",
			"routing": {
				"send": {
					"property": "auto_detect_source_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Elements",
			"name": "elements",
			"type": "string",
			"default": "",
			"description": "Continuous project exclusive elements and rules",
			"routing": {
				"send": {
					"property": "elements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Follow User",
			"name": "follow_user",
			"type": "boolean",
			"default": true,
			"description": "Specify whether we should follow the user around in your website and automatically translate pages.",
			"routing": {
				"send": {
					"property": "follow_user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Force Cache Refresh Interval",
			"name": "force_cache_refresh_interval",
			"type": "boolean",
			"default": true,
			"description": "Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.",
			"routing": {
				"send": {
					"property": "force_cache_refresh_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Language Mappings",
			"name": "language_mappings",
			"type": "string",
			"default": "",
			"description": "Continuous project language mappings",
			"routing": {
				"send": {
					"property": "language_mappings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Live",
			"name": "live",
			"type": "boolean",
			"default": true,
			"description": "Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.",
			"routing": {
				"send": {
					"property": "live",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Modify Links",
			"name": "modify_links",
			"type": "boolean",
			"default": true,
			"description": "We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.",
			"routing": {
				"send": {
					"property": "modify_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Optimize Per Page",
			"name": "optimize_per_page",
			"type": "boolean",
			"default": true,
			"description": "When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.",
			"routing": {
				"send": {
					"property": "optimize_per_page",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Pages",
			"name": "pages",
			"type": "string",
			"default": "",
			"description": "Continuous project page rules",
			"routing": {
				"send": {
					"property": "pages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Path Regex",
			"name": "path_regex",
			"type": "string",
			"default": "",
			"description": "Custom regex for path-type URL mode.",
			"routing": {
				"send": {
					"property": "path_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"type": "string",
			"default": "",
			"description": "Options are \"bottom-left\", \"bottom-right\", \"in-place\"",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Query Name",
			"name": "query_name",
			"type": "string",
			"default": "locale",
			"description": "Query parameter name to be used with query-type URL mode. Default is 'locale'.",
			"routing": {
				"send": {
					"property": "query_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Reboot On URL Change",
			"name": "reboot_on_url_change",
			"type": "boolean",
			"default": true,
			"description": "When true, Active ecosystem reboots itself when url changes.",
			"routing": {
				"send": {
					"property": "reboot_on_url_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Restricted Domains",
			"name": "restricted_domains",
			"type": "string",
			"default": "",
			"description": "JSON string for a list of domains that this widget's API interactions are limited to.",
			"routing": {
				"send": {
					"property": "restricted_domains",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Sections",
			"name": "sections",
			"type": "string",
			"default": "",
			"description": "Continuous project section rules",
			"routing": {
				"send": {
					"property": "sections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Test Mode",
			"name": "test_mode",
			"type": "boolean",
			"default": true,
			"description": "Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.",
			"routing": {
				"send": {
					"property": "test_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Theme",
			"name": "theme",
			"type": "string",
			"default": "",
			"description": "\\\"light\\\", \\\"dark\\\" OR custom JSON.",
			"routing": {
				"send": {
					"property": "theme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"description": "Token that you should use when you are using this widget on your website.",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "URL Change Mode",
			"name": "url_change_mode",
			"type": "string",
			"default": "",
			"description": "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.",
			"routing": {
				"send": {
					"property": "url_change_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "URL Mode",
			"name": "url_mode",
			"type": "string",
			"default": "",
			"description": "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.",
			"routing": {
				"send": {
					"property": "url_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Use Cache",
			"name": "use_cache",
			"type": "boolean",
			"default": true,
			"description": "Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.",
			"routing": {
				"send": {
					"property": "use_cache",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Use Dummy Translations",
			"name": "use_dummy_translations",
			"type": "boolean",
			"default": true,
			"description": "When enabled, we will translate your website with dummy content, rather than actually using MT/TM.",
			"routing": {
				"send": {
					"property": "use_dummy_translations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Variables",
			"name": "variables",
			"type": "string",
			"default": "",
			"description": "Continuous project variable definitions",
			"routing": {
				"send": {
					"property": "variables",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Create Active Widget"
					]
				}
			}
		},
		{
			"displayName": "DELETE /continuous_projects/{projectId}/widgets/{widgetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Widget ID",
			"name": "widgetId",
			"required": true,
			"description": "Active widget ID belonging to this Continuous Project",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Delete Active Widget"
					]
				}
			}
		},
		{
			"displayName": "GET /continuous_projects/{projectId}/widgets/{widgetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Widget ID",
			"name": "widgetId",
			"required": true,
			"description": "Active widget ID belonging to this Continuous Project",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Get Active Widget"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/widgets/{widgetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Widget ID",
			"name": "widgetId",
			"required": true,
			"description": "Active widget ID belonging to this Continuous Project",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Allow Hash In URL",
			"name": "allow_hash_in_url",
			"type": "boolean",
			"default": true,
			"description": "When true, hash params are included in filenames. When false, params are ignored.",
			"routing": {
				"send": {
					"property": "allow_hash_in_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Allow Query In URL",
			"name": "allow_query_in_url",
			"type": "boolean",
			"default": true,
			"description": "When true, query params are included in filenames. When false, params are ignored.",
			"routing": {
				"send": {
					"property": "allow_query_in_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Auto Detect Source Language",
			"name": "auto_detect_source_language",
			"type": "boolean",
			"default": true,
			"description": "When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment.",
			"routing": {
				"send": {
					"property": "auto_detect_source_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "",
			"description": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Elements",
			"name": "elements",
			"type": "string",
			"default": "",
			"description": "Continuous project exclusive elements and rules",
			"routing": {
				"send": {
					"property": "elements",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Follow User",
			"name": "follow_user",
			"type": "boolean",
			"default": true,
			"description": "Specify whether we should follow the user around in your website and automatically translate pages.",
			"routing": {
				"send": {
					"property": "follow_user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Force Cache Refresh Interval",
			"name": "force_cache_refresh_interval",
			"type": "boolean",
			"default": true,
			"description": "Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project.",
			"routing": {
				"send": {
					"property": "force_cache_refresh_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Language Mappings",
			"name": "language_mappings",
			"type": "string",
			"default": "",
			"description": "Continuous project language mappings",
			"routing": {
				"send": {
					"property": "language_mappings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Live",
			"name": "live",
			"type": "boolean",
			"default": true,
			"description": "Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active.",
			"routing": {
				"send": {
					"property": "live",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Modify Links",
			"name": "modify_links",
			"type": "boolean",
			"default": true,
			"description": "We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL.",
			"routing": {
				"send": {
					"property": "modify_links",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Optimize Per Page",
			"name": "optimize_per_page",
			"type": "boolean",
			"default": true,
			"description": "When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page.",
			"routing": {
				"send": {
					"property": "optimize_per_page",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Pages",
			"name": "pages",
			"type": "string",
			"default": "",
			"description": "Continuous project page rules",
			"routing": {
				"send": {
					"property": "pages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Path Regex",
			"name": "path_regex",
			"type": "string",
			"default": "",
			"description": "Custom regex for path-type URL mode.",
			"routing": {
				"send": {
					"property": "path_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"type": "string",
			"default": "",
			"description": "Options are \"bottom-left\", \"bottom-right\", \"in-place\"",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Query Name",
			"name": "query_name",
			"type": "string",
			"default": "locale",
			"description": "Query parameter name to be used with query-type URL mode. Default is 'locale'.",
			"routing": {
				"send": {
					"property": "query_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Reboot On URL Change",
			"name": "reboot_on_url_change",
			"type": "boolean",
			"default": true,
			"description": "When true, Active ecosystem reboots itself when url changes.",
			"routing": {
				"send": {
					"property": "reboot_on_url_change",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Restricted Domains",
			"name": "restricted_domains",
			"type": "string",
			"default": "",
			"description": "JSON string for a list of domains that this widget's API interactions are limited to.",
			"routing": {
				"send": {
					"property": "restricted_domains",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Sections",
			"name": "sections",
			"type": "string",
			"default": "",
			"description": "Continuous project section rules",
			"routing": {
				"send": {
					"property": "sections",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Test Mode",
			"name": "test_mode",
			"type": "boolean",
			"default": true,
			"description": "Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration.",
			"routing": {
				"send": {
					"property": "test_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Theme",
			"name": "theme",
			"type": "string",
			"default": "",
			"description": "\\\"light\\\", \\\"dark\\\" OR custom JSON.",
			"routing": {
				"send": {
					"property": "theme",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"description": "Token that you should use when you are using this widget on your website.",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "URL Change Mode",
			"name": "url_change_mode",
			"type": "string",
			"default": "",
			"description": "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes.",
			"routing": {
				"send": {
					"property": "url_change_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "URL Mode",
			"name": "url_mode",
			"type": "string",
			"default": "",
			"description": "When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale.",
			"routing": {
				"send": {
					"property": "url_mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Use Cache",
			"name": "use_cache",
			"type": "boolean",
			"default": true,
			"description": "Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project.",
			"routing": {
				"send": {
					"property": "use_cache",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Use Dummy Translations",
			"name": "use_dummy_translations",
			"type": "boolean",
			"default": true,
			"description": "When enabled, we will translate your website with dummy content, rather than actually using MT/TM.",
			"routing": {
				"send": {
					"property": "use_dummy_translations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "Variables",
			"name": "variables",
			"type": "string",
			"default": "",
			"description": "Continuous project variable definitions",
			"routing": {
				"send": {
					"property": "variables",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Update Active Widget"
					]
				}
			}
		},
		{
			"displayName": "POST /continuous_projects/{projectId}/widgets/{widgetId}/reset-token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Reset Active Widget Token"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"required": true,
			"description": "Continuous Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Reset Active Widget Token"
					]
				}
			}
		},
		{
			"displayName": "Widget ID",
			"name": "widgetId",
			"required": true,
			"description": "Active widget ID belonging to this Continuous Project",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Continuous Project"
					],
					"operation": [
						"Reset Active Widget Token"
					]
				}
			}
		},
];
