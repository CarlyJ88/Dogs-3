// import {addDog} from "./dogService"
// import { Client } from 'pg'
// // var addDog = require("./dogService");
// // var Client =('pg');

// describe('dogs', () => {
//   const values = ["title", "entry", 3, "wwww.test.com", "useruid"]
//   let client:Client;

//   beforeEach(async ()=>{
//     console.log('test config: ',{
//       user: process.env.dbUsername || 'postgres',
//       password: process.env.dbPassword,
//       database: process.env.dbDatabase || 'password',
//       host: process.env.dbHost || 'localhost'
//     })
//     client = new Client({
//       user: process.env.dbUsername || 'postgres',
//       password: process.env.dbPassword || 'password',
//       database: process.env.dbDatabase || 'dog_test',
//       host: process.env.dbHost || 'localhost'
//     }) 
//     await client.connect()
//     return await client.query('DELETE FROM dogs')
//   });

//   it('returns list of entries from the database', async () => {
//     await client.query('INSERT INTO entries(title, entry, category_id, link, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *', values)
//     // const entries = await listEntries()
//     // expect(entries.length).toEqual(1);
//     // expect(entries).toEqual([{id: expect.anything(), title: "title", entry: "entry", incomingUserId: 'useruid', date: expect.anything(), edited: expect.anything(), categoryId: 3, link: "wwww.test.com", categoryName: "Clean Code", colourCode: "65, 75, 178",}])
//   })

//   afterEach(async () => {
//     await client.query('DELETE FROM dogs')
//     return await client.end();
//   })
// })
