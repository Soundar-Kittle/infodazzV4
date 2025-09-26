module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'start',
        env_production: {
          NODE_ENV: 'production',
          DB_HOST: "localhost",
          DB_USER: "root",
          DB_PASSWORD: "",
          DB_NAME: "infodazz",
          JWT_SECRET: "your_super_secret",
          PORT: 4000,
        },
      },
    ],
  };
  