module.exports = {
  env: {
    MYSQL_HOST: 'sql264.main-hosting.eu',
    MYSQL_PORT: '3306',
    MYSQL_DATABASE: 'u210795655_seniorportal',
    MYSQL_USER: 'u210795655_portal',
    MYSQL_PASSWORD: 'seniorPortal@12345$',
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 's3n0r@123#',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/api' // development api
        : 'https://portalpanel.vercel.app/api', // production api
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          {key: 'Access-Control-Allow-Credentials', value: 'true'},
          {key: 'Access-Control-Allow-Origin', value: '*'},
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};
