export const ProductsSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/productResult',
  },
}
