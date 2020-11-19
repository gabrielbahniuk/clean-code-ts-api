export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/admin',
  port: process.env.PORT ?? 3333,
  jwtSecret: process.env.JWT_SECRET ?? 'ab3931!?)='
}
