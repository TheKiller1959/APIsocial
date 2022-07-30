require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_DEV_USERNAME,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "dialect": process.env.DB_DEV_DIALECT
  },
  "test": {
    "username": process.env.DB_TEST_USERNAME,
    "password": process.env.DB_TEST_PASSWORD,
    "database": process.env.DB_TEST_DATABASE,
    "host": process.env.DB_TEST_HOST,
    "dialect": process.env.DB_TEST_DIALECT
  },
  "production": {
    "url": process.env.DATABASE_URL
  }
}; //? Configuration for development, testing and production