export const ProductSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    company_id: {
      type: 'number',
    },
    serviceConnection: {
      type: 'array',
      items: {
        $ref: '#/schemas/serviceResult',
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
