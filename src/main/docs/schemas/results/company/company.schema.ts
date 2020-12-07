export const companySchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    cnpj: {
      type: 'string',
    },
    user_id: {
      type: 'number',
    },
    productConnection: {
      type: 'array',
      items: {
        $ref: '#/schemas/products',
      },
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: 'string',
    },
  },
}
