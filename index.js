const express = require("express");

const app = express();
 
const port = 3000;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})

app.use((req,res)=>{
    // console.log(req);
    console.log("request recieved");
    res.send({
        name:"apple",
        color:"red",
    });
});