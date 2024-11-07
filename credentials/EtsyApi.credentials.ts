import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class NasaPicsApi implements ICredentialType {
  name = 'EtsyApi';
  displayName = 'Etsy API';
  // Uses the link to this tutorial as an example
  // Replace with your own docs links when building your own nodes
  documentationUrl = 'https://developers.etsy.com/documentation';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
    },
  ];
  authenticate = {
    type: 'generic',
    properties: {
      qs: {
        api_key: '={{$credentials.apiKey}}',
      },
    },
  } as IAuthenticateGeneric;
}
