export const findAllServices = {
  get: {
    tags: ['Service'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para listar os serviços cadastrados',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/findAllServicesResult',
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
