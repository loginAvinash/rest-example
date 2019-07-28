import express from "express";
import uuid4 from 'uuid/v4';

const routers = express();

routers.get(`/messages`, (req, res) => {return res.send(Object.values(req.context.models.messages))});
routers.get('/messages/:messageId', (req, res) => {return res.send(req.context.models.messages[req.params.messageId])})

routers.post(`/messages`, (req, res) => {
    console.log("body: ",req.body.text)
    const id = uuid4();
    console.log(id)
    const message = {
        id,
        text: req.body.text,
        userId: req.body.userId,
    }
    
    req.context.models.messages[id] = message;
    console.log(message);
    return res.send(message);
});

routers.delete('/messages/:messageId', (req, res) => {
    delete req.context.models.messages[req.params.messageId]
    console.log(req.context.models.messages);
    return res.send(req.context.models.messages);
});

export default routers;