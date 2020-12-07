export const createCompany = {
  post: {
    tags: ['Company'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para cadastrar uma empresa',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createCompanyParams',
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
              $ref: '#/schemas/createCompanyResult',
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
