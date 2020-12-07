export const createServiceParams = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    product_id: {
      type: 'number',
    },
  },
  required: ['name', 'description', 'product_id'],
}
