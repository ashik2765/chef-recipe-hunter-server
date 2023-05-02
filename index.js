const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefsData.json');
app.get('/',(req,res) =>{
    res.send('tabbakh resturant server is running')
});

app.get('/chefs', (req,res) =>{
    res.send(chefs);
})

app.listen(port,()=>{
    console.log(`tabbakh API is running on port:${port}`)
})