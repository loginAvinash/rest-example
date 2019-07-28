import 'dotenv/config';
import bodyParser from 'body-parser';
import express from "express";
import uuid4 from 'uuid/v4';
import routes from './routes/routesInfo';
import models from "./schema/db";

 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));
 //app.use(bodyParser.json);

 app.use((req, res, next) => {
     req.context = {
         models,
     };
    next();
  });

app.use('/', routes.users);
app.use('/', routes.messages);

app.listen(process.env.PORT,()=> console.log(`app listening on port ${process.env.PORT}`))




