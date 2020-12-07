export const createCompanyParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    cnpj: {
      type: 'string',
    },
  },
  required: ['name', 'cnpj'],
}
