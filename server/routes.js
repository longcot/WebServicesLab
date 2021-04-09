const express = require('express')
const router = express.Router()

const students = [
    {username: 'lam', password: '123', score: 10},
    {username: 'long', password: '123', score: 8},
    {username: 'huyen', password: '123', score: 10},
    {username: 'duy', password: '123', score: 8},
    {username: 'quyen', password: '123', score: 10},
    {username: 'nam', password: '123', score: 8},
    {username: 'thang', password: '123', score: 10},
    {username: 'uyen', password: '123', score: 8},
  ];

router.post('/signin',async (req,res) =>{
    const {name,password} = req.body
    if(!name || !password){
        return res.status(422).send({error:'Must provide email and password!'})
    }
    const student = await students.find(student => student.username === name)
    if(!student){
        return res.status(404).send({error: 'Email not found'})
    }
    else if(student.password !== password){
        return res.status(422).send({error:'Invalid password'})
    }else{
        console.log(student);
        res.send(student)
    }

    // console.log(student);
    // if(student)
    //     console.log('Login success');
    // else
    //     console.log('Login failed');
    // console.log(req.body);
    // res.send('You make a post request')
})

module.exports = router