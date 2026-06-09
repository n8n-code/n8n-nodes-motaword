import type { INodeProperties } from 'n8n-workflow';

export const machineLearningDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Machine Learning"
					]
				}
			},
			"options": [
				{
					"name": "Get Delivery Prediction",
					"value": "Get Delivery Prediction",
					"action": "Get a delivery prediction for a project",
					"description": "Get a delivery prediction for a project",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/ml/delivery-prediction"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /ml/delivery-prediction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Machine Learning"
					],
					"operation": [
						"Get Delivery Prediction"
					]
				}
			}
		},
		{
			"displayName": "Project ID",
			"name": "projectId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "projectId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Machine Learning"
					],
					"operation": [
						"Get Delivery Prediction"
					]
				}
			}
		},
];
