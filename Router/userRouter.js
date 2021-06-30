 const express =require('express');
const router = express.Router();
const User =require('../modules/userSchema');

//POST :  ADD A NEW USER TO THE DATABASE 
//http://localhost:5000/user/adduser

router.post('/adduser', (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err, data) => {
        err ? console.log(err) : res.json({Message:"User was added", data})
    })
})


//GET :  RETURN ALL USERS 
//http://localhost:5000/user/getuser

router.get('/getuser', async(req,res)=>{
    try{
        const data =await User.find()
        res.json(data)
    }
    catch(err) {
        console.log(err)
    }
});


//PUT : EDIT A USER BY ID 
//http://localhost:5000/user/edit/(write id)

router.put('/edit/:id', (req,res)=>{
    const updateDate =req.body
    User.findByIdAndUpdate(req.params.id, updateDate)
     .then((data) => res.json('user is updated'))
     .catch((err) =>res.status(400).json(err.message))   
    
})


//DELETE : REMOVE A USER BY ID 
//http://localhost:5000/user/deleteuser/(write id)

router.delete('/deleteuser/:id', async(req,res)=>{
    try{
        const data =await User.findByIdAndRemove({_id : req.params.id})
        console.log(data)
        res.join({ message:"User is deleted", data})
    }catch(err) {
        console.log(err)
    }
})

module.exports = router; 