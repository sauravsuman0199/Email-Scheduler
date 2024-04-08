const express = require('express')
const {USER,PASS} = require('./config/credentials')
const app = express()
const PORT = 1337;
console.log({USER,PASS})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});