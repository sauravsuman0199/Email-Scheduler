const express = require('express')
const app = express()
const PORT = 1337;

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});