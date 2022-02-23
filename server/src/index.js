const express = require("express");
const connect=require("./configs/db");
const userController = require("./controllers/user.controller");
const app = express();

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/user", userController);








app.listen(9876, ()=>{
    connect();
    console.log("Listening at 9876");
})