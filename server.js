const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'dist/angularportfolio')));
app.use(express.json());

app.use('/api',require('./server/api.js'));

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));