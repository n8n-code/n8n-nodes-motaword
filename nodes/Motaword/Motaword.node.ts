import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { staticDescription } from './resources/static';
import { asyncDescription } from './resources/async';
import { blogDescription } from './resources/blog';
import { commissionDescription } from './resources/commission';
import { continuousProjectDescription } from './resources/continuous-project';
import { stringsDescription } from './resources/strings';
import { corporateDescription } from './resources/corporate';
import { userDescription } from './resources/user';
import { documentDescription } from './resources/document';
import { glossaryDescription } from './resources/glossary';
import { integrationsDescription } from './resources/integrations';
import { invitationDescription } from './resources/invitation';
import { machineLearningDescription } from './resources/machine-learning';
import { pamDescription } from './resources/pam';
import { paymentDescription } from './resources/payment';
import { projectDescription } from './resources/project';
import { activityDescription } from './resources/activity';
import { projectWebhooksDescription } from './resources/project-webhooks';
import { projectDocumentDescription } from './resources/project-document';
import { styleGuideDescription } from './resources/style-guide';
import { reportDescription } from './resources/report';
import { searchDescription } from './resources/search';
import { statsDescription } from './resources/stats';
import { surveysDescription } from './resources/surveys';
import { authDescription } from './resources/auth';
import { vendorDescription } from './resources/vendor';
import { defaultDescription } from './resources/default';

export class Motaword implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Motaword',
		name: 'N8nDevMotaword',
		icon: { light: 'file:./motaword.png', dark: 'file:./motaword.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Use MotaWord API to post and track your translation projects',
		defaults: { name: 'Motaword' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevMotawordApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Static",
					"value": "Static",
					"description": ""
				},
				{
					"name": "Async",
					"value": "Async",
					"description": ""
				},
				{
					"name": "Blog",
					"value": "Blog",
					"description": ""
				},
				{
					"name": "Commission",
					"value": "Commission",
					"description": ""
				},
				{
					"name": "Continuous Project",
					"value": "Continuous Project",
					"description": ""
				},
				{
					"name": "Strings",
					"value": "Strings",
					"description": ""
				},
				{
					"name": "Corporate",
					"value": "Corporate",
					"description": ""
				},
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "Document",
					"value": "Document",
					"description": ""
				},
				{
					"name": "Glossary",
					"value": "Glossary",
					"description": ""
				},
				{
					"name": "Integrations",
					"value": "Integrations",
					"description": ""
				},
				{
					"name": "Invitation",
					"value": "Invitation",
					"description": ""
				},
				{
					"name": "Machine Learning",
					"value": "Machine Learning",
					"description": ""
				},
				{
					"name": "Pam",
					"value": "Pam",
					"description": ""
				},
				{
					"name": "Payment",
					"value": "Payment",
					"description": ""
				},
				{
					"name": "Project",
					"value": "Project",
					"description": ""
				},
				{
					"name": "Activity",
					"value": "Activity",
					"description": ""
				},
				{
					"name": "Project Webhooks",
					"value": "Project Webhooks",
					"description": ""
				},
				{
					"name": "Project Document",
					"value": "Project Document",
					"description": ""
				},
				{
					"name": "Style Guide",
					"value": "Style Guide",
					"description": ""
				},
				{
					"name": "Report",
					"value": "Report",
					"description": ""
				},
				{
					"name": "Search",
					"value": "Search",
					"description": ""
				},
				{
					"name": "Stats",
					"value": "Stats",
					"description": ""
				},
				{
					"name": "Surveys",
					"value": "Surveys",
					"description": ""
				},
				{
					"name": "Auth",
					"value": "Auth",
					"description": ""
				},
				{
					"name": "Vendor",
					"value": "Vendor",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...staticDescription,
		...asyncDescription,
		...blogDescription,
		...commissionDescription,
		...continuousProjectDescription,
		...stringsDescription,
		...corporateDescription,
		...userDescription,
		...documentDescription,
		...glossaryDescription,
		...integrationsDescription,
		...invitationDescription,
		...machineLearningDescription,
		...pamDescription,
		...paymentDescription,
		...projectDescription,
		...activityDescription,
		...projectWebhooksDescription,
		...projectDocumentDescription,
		...styleGuideDescription,
		...reportDescription,
		...searchDescription,
		...statsDescription,
		...surveysDescription,
		...authDescription,
		...vendorDescription,
		...defaultDescription
		],
	};
}
