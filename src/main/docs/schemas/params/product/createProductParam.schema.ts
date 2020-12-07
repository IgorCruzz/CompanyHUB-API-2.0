export const createProductParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    company_id: {
      type: 'string',
    },
  },
  required: ['name', 'company_id'],
}
