import express from "express";

const routers = express();

routers.get(`/users`, (req, res) => { 
    return res.send(Object.values(req.context.models.users))
});

routers.get(`/users/:userId`, (req, res) => {
     return res.send(req.context.models.users[req.params.userId])
});

export default routers;