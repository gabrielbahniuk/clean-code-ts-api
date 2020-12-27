export const forbidden = {
  description: 'Forbidden access',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
