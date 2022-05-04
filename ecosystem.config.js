module.exports = {
  apps: [
    {
      name: 'dev',
      script: './src/index.ts',
      instances: 1,
      autorestart: true,
      watch: true,
      env: {
        PORT: 3333,
        NODE_ENV: 'development',
      }
    },
    {
      name: 'production',
      script: './src/index.ts',
      instances: -1,
      autorestart: true,
      watch: false,
      env: {
        PORT: 3333,
        NODE_ENV: 'development',
      }
    },
  ]
}
