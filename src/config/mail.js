export default {
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: process.env.MAIL_PORT || 465,
  auth: {
    user: process.env.MAIL_USER || 'loja-a-poderosa-sm@gmail.com',
    pass: process.env.MAIL_PASS || '24101963',
  },
};
