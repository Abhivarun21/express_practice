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
    res.send("you contacted root path");
});

app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});


app.post("/",(req,res)=>{
    res.send("you sent a post request");
});