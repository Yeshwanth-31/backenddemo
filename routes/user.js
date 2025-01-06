const express=require('express')
let router=express.Router();
router.get('/name',(req,res)=>{
    res.send("user information");
})
router.get('/name/newuser',(req,res)=>{
    res.send("new user information");
})
// router.get('/name/:id',(req,res)=>{
//     res.send("id value "+req.params.id);
// })
// router.put('/:id',(req,res)=>{
//     res.send("update id value "+req.params.id);
// })
// router.delete('/:id',(req,res)=>{
//     res.send("delete id value "+req.params.id);
// })
router 
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        res.send("retrive id value"+req.params.id);
    })
    .put((req,res)=>{
        res.send("update this id value "+req.params.id)
    })
    .delete((req,res)=>{
        res.send("delete this iid value "+req.params.id)
    })

const users=[{name:"raja"},{name:"rani"},{name:"sepo"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id]
    next();
})

module.exports=router;