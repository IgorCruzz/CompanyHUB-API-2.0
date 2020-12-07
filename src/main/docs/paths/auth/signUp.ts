export const signUp = {
  post: {
    tags: ['Auth'],
    summary: 'API para criar uma conta de usuário',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/signupParams',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/signUpResult',
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
