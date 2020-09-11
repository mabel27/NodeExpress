const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000; 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', async(req,res)=> {
     /* PREVIOUS EXERCISE */

    /*
    try {
     apiUrl = `https://reqres.in/api/users`;
     const apiResponse = await fetch(apiUrl);
     const json = await apiResponse.json();
     res.send(json);
    } catch (error) {
        console.log(`Error found ${error}`);
        
    }
    */
})

app.post('/users',async(req,res)=> {

    if(!req.body.name || !req.body.job){
        res.status(400).json({status: 400, message: "Name or Job position should be present"})
    }else{
        let data = {
            name: req.body.name,
            job: req.body.job
        };
        try {
           const response =  await fetch(`https://reqres.in/api/users`,{ method: 'POST', body: data});
           const json = await response.json();
           res.send(json);
            
        } catch (error) {
            res.send(error);
        }
    }
})


app.listen(port,()=>{
console.log(`Im running in port...${port}`);

})