const express = require('express')
const app = express()
const scheduler = require('node-cron');
const {USER,PASS} = require('./config/credentials')


const PORT = 1337;

scheduler.schedule("* * * * * ",()=>{
    console.log('inside scheduler');
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});