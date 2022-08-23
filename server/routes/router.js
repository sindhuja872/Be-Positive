const express=require("express");
const router=express.Router();
const donors=require("../models/donorSchema");

//user registration
router.post("/register",async(req,res)=>{
    //validating the form
    //console.log(req.body);
    const {name,email,password,gender,age,weight,bloodgroup,phno,state,city} = req.body;

    //if users miss any fields
    if(!name || !email || !password || !gender || !age || !weight || !bloodgroup || !phno || !state || !city){
        return res.status(404).json("Please fill all the fields");
    }

    try{
        const preuser = await donors.findOne({email:email}) //checking the email with users db emails
        console.log(preuser); //if user not present it shows null

        if(preuser){
            res.status(404).json("Already registered");
        }else{
            const adduser = new donors({
                name,email,password,gender,age,weight,bloodgroup,phno,state,city
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    }catch(error){
        res.status(404).json(error);
    }
})

//get userdata
router.get("/getdata",async(req,res)=>{
    try{
        const userdata=await donors.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }catch(error){
        res.status(404).json(error);
    }
})
module.exports=router;

//delete userdata
router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser=await donors.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    }catch(error){
        res.status(422).json(error);
    }
})

//find a particular user
router.get("/getuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        const user= await donors.findById({_id:id});
        console.log(user);
        res.status(201).json(user)
    } catch(error){
        res.status(422).json(error)
    }
})

//update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const updateduser = await donors.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    }catch(error){
         res.status(422).json(error);
    }
})

//check user data
router.post('/checkdonor', async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    

    if(!email || !password)
    {
        return res.status(422).json({error:"Please fill all the fields carefully"});
    }
    try
    {
        const emailExist= await donors.findOne({email:email});
        if(emailExist)
        {
            if(password == emailExist.password)
            return res.status(200).json({id:emailExist._id});
            else
            return res.status(422).json({error:"Incorrect Password"});
        }
        else{
            return res.status(422).json({error:"Incorrect email"});
        }
    }
    catch(err)
    {
        return res.status(422).json({error:"Error!"});
    }
})
