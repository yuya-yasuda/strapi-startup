module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9dc0f58ae4d51c6942bf2ebc28078967'),
  },
});
