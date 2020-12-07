export const findAllProducts = {
  get: {
    tags: ['Product'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para listar os produtos cadastrados',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/findAllProductsResult',
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
