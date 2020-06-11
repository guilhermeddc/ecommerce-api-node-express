export default {
  secret:
    process.env.NODE_ENV === 'production'
      ? process.env.SECRET
      : 'sad67asnoaisusa485das4d65as.4as6d54a68c',
  api:
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL
      : 'http://localhost:3333',
  store:
    process.env.NODE_ENV === 'production'
      ? process.env.WEB_URL
      : 'http://localhost:3000',
};
