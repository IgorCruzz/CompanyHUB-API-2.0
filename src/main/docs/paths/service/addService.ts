export const createService = {
  post: {
    tags: ['Service'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para cadastrar um serviço',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createServiceParams',
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
              $ref: '#/schemas/createServiceResult',
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
