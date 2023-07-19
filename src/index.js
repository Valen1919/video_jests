// import express from 'express';


// const app = express()
// app.get('/ping', (req, res)=> {
//   res.send("pong");
// });
//  app.listen(3000)
//  console.log('sever is running ')

import app from "./app.js";

app.listen(3000);
console.log("Server on port 3000");