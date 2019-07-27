import 'dotenv/config';
import express from "express";
import { request } from 'https';

const app = express();

app.get(`/`, (req, res) => res.send(`Hello World`))
app.get(`/test`, (req, res) => res.send(`This is test route`))

app.listen(3000,()=> console.log(`app listening on port 3000`))




