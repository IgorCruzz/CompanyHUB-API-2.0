export const findOneCompany = {
  get: {
    tags: ['Company'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para buscar a empresa do usuário logado',
    parameters: [
      {
        in: 'path',
        name: 'findId',
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
              $ref: '#/schemas/CompanyResultSchema',
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
