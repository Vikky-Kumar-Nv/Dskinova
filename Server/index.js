import express from 'express';  

const app = express();


app.listen(3002,(req,res)=>{
    console.log("Server is running on port 3002");
})