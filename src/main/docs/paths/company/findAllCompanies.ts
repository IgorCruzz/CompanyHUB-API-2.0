export const findAllCompanies = {
  get: {
    tags: ['Company'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para listar as empresas cadastradas',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/findAllCompaniesResult',
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
