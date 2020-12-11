export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongo-db-clean-api-container:27017/admin',
  port: process.env.PORT ?? 3333,
  jwtSecret: process.env.JWT_SECRET ?? 'ab3931!?)='
}
