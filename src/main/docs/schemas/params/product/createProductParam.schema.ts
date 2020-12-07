export const createProductParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    company_id: {
      type: 'number',
    },
  },
  required: ['name', 'company_id'],
}
