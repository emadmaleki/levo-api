const express = require('express');
const jsonServer = require("json-server");
const fileUpload = require('express-fileupload');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const app = express();


app.post('/uploadUser',(req,res) => {
    if (req.files == null) {
        return res.status(400).json({msg:"can't upload file!"});
    } 
    
    const file = req.files.img;
    file.mv(`${__dirname}/../public/images/users/${file.name}`,(err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({fileName:file.name,filePath:`/images/users/${file.name}`})
    });
})  

app.use(fileUpload());
server.use(middlewares);
server.use(router);

app.listen(port);
server.listen(port);
