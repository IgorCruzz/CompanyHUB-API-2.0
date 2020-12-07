export const updateUserParamSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    oldPassword: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    confirmPassword: {
      type: 'string',
    },
  },
}
