const { drizzle } = require('drizzle-orm/node-postgres');
const { Client } = require('pg');
const schema = require('./schema');
const dotenv = require('dotenv');
dotenv.config();


const client = new Client({

    host: `${process.env.host}`,

    port: process.env.port,

    user: `${process.env.user}`,

    password: `${process.env.password}`,

    database: `${process.env.database}`,

});

client.connect();

module.exports = drizzle(client, { schema });