import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema';
import dotenv from 'dotenv';
dotenv.config();



const client = new Client({

    host: `${process.env.host}`,

    port: process.env.port,

    user: `${process.env.user}`,

    password: `${process.env.password}`,

    database: `${process.env.database}`,

});

await client.connect();

export const db = drizzle(client, { schema });