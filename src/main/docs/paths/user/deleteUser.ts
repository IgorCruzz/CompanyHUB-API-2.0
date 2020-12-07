export const deleteUser = {
  delete: {
    tags: ['User'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para deletar conta de usuário',
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
              $ref: '#/schemas/deleteSchema',
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
