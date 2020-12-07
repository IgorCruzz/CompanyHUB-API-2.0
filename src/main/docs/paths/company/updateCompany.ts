export const updateCompany = {
  put: {
    tags: ['Company'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para atualizar uma empresa',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateCompanyParamSchema',
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
