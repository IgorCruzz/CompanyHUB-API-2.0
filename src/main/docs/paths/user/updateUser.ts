export const updateUser = {
  put: {
    tags: ['User'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para atualizar conta de usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateUserParams',
          },
        },
      },
    },
    parameters: [
      {
        in: 'path',
        name: 'updateId',
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
              $ref: '#/schemas/updateResult',
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
