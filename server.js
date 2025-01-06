const express=require('express');
const app=express();
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
   // console.log("hi")
    // res.status(500).send("500 error")
    // res.status(200).send({error:"error msg"})
    // res.json({express:"learning express"})
    //res.send("hello world")
    res.render("index",{text:"world"});
});
const userRoute=require('./routing/user');
app.use('/x',userRoute);
app.listen(3000);
