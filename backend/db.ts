import { Client } from 'pg';

export default async function executeQuery(sql: string, values: any[]){
  console.log("executeQuery", sql, values);
  const client = new Client({
    user: process.env.dbUsername || 'postgres',
    password: process.env.dbPassword || 'password',
    database: process.env.dbDatabase || 'dogs',
    host: process.env.dbHost || 'localhost',
  })
  try{
    await client.connect()
  } catch(e){
    console.error("connection failed:", e);
  }

  const result = await client.query(sql, values)
  await client.end()
  return result;
}