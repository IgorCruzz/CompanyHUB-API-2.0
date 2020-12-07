export const companiesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/companyResult',
  },
}
