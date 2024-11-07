import { INodeType, INodeTypeDescription } from 'n8n-workflow';


export class Etsy implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Etsy',
        name: 'Etsy',
        icon: 'file:etsy.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get and Set data from Etsy API',
        defaults: {
          name: 'Etsy',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
          {
            name: 'EtsyApi',
            required: true,
          },
        ],
        requestDefaults: {
          baseURL: 'https://openapi.etsy.com/v3',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
        properties: [
              {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                options: [
                  {
                    name: 'Shop',
                    value: 'shop',
                  },
                  {
                    name: 'Order',
                    value: 'order',
                  },
                  {
                    name: 'Listing',
                    value: 'listing',
                  },
                ],
                default: 'shop',
              },
              {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                displayOptions: {
                  show: {
                    resource: [
                      'shop',
                      'order',
                      'listing',
                    ],
                  },
                },
                options: [
                  {
                    name: 'Get',
                    value: 'get',
                    description: 'Get a resource',
                  },
                  {
                    name: 'Update',
                    value: 'update',
                    description: 'Update a resource',
                  },
                  {
                    name: 'Delete',
                    value: 'delete',
                    description: 'Delete a resource',
                  },
                ],
                default: 'get',
                description: 'The operation to perform.',
              },
        ]
    };
}