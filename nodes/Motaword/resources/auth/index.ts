import type { INodeProperties } from 'n8n-workflow';

export const authDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					]
				}
			},
			"options": [
				{
					"name": "Get Access Token",
					"value": "Get Access Token",
					"action": "Retrieve an access token",
					"description": "MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Grant Type",
			"name": "grant_type",
			"type": "string",
			"default": "",
			"description": "OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.",
			"routing": {
				"send": {
					"property": "grant_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "MW Account password (to be used in password grant type)",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "Refresh Token",
			"name": "refresh_token",
			"type": "string",
			"default": "",
			"description": "Refresh token value for refresh token flow.",
			"routing": {
				"send": {
					"property": "refresh_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"description": "Authorization scope. Use 'privileged' for private endpoints.",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"type": "number",
			"default": 0,
			"description": "Value for user_id grant type flow.",
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
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "MW Account email (to be used in password grant type)",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for basicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Get Access Token"
					]
				}
			}
		},
];
