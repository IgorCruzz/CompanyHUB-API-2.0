export const deleteCompany = {
  delete: {
    tags: ['Company'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para deletar uma empresa',
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
