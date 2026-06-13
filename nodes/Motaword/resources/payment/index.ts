import type { INodeProperties } from 'n8n-workflow';

export const paymentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					]
				}
			},
			"options": [
				{
					"name": "Reset Corporate Payment Code",
					"value": "Reset Corporate Payment Code",
					"action": "Reset payment code",
					"description": "Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payment/reset-corporate-payment-code"
						}
					}
				},
				{
					"name": "Toggle Corporate Auto Charge",
					"value": "Toggle Corporate Auto Charge",
					"action": "Manage automatic charges on your credit card",
					"description": "Toggle (enable/disable) automatic charges on the credit card on file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payment/toggle-corporate-auto-charge"
						}
					}
				},
				{
					"name": "Get Credit Card",
					"value": "Get Credit Card",
					"action": "View saved credit card",
					"description": "View saved credit card",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/payment/{{$parameter[\"cardId\"]}}"
						}
					}
				},
				{
					"name": "Delete Credit Card",
					"value": "Delete Credit Card",
					"action": "Delete credit card",
					"description": "Delete credit card",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/payment/{{$parameter[\"cardId\"]}}/delete"
						}
					}
				},
				{
					"name": "Reset Card Payment Code",
					"value": "Reset Card Payment Code",
					"action": "Reset credit card payment code",
					"description": "Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/payment/{{$parameter[\"cardId\"]}}/reset-payment-code"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /payment/reset-corporate-payment-code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Reset Corporate Payment Code"
					]
				}
			}
		},
		{
			"displayName": "POST /payment/toggle-corporate-auto-charge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Toggle Corporate Auto Charge"
					]
				}
			}
		},
		{
			"displayName": "GET /payment/{cardId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"description": "Credit Card ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Get Credit Card"
					]
				}
			}
		},
		{
			"displayName": "DELETE /payment/{cardId}/delete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Delete Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"description": "Credit Card ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Delete Credit Card"
					]
				}
			}
		},
		{
			"displayName": "POST /payment/{cardId}/reset-payment-code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Reset Card Payment Code"
					]
				}
			}
		},
		{
			"displayName": "Card ID",
			"name": "cardId",
			"required": true,
			"description": "Credit Card ID",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment"
					],
					"operation": [
						"Reset Card Payment Code"
					]
				}
			}
		},
];
