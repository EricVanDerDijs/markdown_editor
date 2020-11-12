module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        database: env('DATABASE_NAME', 'markdown_test'),
        uri: env('DATABASE_URI')
      },
      options: {
        ssl: true,
      },
    },
  },
});
