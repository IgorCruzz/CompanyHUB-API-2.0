export const updateProduct = {
  put: {
    tags: ['Product'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para atualizar uma produto',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateProductParamSchema',
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
