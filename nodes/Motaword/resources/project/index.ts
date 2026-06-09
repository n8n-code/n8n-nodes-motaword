import type { INodeProperties } from 'n8n-workflow';

export const projectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					]
				}
			},
			"options": [
				{
					"name": "Get Projects",
					"value": "Get Projects",
					"action": "View your translation projects",
					"description": "View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects"
						}
					}
				},
				{
					"name": "Create Project",
					"value": "Create Project",
					"action": "Create a new project",
					"description": "Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects"
						}
					}
				},
				{
					"name": "Get Quote Id From Internal Id",
					"value": "Get Quote Id From Internal Id",
					"action": "Get Quote Id",
					"description": "Get Quote Id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/from-internal-id/{{$parameter[\"projectId\"]}}"
						}
					}
				},
				{
					"name": "Get Vendor Projects",
					"value": "Get Vendor Projects",
					"action": "List projects as a vendor",
					"description": "Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/vendor"
						}
					}
				},
				{
					"name": "Delete Project",
					"value": "Delete Project",
					"action": "Delete your translation project",
					"description": "If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Project",
					"value": "Get Project",
					"action": "View a translation project",
					"description": "View the details of a translation project in your account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Project",
					"value": "Update Project",
					"action": "Update project info and settings",
					"description": "Update project info and settings",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/projects/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Assign CM",
					"value": "Assign CM",
					"action": "Assign a CM to the project",
					"description": "Assign a CM to the project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/assign-cm"
						}
					}
				},
				{
					"name": "Trigger Callback",
					"value": "Trigger Callback",
					"action": "Trigger a call to your callback URL related to this project.",
					"description": "Trigger a call to your callback URL related to this project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/callback/{{$parameter[\"actionType\"]}}"
						}
					}
				},
				{
					"name": "Cancel Project",
					"value": "Cancel Project",
					"action": "Cancel your translation project",
					"description": "If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/cancel"
						}
					}
				},
				{
					"name": "Deliver Project",
					"value": "Deliver Project",
					"action": "Deliver project",
					"description": "Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/deliver"
						}
					}
				},
				{
					"name": "Download",
					"value": "Download",
					"action": "Download your translated project",
					"description": "Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/download"
						}
					}
				},
				{
					"name": "Download Language",
					"value": "Download Language",
					"action": "Download your translated project language",
					"description": "Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/download/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "Send Quote Email",
					"value": "Send Quote Email",
					"action": "Send a quote email",
					"description": "Send a quote email",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/email-quote"
						}
					}
				},
				{
					"name": "Get Invoice",
					"value": "Get Invoice",
					"action": "View project invoice",
					"description": "View your invoice details for your translation project.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/invoice"
						}
					}
				},
				{
					"name": "Download Html Invoice",
					"value": "Download Html Invoice",
					"action": "Download project invoice (HTML)",
					"description": "Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/invoice.html"
						}
					}
				},
				{
					"name": "Download Pdf Invoice",
					"value": "Download Pdf Invoice",
					"action": "Download project invoice (PDF)",
					"description": "Download your project invoice as PDF. Your invoice may be in \"unpaid\" status, in which case youn can see the payment instructions in the PDF file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/invoice.pdf"
						}
					}
				},
				{
					"name": "Launch Project",
					"value": "Launch Project",
					"action": "Launch your translation project",
					"description": "Launch your translation project so MotaWord can actually start working on your translation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/launch"
						}
					}
				},
				{
					"name": "Package",
					"value": "Package",
					"action": "Package your translated project",
					"description": "Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/package"
						}
					}
				},
				{
					"name": "Track Package",
					"value": "Track Package",
					"action": "Track translation packaging status",
					"description": "Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/package/check"
						}
					}
				},
				{
					"name": "Package Language",
					"value": "Package Language",
					"action": "Package your translated project language",
					"description": "Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/package/{{$parameter[\"language\"]}}"
						}
					}
				},
				{
					"name": "Get Progress",
					"value": "Get Progress",
					"action": "View progress of a project",
					"description": "Monitor the translation progress of an already launched project in real-time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"id\"]}}/progress"
						}
					}
				},
				{
					"name": "Recreate Project",
					"value": "Recreate Project",
					"action": "Recreate your translation project from scratch. This is a risky action, you will lose current translations.",
					"description": "Recreate your translation project from scratch. This is a risky action, you will lose current translations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/recreate"
						}
					}
				},
				{
					"name": "Submit Project Reports",
					"value": "Submit Project Reports",
					"action": "Submit feedback report for a project",
					"description": "Submit feedback report for a project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/projects/{{$parameter[\"id\"]}}/reports"
						}
					}
				},
				{
					"name": "Get Project Vendors",
					"value": "Get Project Vendors",
					"action": "Get a list of vendors.",
					"description": "Get a list of vendors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/projects/{{$parameter[\"projectId\"]}}/vendors"
						}
					}
				},
				{
					"name": "Get Vendor Projects By User Id",
					"value": "Get Vendor Projects By User Id",
					"action": "Get a list of user/vendor projects",
					"description": "Get a list of user/vendor projects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/projects/vendor"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
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
						"Project"
					],
					"operation": [
						"Get Projects"
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
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status%5B%5D",
			"description": "Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "status[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "With Pending",
			"name": "with_pending",
			"description": "deprecated. use `status[]` param.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "with_pending",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "With Started",
			"name": "with_started",
			"description": "deprecated. use `status[]` param.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "with_started",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "With Completed",
			"name": "with_completed",
			"description": "deprecated. use `status[]` param.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "with_completed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"default": "id",
			"type": "options",
			"options": [
				{
					"name": "Id",
					"value": "id"
				},
				{
					"name": "Status",
					"value": "status"
				},
				{
					"name": "Delivery",
					"value": "delivery"
				},
				{
					"name": "Price",
					"value": "price"
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
						"Project"
					],
					"operation": [
						"Get Projects"
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
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "With",
			"name": "with%5B%5D",
			"description": "Include detailed information. Possible values 'client', 'vendor'",
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
						"Project"
					],
					"operation": [
						"Get Projects"
					]
				}
			}
		},
		{
			"displayName": "POST /projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Callback Url",
			"name": "callback_url",
			"type": "string",
			"default": "",
			"description": "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
			"routing": {
				"send": {
					"property": "callback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Coupon Code",
			"name": "coupon_code",
			"type": "string",
			"default": "",
			"description": "Coupon code to redeem",
			"routing": {
				"send": {
					"property": "coupon_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Custom",
			"name": "custom",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value.",
			"routing": {
				"send": {
					"property": "custom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Documents",
			"name": "documents[]",
			"type": "string",
			"default": "",
			"description": "Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls.",
			"routing": {
				"send": {
					"property": "documents[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Glossaries",
			"name": "glossaries[]",
			"type": "string",
			"default": "",
			"description": "Optional. Only one glossary is supported at the moment.",
			"routing": {
				"send": {
					"property": "glossaries[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
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
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Styleguides",
			"name": "styleguides[]",
			"type": "string",
			"default": "",
			"description": "Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls.",
			"routing": {
				"send": {
					"property": "styleguides[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "Target Languages",
			"name": "target_languages[]",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "target_languages[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Create Project"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/from-internal-id/{projectId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Quote Id From Internal Id"
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
						"Project"
					],
					"operation": [
						"Get Quote Id From Internal Id"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/vendor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects"
					]
				}
			}
		},
		{
			"displayName": "Joined",
			"name": "joined",
			"description": "Return only projects that this user has already joined",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "joined",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects"
					]
				}
			}
		},
		{
			"displayName": "Completed",
			"name": "completed",
			"description": "Return only projects that have been completed. When `true`, this makes `joined` true as well.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "completed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects"
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
						"Project"
					],
					"operation": [
						"Get Vendor Projects"
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
						"Project"
					],
					"operation": [
						"Get Vendor Projects"
					]
				}
			}
		},
		{
			"displayName": "DELETE /projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Delete Project"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project"
					]
				}
			}
		},
		{
			"displayName": "With",
			"name": "with%5B%5D",
			"description": "Include detailed information. Possible values 'client', 'vendor', 'score'",
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
						"Project"
					],
					"operation": [
						"Get Project"
					]
				}
			}
		},
		{
			"displayName": "PUT /projects/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Callback Url",
			"name": "callback_url",
			"type": "string",
			"default": "",
			"description": "Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.",
			"routing": {
				"send": {
					"property": "callback_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Coupon Code",
			"name": "coupon_code",
			"type": "string",
			"default": "",
			"description": "Coupon code to redeem",
			"routing": {
				"send": {
					"property": "coupon_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Custom",
			"name": "custom",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.",
			"routing": {
				"send": {
					"property": "custom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
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
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "Target Languages",
			"name": "target_languages[]",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "target_languages[]",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Update Project"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/assign-cm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Assign CM"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Assign CM"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Assign CM"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/callback/{actionType}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Trigger Callback"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Trigger Callback"
					]
				}
			}
		},
		{
			"displayName": "Action Type",
			"name": "actionType",
			"required": true,
			"description": "Callback type",
			"default": "translated",
			"type": "options",
			"options": [
				{
					"name": "Translated",
					"value": "translated"
				},
				{
					"name": "Proofread",
					"value": "proofread"
				},
				{
					"name": "Completed",
					"value": "completed"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Trigger Callback"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Cancel Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Cancel Project"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "Cancellation reason",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Cancel Project"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/deliver",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Deliver Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Deliver Project"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/download/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Language"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Language"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"required": true,
			"description": "Language code. You can download the translation of only a specific language.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Language"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/email-quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Send Quote Email"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Send Quote Email"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/invoice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Invoice"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Invoice"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/invoice.html",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Html Invoice"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Html Invoice"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/invoice.pdf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Pdf Invoice"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Download Pdf Invoice"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/launch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Bin",
			"name": "bin",
			"type": "string",
			"default": "",
			"description": "Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided.",
			"routing": {
				"send": {
					"property": "bin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Budget Code",
			"name": "budget_code",
			"type": "string",
			"default": "",
			"description": "Optional with corporate accounts. Not available for others.",
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
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Card Id",
			"name": "card_id",
			"type": "number",
			"default": 0,
			"description": "Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.",
			"routing": {
				"send": {
					"property": "card_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Payment Code",
			"name": "payment_code",
			"type": "string",
			"default": "",
			"description": "Optional. `corporate` payment method requires this.s",
			"routing": {
				"send": {
					"property": "payment_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Payment Method",
			"name": "payment_method",
			"type": "options",
			"default": "corporate",
			"description": "Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card.",
			"options": [
				{
					"name": "Corporate",
					"value": "corporate"
				},
				{
					"name": "Client",
					"value": "client"
				},
				{
					"name": "App",
					"value": "app"
				},
				{
					"name": "Credit",
					"value": "credit"
				},
				{
					"name": "Corporate Card",
					"value": "corporate_card"
				}
			],
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
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "Stripe Token",
			"name": "stripe_token",
			"type": "string",
			"default": "",
			"description": "This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card.",
			"routing": {
				"send": {
					"property": "stripe_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Launch Project"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/package",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Package"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Package"
					]
				}
			}
		},
		{
			"displayName": "Async",
			"name": "async",
			"description": "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.",
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
						"Project"
					],
					"operation": [
						"Package"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/package/check",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Track Package"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Track Package"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"description": "This is the package tracking key provided in the response of a /package call.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Track Package"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/package/{language}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Package Language"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Package Language"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"required": true,
			"description": "Language code. You can package the translation of only a specific language.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Package Language"
					]
				}
			}
		},
		{
			"displayName": "Async",
			"name": "async",
			"description": "If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.",
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
						"Project"
					],
					"operation": [
						"Package Language"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{id}/progress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Progress"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Progress"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Progress"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/recreate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Recreate Project"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Recreate Project"
					]
				}
			}
		},
		{
			"displayName": "POST /projects/{id}/reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Submit Project Reports"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Project ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Submit Project Reports"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"type": "string",
			"default": "",
			"description": "Activity Type",
			"routing": {
				"send": {
					"property": "activity_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Submit Project Reports"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Report Message",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Submit Project Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /projects/{projectId}/vendors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Project Vendors"
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
						"Project"
					],
					"operation": [
						"Get Project Vendors"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/projects/vendor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"required": true,
			"description": "User ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
					]
				}
			}
		},
		{
			"displayName": "Joined",
			"name": "joined",
			"description": "Return only projects that this user has already joined",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "joined",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
					]
				}
			}
		},
		{
			"displayName": "Completed",
			"name": "completed",
			"description": "Return only projects that have been completed. When `true`, this makes `joined` true as well.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "completed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
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
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
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
						"Project"
					],
					"operation": [
						"Get Vendor Projects By User Id"
					]
				}
			}
		},
];
