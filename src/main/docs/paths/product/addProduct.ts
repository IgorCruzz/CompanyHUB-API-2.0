export const createProduct = {
  post: {
    tags: ['Product'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para cadastrar uma produto',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createProductParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/createProductResult',
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
