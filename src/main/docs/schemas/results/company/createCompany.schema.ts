export const createCompanySchema = {
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
  },
}
