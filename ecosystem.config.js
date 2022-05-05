const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  apps: [
    {
      name: 'dev',
      script: './src/index.ts',
      instances: 1,
      autorestart: true,
      watch: [
        "src",
        ".env",
        "tsconfig.json"
      ],
      env: {
        PORT: process.env.PORT,
        NODE_ENV: 'development',
      },
    },
    {
      name: 'production',
      script: './src/index.ts',
      instances: -1,
      autorestart: false,
      watch: false,
      env: {
        PORT: process.env.PORT,
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
    }
  }
}
