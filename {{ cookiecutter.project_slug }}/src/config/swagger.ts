import swaggerJsDoc from 'swagger-jsdoc'

import { envs } from './envs'


/**
 * OpenAPI Specification
 * https://swagger.io/specification/
 */
const options: swaggerJsDoc.Options = {
    apis: [
        "./src/presentation/routers/*.router.ts"
    ],
    definition: {
        openapi: '3.0.0',
        info: {
            title: '{{ cookiecutter.project_name }}',
            version: '1.0.0'
        },
        servers: [
            {
                description: 'Local server',
                url: `http://localhost:${envs.PORT}/api/v1`
            }
        ],
        components: {
            securitySchemes: {
                'apiKey': {
                    in: 'header',
                    type: 'apiKey',
                    name: 'x-api-key',
                }
            },
            schemas: {
                CreateTodo: {
                    type: 'object',
                    required: ['title'],
                    properties: {
                        title: {
                            type: 'string',
                            example: 'Go to the gym'
                        },
                        completed: {
                            type: 'boolean',
                            default: false
                        }
                    }
                },
                Todo: {
                    allOf: [
                        {
                            type: 'object',
                            properties: {
                                id: { type: 'string' }
                            }
                        },
                        {
                            '$ref': '#/components/schemas/CreateTodo'
                        }
                    ]
                }
            }
        }
    }
}


export const openApiConf = swaggerJsDoc(options)
