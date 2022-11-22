const { query } = require('express');
const express =require('express')
const connection =require('../connection');
const router=express.router();

router.post('/create',(req,res,next)=>{
    let product=req.body;
    query="insert into product(name,description,price) values (?,?,?)";
    connection.query(query,[product.name,product.description.price],(err,results)=>{
        if (!err){
            return res.status(200).json({message:"product added successfully"});
        
        }
        else 
        return res.status(500).json(err);
    });

});


module.exports=router;