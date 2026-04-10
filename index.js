const express = require("express");

const app = express();
 
const port = 3000;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recieved");
//     res.send({
//         name:"apple",
//         color:"red",
//     });
// });

app.get("/",(req,res)=>{
    res.send("hello , I am root");
});

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });


// app.post("/",(req,res)=>{
//     res.send("you sent a post request");
// });

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     let {username} = req.params;
//     res.send(`You are at page of ${username}`);
// });

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`You searched query : ${q}`);
});