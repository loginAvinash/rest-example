import 'dotenv/config';
import express from "express";
//import cors from "cors";

 const app = express();

// app.use(cors);//cross origin resource sharing

app.get(`/`, (req, res, next) => res.send(`Hello World`))
app.get(`/test`, (req, res, next) => res.send(`This is test route`))

app.listen(process.env.PORT,()=> console.log(`app listening on port ${process.env.PORT}`))




