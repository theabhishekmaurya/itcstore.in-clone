const express = require("express");
const Cart = require("../models/cart.model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, "MYSECRETKEY", (err, user)=>{
            if(err){
            return reject(err);
            }
            resolve(user);
        })
    });
}

router.get("", async(req, res)=>{
    try{
        const cart = await Cart.find().lean().exec();
        res.send(cart);
    }
    catch(e){
        res.send(e.message);
    }
});


router.post("",
async(req, res)=>{
    try{
        if(!req.headers.authorization){
            res.send("Headers not present or invalid");
        }
        if(!req.headers.authorization.startsWith("Bearer")){
            res.send("Headers not present or invalid");
        }
        let token = req.headers.authorization.split("Bearer ")[1];
        // console.log(token)
        let user = await verifyToken(token);
        // console.log(user.user[0]._id)
        let user_id=user.user[0]._id
        let thisUser = await Cart.find({userId:user_id}).lean().exec();
        console.log(thisUser)
        // return res.send(thisUser)
        
        if(thisUser.length>0){
            let items = thisUser[0]

            const cart = await Cart.findOneAndUpdate({userId:user_id}, )
            
            // data.push(req.body);
        }
        
        else{
            var data=req.body;
        }

        let cartItem={
            items:[data],
            userId:user_id
        }

        const cart = await Cart.create(cartItem);
        res.send(cart);
    }
    catch(e){
        res.send(e.message);
    }
});

router.post("/login", async(req, res)=>{
    try{
        const user = await User.find({email:req.body.email});
        console.log(user)
        if(user.length==0){
            
            return res.send({err:"User do not exist, Please try creating an account"});
        }
        if(user[0].checkPassword(req.body.password)){
            
            let token = newToken(user);
            res.send({user, token});
        }
        else{
            res.send({err:"Email or password not correct"});
        }
    }
    catch(e){
        res.send(e.message);
    }
});

module.exports=router;