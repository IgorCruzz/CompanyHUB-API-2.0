export const deleteProduct = {
  delete: {
    tags: ['Product'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para deletar uma produto',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/deleteProductParamSchema',
          },
        },
      },
    },
    parameters: [
      {
        in: 'path',
        name: 'deleteId',
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
              $ref: '#/schemas/deleteResult',
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
