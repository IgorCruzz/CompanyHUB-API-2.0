export const updateService = {
  put: {
    tags: ['Service'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para atualizar um serviço',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateServiceParamSchema',
          },
        },
      },
    },
    parameters: [
      {
        in: 'path',
        name: 'updateId',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/updateResult',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
}
