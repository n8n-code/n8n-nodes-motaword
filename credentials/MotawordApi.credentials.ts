import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MotawordApi implements ICredentialType {
        name = 'N8nDevMotawordApi';

        displayName = 'Motaword API';

        icon: Icon = { light: 'file:../nodes/Motaword/motaword.png', dark: 'file:../nodes/Motaword/motaword.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.motaword.com',
                        required: true,
                        placeholder: 'https://api.motaword.com',
                        description: 'The base URL of your Motaword API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
