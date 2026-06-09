import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Delete Account",
					"value": "Delete Account",
					"action": "Delete your account",
					"description": "Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/delete-account"
						}
					}
				},
				{
					"name": "Downgrade Proofreader",
					"value": "Downgrade Proofreader",
					"action": "Downgrade Proofreader",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/downgrade-proofreader"
						}
					}
				},
				{
					"name": "Get Earnings",
					"value": "Get Earnings",
					"action": "View your vendor earnings",
					"description": "View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/earnings"
						}
					}
				},
				{
					"name": "Freeze Account",
					"value": "Freeze Account",
					"action": "Freeze account",
					"description": "Freeze your account temporarily, especially to stop receiving project notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/freeze-account"
						}
					}
				},
				{
					"name": "Log Location",
					"value": "Log Location",
					"action": "Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.",
					"description": "Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/location"
						}
					}
				},
				{
					"name": "Make Proofreader",
					"value": "Make Proofreader",
					"action": "Make Proofreader",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/make-proofreader"
						}
					}
				},
				{
					"name": "Get Me",
					"value": "Get Me",
					"action": "View your account info",
					"description": "Get your user information, including client, corporate account and vendor account information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				},
				{
					"name": "Update Me",
					"value": "Update Me",
					"action": "Update your account info",
					"description": "Update your account info",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me"
						}
					}
				},
				{
					"name": "Subscribe Notification",
					"value": "Subscribe Notification",
					"action": "Subscribe to push notifications",
					"description": "Subscribe to push notifications to receive project and platform notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications/subscribe"
						}
					}
				},
				{
					"name": "Unsubscribe Notification",
					"value": "Unsubscribe Notification",
					"action": "Unsubscribe Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/notifications/unsubscribe"
						}
					}
				},
				{
					"name": "Update Password",
					"value": "Update Password",
					"action": "Update your account password",
					"description": "Password should contain at least one uppercase, lowercase character and one number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/password"
						}
					}
				},
				{
					"name": "Get Payment Info",
					"value": "Get Payment Info",
					"action": "View your payment and billing info",
					"description": "Returns billing and saved credit card information for user, and their corporate account if present & allowed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/payment"
						}
					}
				},
				{
					"name": "Update Payment Info",
					"value": "Update Payment Info",
					"action": "Update payment info",
					"description": "Update your billing and saved credit card information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payment"
						}
					}
				},
				{
					"name": "Get Permissions",
					"value": "Get Permissions",
					"action": "View your permissions",
					"description": "View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/permissions"
						}
					}
				},
				{
					"name": "Upload Profile Picture",
					"value": "Upload Profile Picture",
					"action": "Upload profile picture",
					"description": "Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile-picture"
						}
					}
				},
				{
					"name": "Send Email Confirmation",
					"value": "Send Email Confirmation",
					"action": "Sends email confirmation email for current user",
					"description": "Sends email confirmation email for current user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/resend-email-confirmation"
						}
					}
				},
				{
					"name": "Get Responsivity",
					"value": "Get Responsivity",
					"action": "View your vendor responsiveness",
					"description": "View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/responsivity"
						}
					}
				},
				{
					"name": "Get Stats",
					"value": "Get Stats",
					"action": "View your account statistics",
					"description": "View your client and vendor statistics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/stats"
						}
					}
				},
				{
					"name": "Unfreeze Account",
					"value": "Unfreeze Account",
					"action": "Defreeze your account",
					"description": "Reactive your account to start receiving notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/unfreeze-account"
						}
					}
				},
				{
					"name": "Get User Groups",
					"value": "Get User Groups",
					"action": "View your user groups",
					"description": "View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user-groups"
						}
					}
				},
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "Get a list of platform users",
					"description": "Get a list of platform users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Create User",
					"value": "Create User",
					"action": "Create a new user",
					"description": "Create a new platform user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Get Filtered Vendors",
					"value": "Get Filtered Vendors",
					"action": "Filter vendors based on provided parameters",
					"description": "Get a list of vendors available for the criteria given",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/filter"
						}
					}
				},
				{
					"name": "Send Password Reminder",
					"value": "Send Password Reminder",
					"action": "Sends password reset email to the user's registered email address",
					"description": "Sends password reset email to the user's registered email address",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/send-password-reminder"
						}
					}
				},
				{
					"name": "Get All Vendor Tags",
					"value": "Get All Vendor Tags",
					"action": "Returns all vendor tags for vendors filter",
					"description": "Returns all vendor tags for vendors filter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/tags"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get user information, including client or vendor specific info.",
					"description": "Get user information, including client or vendor specific info.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update User",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}"
						}
					}
				},
				{
					"name": "Approve Vendor Application",
					"value": "Approve Vendor Application",
					"action": "Approve Vendor Application",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/approve"
						}
					}
				},
				{
					"name": "Delete User Account",
					"value": "Delete User Account",
					"action": "Delete requester account",
					"description": "Delete requester account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"userId\"]}}/delete-account"
						}
					}
				},
				{
					"name": "Downgrade User Proofreader",
					"value": "Downgrade User Proofreader",
					"action": "Downgrade User Proofreader",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/downgrade-proofreader"
						}
					}
				},
				{
					"name": "Get User Earnings",
					"value": "Get User Earnings",
					"action": "Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.",
					"description": "Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/earnings"
						}
					}
				},
				{
					"name": "Freeze User Account",
					"value": "Freeze User Account",
					"action": "Freeze requester account for project notifications",
					"description": "Freeze requester account for project notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/freeze-account"
						}
					}
				},
				{
					"name": "Make User Proofreader",
					"value": "Make User Proofreader",
					"action": "Make User Proofreader",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/make-proofreader"
						}
					}
				},
				{
					"name": "Subscribe User Notification",
					"value": "Subscribe User Notification",
					"action": "Subscribe User Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/notifications/subscribe"
						}
					}
				},
				{
					"name": "Unsubscribe User Notification",
					"value": "Unsubscribe User Notification",
					"action": "Unsubscribe User Notification",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/notifications/unsubscribe"
						}
					}
				},
				{
					"name": "Get User Payment Info",
					"value": "Get User Payment Info",
					"action": "View user's payment and billing info",
					"description": "Returns billing and saved credit card information for user, and their corporate account if present & allowed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/payment"
						}
					}
				},
				{
					"name": "Update User Payment Info",
					"value": "Update User Payment Info",
					"action": "Update user payment info",
					"description": "Update user's billing and saved credit card information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/payment"
						}
					}
				},
				{
					"name": "Get User Permissions",
					"value": "Get User Permissions",
					"action": "Returns a list of permissions that this user is authorized for.",
					"description": "Returns a list of permissions that this user is authorized for.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/permissions"
						}
					}
				},
				{
					"name": "Upload User Profile Picture",
					"value": "Upload User Profile Picture",
					"action": "Upload User Profile Picture",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/profile-picture"
						}
					}
				},
				{
					"name": "Reject Vendor Application",
					"value": "Reject Vendor Application",
					"action": "Reject Vendor Application",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/reject"
						}
					}
				},
				{
					"name": "Send User Email Confirmation",
					"value": "Send User Email Confirmation",
					"action": "Sends email confirmation email for a user",
					"description": "Sends email confirmation email for a user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/resend-email-confirmation"
						}
					}
				},
				{
					"name": "Get User Responsivity",
					"value": "Get User Responsivity",
					"action": "Returns a user's vendor responsivity stats",
					"description": "Returns a user's vendor responsivity stats",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/responsivity"
						}
					}
				},
				{
					"name": "Get User Stats",
					"value": "Get User Stats",
					"action": "Returns a user's client and vendor statistics. This used to be called \"summary\" (\\@deprecated).",
					"description": "Returns a user's client and vendor statistics. This used to be called \"summary\" (\\@deprecated).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/stats"
						}
					}
				},
				{
					"name": "Get User Popular Pairs",
					"value": "Get User Popular Pairs",
					"action": "Returns the language pairs that the user has ordered most.",
					"description": "Returns the language pairs that the user has ordered most.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/stats/popular-pairs"
						}
					}
				},
				{
					"name": "Get User Project Stats",
					"value": "Get User Project Stats",
					"action": "Returns a user's project statistics.",
					"description": "Returns a user's project statistics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/stats/projects"
						}
					}
				},
				{
					"name": "Suspend User",
					"value": "Suspend User",
					"action": "Suspend User",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/suspend"
						}
					}
				},
				{
					"name": "Unfreeze User Account",
					"value": "Unfreeze User Account",
					"action": "Unfreeze requester account for project notifications",
					"description": "Unfreeze requester account for project notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/unfreeze-account"
						}
					}
				},
				{
					"name": "Get This User Groups",
					"value": "Get This User Groups",
					"action": "Returns a list of user groups that this user belongs to.",
					"description": "Returns a list of user groups that this user belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"userId\"]}}/user-groups"
						}
					}
				},
				{
					"name": "Update User Group",
					"value": "Update User Group",
					"action": "Update User Group",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"userId\"]}}/user-groups"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /delete-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete Account"
					]
				}
			}
		},
		{
			"displayName": "POST /downgrade-proofreader",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Downgrade Proofreader"
					]
				}
			}
		},
		{
			"displayName": "GET /earnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Earnings"
					]
				}
			}
		},
		{
			"displayName": "POST /freeze-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Freeze Account"
					]
				}
			}
		},
		{
			"displayName": "POST /location",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Log Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lat",
			"name": "lat",
			"type": "number",
			"default": 0,
			"description": "Latitude of location",
			"routing": {
				"send": {
					"property": "lat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Log Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lon",
			"name": "lon",
			"type": "number",
			"default": 0,
			"description": "Longitude of location",
			"routing": {
				"send": {
					"property": "lon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Log Location"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Log Location"
					]
				}
			}
		},
		{
			"displayName": "POST /make-proofreader",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Make Proofreader"
					]
				}
			}
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Me"
					]
				}
			}
		},
		{
			"displayName": "POST /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update Me"
					]
				}
			}
		},
		{
			"displayName": "POST /me<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update Me"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "options",
			"default": "iOS",
			"options": [
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Android",
					"value": "Android"
				},
				{
					"name": "Chrome",
					"value": "Chrome"
				},
				{
					"name": "Firefox",
					"value": "Firefox"
				},
				{
					"name": "Safari",
					"value": "Safari"
				},
				{
					"name": "Edge",
					"value": "Edge"
				},
				{
					"name": "Amazon",
					"value": "Amazon"
				},
				{
					"name": "Windows Phone",
					"value": "WindowsPhone"
				},
				{
					"name": "Windows",
					"value": "Windows"
				},
				{
					"name": "Mac OS",
					"value": "MacOS"
				}
			],
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"description": "OneSignal calls this \"player ID\".",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "OneSignal",
			"options": [
				{
					"name": "One Signal",
					"value": "OneSignal"
				}
			],
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
						"User"
					],
					"operation": [
						"Subscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /notifications/unsubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "options",
			"default": "iOS",
			"options": [
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Android",
					"value": "Android"
				},
				{
					"name": "Chrome",
					"value": "Chrome"
				},
				{
					"name": "Firefox",
					"value": "Firefox"
				},
				{
					"name": "Safari",
					"value": "Safari"
				},
				{
					"name": "Edge",
					"value": "Edge"
				},
				{
					"name": "Amazon",
					"value": "Amazon"
				},
				{
					"name": "Windows Phone",
					"value": "WindowsPhone"
				},
				{
					"name": "Windows",
					"value": "Windows"
				},
				{
					"name": "Mac OS",
					"value": "MacOS"
				}
			],
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"description": "OneSignal calls this \"player ID\".",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "OneSignal",
			"options": [
				{
					"name": "One Signal",
					"value": "OneSignal"
				}
			],
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
						"User"
					],
					"operation": [
						"Unsubscribe Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update Password"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"description": "New Password",
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
						"User"
					],
					"operation": [
						"Update Password"
					]
				}
			}
		},
		{
			"displayName": "GET /payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Payment Info"
					]
				}
			}
		},
		{
			"displayName": "POST /payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update Payment Info"
					]
				}
			}
		},
		{
			"displayName": "POST /payment<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update Payment Info"
					]
				}
			}
		},
		{
			"displayName": "GET /permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /profile-picture",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Upload Profile Picture"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Profile Picture",
			"name": "profile_picture",
			"type": "string",
			"default": "",
			"description": "Profile picture file contents. Accepted extensions are png, jpg.",
			"routing": {
				"send": {
					"property": "profile_picture",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Upload Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "POST /resend-email-confirmation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Send Email Confirmation"
					]
				}
			}
		},
		{
			"displayName": "GET /responsivity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Responsivity"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"description": "Time period to calculate your responsiveness",
			"default": "monthly",
			"type": "options",
			"options": [
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "period",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Responsivity"
					]
				}
			}
		},
		{
			"displayName": "GET /stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /unfreeze-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unfreeze Account"
					]
				}
			}
		},
		{
			"displayName": "GET /user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "User Type",
			"name": "user_type",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "Vendor",
					"value": "vendor"
				},
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "user_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"default": "",
			"type": "string",
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
						"User"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Notify",
			"name": "notify",
			"description": "Send a welcome email to the user",
			"default": 1,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "notify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Billing",
			"name": "billing",
			"type": "string",
			"default": {
				"name": ""
			},
			"routing": {
				"send": {
					"property": "billing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Birthday",
			"name": "birthday",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "birthday",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Can Work Manual Files",
			"name": "can_work_manual_files",
			"type": "boolean",
			"default": true,
			"description": "\\@deprecated. use `vendor` key",
			"routing": {
				"send": {
					"property": "can_work_manual_files",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use mailing or billing key.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Client",
			"name": "client",
			"type": "json",
			"default": "{\n  \"corporate\": {}\n}",
			"routing": {
				"send": {
					"property": "client",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Corporate ID",
			"name": "corporate_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "corporate_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use mailing or billing key.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "number",
			"default": 0,
			"description": "Unix epoch time",
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Do Not Contact",
			"name": "do_not_contact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "do_not_contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Has Pwd",
			"name": "has_pwd",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "has_pwd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Client",
			"name": "is_client",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_client",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Developer",
			"name": "is_developer",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_developer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Proofreader",
			"name": "is_proofreader",
			"type": "boolean",
			"default": true,
			"description": "\\@deprecated. use `vendor` key",
			"routing": {
				"send": {
					"property": "is_proofreader",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Prospect",
			"name": "is_prospect",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_prospect",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Sales Person",
			"name": "is_sales_person",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_sales_person",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Is Vendor",
			"name": "is_vendor",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_vendor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Language Pairs",
			"name": "language_pairs",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "\\@deprecated. use `vendor` key",
			"routing": {
				"send": {
					"property": "language_pairs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Last Seen Online At",
			"name": "last_seen_online_at",
			"type": "number",
			"default": 0,
			"description": "Unix epoch time",
			"routing": {
				"send": {
					"property": "last_seen_online_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Links",
			"name": "links",
			"type": "string",
			"default": {
				"login_as": {},
				"projects": {},
				"responsivity": {},
				"stats": {}
			},
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"type": "string",
			"default": "",
			"description": "User Locale",
			"routing": {
				"send": {
					"property": "locale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Mailing",
			"name": "mailing",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mailing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Native Language",
			"name": "native_language",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. Native language of user",
			"routing": {
				"send": {
					"property": "native_language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Nps",
			"name": "nps",
			"type": "number",
			"default": 0,
			"description": "\\@deprecated. use /stats endpoint for the current nps value.",
			"routing": {
				"send": {
					"property": "nps",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phone_number",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Profile Picture Path",
			"name": "profile_picture_path",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "profile_picture_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Social Media",
			"name": "social_media",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "social_media",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use mailing or billing key.",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
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
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use mailing or billing key.",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Timezone",
			"name": "timezone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Tms User Name",
			"name": "tms_user_name",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use `vendor` key",
			"routing": {
				"send": {
					"property": "tms_user_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "User Groups",
			"name": "user_groups",
			"type": "json",
			"default": "[\n  {\n    \"permissions\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "user_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Vendor",
			"name": "vendor",
			"type": "json",
			"default": "{\n  \"language_pairs\": [\n    {}\n  ],\n  \"profile_survey\": {},\n  \"tags\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "vendor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "Zip Code",
			"name": "zip_code",
			"type": "string",
			"default": "",
			"description": "\\@deprecated. use mailing or billing key. new key name is \"zip\".",
			"routing": {
				"send": {
					"property": "zip_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Create User"
					]
				}
			}
		},
		{
			"displayName": "POST /users/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page number",
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Per Page",
			"name": "per_page",
			"description": "The number of items per page",
			"default": 0,
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"description": "The field to order the results by",
			"default": "",
			"type": "string",
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"description": "The order to sort the results by (ascending or descending)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Communication Channel",
			"name": "communication_channel",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "communication_channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Corporate Ids For Auth",
			"name": "corporate_ids_for_auth",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "corporate_ids_for_auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Corporates",
			"name": "corporates",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "corporates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "",
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Current Services",
			"name": "current_services",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "current_services",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Daily Proofreading Capacity",
			"name": "daily_proofreading_capacity",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "daily_proofreading_capacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Daily Translation Capacity",
			"name": "daily_translation_capacity",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "daily_translation_capacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Destination Languages",
			"name": "destination_languages",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "destination_languages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Dtp Software",
			"name": "dtp_software",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "dtp_software",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Email Address",
			"name": "email_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Experience",
			"name": "experience",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "experience",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Is Certified Translator",
			"name": "is_certified_translator",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_certified_translator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Is Sworn Translator",
			"name": "is_sworn_translator",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "is_sworn_translator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Language Pairs",
			"name": "language_pairs",
			"type": "json",
			"default": "[\n  [\n    null\n  ]\n]",
			"routing": {
				"send": {
					"property": "language_pairs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Last Online",
			"name": "last_online",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_online",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Last Worked",
			"name": "last_worked",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_worked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Memoq",
			"name": "memoq",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memoq",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Memsource",
			"name": "memsource",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memsource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Min Tqs",
			"name": "min_tqs",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "min_tqs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Omegat",
			"name": "omegat",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "omegat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Project Count",
			"name": "project_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "project_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Proofreader Experience",
			"name": "proofreader_experience",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "proofreader_experience",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Provides Creative Writing Service",
			"name": "provides_creative_writing_service",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "provides_creative_writing_service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Provides Postedit Service",
			"name": "provides_postedit_service",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "provides_postedit_service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Quote File Subjects",
			"name": "quote_file_subjects",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "quote_file_subjects",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Sdl Trados",
			"name": "sdl_trados",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "sdl_trados",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Skype ID",
			"name": "skype_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "skype_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Smartcat",
			"name": "smartcat",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "smartcat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Smartling",
			"name": "smartling",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "smartling",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Specialization",
			"name": "specialization",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "specialization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Subtitle Edit",
			"name": "subtitle_edit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "subtitle_edit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Subtitle Workshop",
			"name": "subtitle_workshop",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "subtitle_workshop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Translator Association",
			"name": "translator_association",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "translator_association",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Transsuite 2000",
			"name": "transsuite_2000",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "transsuite_2000",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "User Working Timezone",
			"name": "user_working_timezone",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "user_working_timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Vendor Profile Lsp",
			"name": "vendor_profile_lsp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "vendor_profile_lsp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Vendor Tags",
			"name": "vendor_tags",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "vendor_tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Vendor Type",
			"name": "vendor_type",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "vendor_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Vendor Working Timezone",
			"name": "vendor_working_timezone",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "vendor_working_timezone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
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
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Wordbee",
			"name": "wordbee",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wordbee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Wordfast",
			"name": "wordfast",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wordfast",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Work Type",
			"name": "work_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "work_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Work With",
			"name": "work_with",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "work_with",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Working As",
			"name": "working_as",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "working_as",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Xbench",
			"name": "xbench",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "xbench",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "Xtm",
			"name": "xtm",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "xtm",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Filtered Vendors"
					]
				}
			}
		},
		{
			"displayName": "POST /users/send-password-reminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Send Password Reminder"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Send Password Reminder"
					]
				}
			}
		},
		{
			"displayName": "GET /users/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get All Vendor Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
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
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User"
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
						"User"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/approve",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Approve Vendor Application"
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
						"User"
					],
					"operation": [
						"Approve Vendor Application"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{userId}/delete-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete User Account"
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
						"User"
					],
					"operation": [
						"Delete User Account"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/downgrade-proofreader",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Downgrade User Proofreader"
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
						"User"
					],
					"operation": [
						"Downgrade User Proofreader"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/earnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Earnings"
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
						"User"
					],
					"operation": [
						"Get User Earnings"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/freeze-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Freeze User Account"
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
						"User"
					],
					"operation": [
						"Freeze User Account"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/make-proofreader",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Make User Proofreader"
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
						"User"
					],
					"operation": [
						"Make User Proofreader"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/notifications/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe User Notification"
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
						"User"
					],
					"operation": [
						"Subscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "options",
			"default": "iOS",
			"options": [
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Android",
					"value": "Android"
				},
				{
					"name": "Chrome",
					"value": "Chrome"
				},
				{
					"name": "Firefox",
					"value": "Firefox"
				},
				{
					"name": "Safari",
					"value": "Safari"
				},
				{
					"name": "Edge",
					"value": "Edge"
				},
				{
					"name": "Amazon",
					"value": "Amazon"
				},
				{
					"name": "Windows Phone",
					"value": "WindowsPhone"
				},
				{
					"name": "Windows",
					"value": "Windows"
				},
				{
					"name": "Mac OS",
					"value": "MacOS"
				}
			],
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"description": "OneSignal calls this \"player ID\".",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Subscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "OneSignal",
			"options": [
				{
					"name": "One Signal",
					"value": "OneSignal"
				}
			],
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
						"User"
					],
					"operation": [
						"Subscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/notifications/unsubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe User Notification"
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
						"User"
					],
					"operation": [
						"Unsubscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "options",
			"default": "iOS",
			"options": [
				{
					"name": "I OS",
					"value": "iOS"
				},
				{
					"name": "Android",
					"value": "Android"
				},
				{
					"name": "Chrome",
					"value": "Chrome"
				},
				{
					"name": "Firefox",
					"value": "Firefox"
				},
				{
					"name": "Safari",
					"value": "Safari"
				},
				{
					"name": "Edge",
					"value": "Edge"
				},
				{
					"name": "Amazon",
					"value": "Amazon"
				},
				{
					"name": "Windows Phone",
					"value": "WindowsPhone"
				},
				{
					"name": "Windows",
					"value": "Windows"
				},
				{
					"name": "Mac OS",
					"value": "MacOS"
				}
			],
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"description": "OneSignal calls this \"player ID\".",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unsubscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "OneSignal",
			"options": [
				{
					"name": "One Signal",
					"value": "OneSignal"
				}
			],
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
						"User"
					],
					"operation": [
						"Unsubscribe User Notification"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Payment Info"
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
						"User"
					],
					"operation": [
						"Get User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/payment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
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
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "Billing",
			"name": "billing",
			"type": "string",
			"default": {
				"name": ""
			},
			"routing": {
				"send": {
					"property": "billing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "Card",
			"name": "card",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "Cards",
			"name": "cards",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "cards",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "Corporate",
			"name": "corporate",
			"type": "json",
			"default": "{\n  \"billing\": {\n    \"name\": \"\"\n  },\n  \"card\": {}\n}",
			"routing": {
				"send": {
					"property": "corporate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "Shared Card",
			"name": "shared_card",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "shared_card",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Payment Info"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Permissions"
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
						"User"
					],
					"operation": [
						"Get User Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/profile-picture",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Upload User Profile Picture"
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
						"User"
					],
					"operation": [
						"Upload User Profile Picture"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Profile Picture",
			"name": "profile_picture",
			"type": "string",
			"default": "",
			"description": "Profile picture file contents. Accepted extensions are png, jpg.",
			"routing": {
				"send": {
					"property": "profile_picture",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Upload User Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Reject Vendor Application"
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
						"User"
					],
					"operation": [
						"Reject Vendor Application"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/resend-email-confirmation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Send User Email Confirmation"
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
						"User"
					],
					"operation": [
						"Send User Email Confirmation"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/responsivity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Responsivity"
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
						"User"
					],
					"operation": [
						"Get User Responsivity"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"description": "Period for calcualtion.",
			"default": "monthly",
			"type": "options",
			"options": [
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Weekly",
					"value": "weekly"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "period",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Responsivity"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Stats"
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
						"User"
					],
					"operation": [
						"Get User Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/stats/popular-pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Popular Pairs"
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
						"User"
					],
					"operation": [
						"Get User Popular Pairs"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/stats/projects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User Project Stats"
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
						"User"
					],
					"operation": [
						"Get User Project Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/suspend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Suspend User"
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
						"User"
					],
					"operation": [
						"Suspend User"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "Suspension reason for vendor",
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
						"User"
					],
					"operation": [
						"Suspend User"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/unfreeze-account",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Unfreeze User Account"
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
						"User"
					],
					"operation": [
						"Unfreeze User Account"
					]
				}
			}
		},
		{
			"displayName": "GET /{userId}/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get This User Groups"
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
						"User"
					],
					"operation": [
						"Get This User Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /{userId}/user-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
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
						"User"
					],
					"operation": [
						"Update User Group"
					]
				}
			}
		},
];
