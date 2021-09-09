// const environment = process.env.NODE_ENV || 'development';
const environment = 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

exports.database = database;

