module.exports = {
  apps: [
    {
      name: "JCWDOL-09-01", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/src/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
      time: true,
    },
  ],
};
