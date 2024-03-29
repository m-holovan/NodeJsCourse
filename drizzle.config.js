import dotenv from 'dotenv';
dotenv.config();

export default {

    schema: './src/db/schema.js',

    out: './drizzle',

    driver: 'pg',

    dbCredentials: {

        host: `${process.env.host}`,

        port: process.env.port,

        user: `${process.env.user}`,

        password: `${process.env.password}`,

        database: `${process.env.database}`,

    },

};