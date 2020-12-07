export const deleteService = {
  delete: {
    tags: ['Service'],
    security: [
      {
        apiKeyAuth: [],
      },
    ],
    summary: 'API para deletar um serviço',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/deleteServiceParamSchema',
          },
        },
      },
    },
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
