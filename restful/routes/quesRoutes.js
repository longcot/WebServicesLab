const express = require('express')
const mongoose = require('mongoose')
const { route } = require('../../server/routes')

const Question = mongoose.model('Question')

const router = express.Router()

router.post('/question',async (req,res) => {
    const {title,description,note} = req.body

    if(!title || !description){
        return res.status(422).send({error:'Must provide title and description'})
    }

    try{
        const ques = new Question({title,description,note})
        await ques.save()
        console.log(ques);
        res.send(ques)
    }catch(err) {
        res.status(422).send({error:err.message})
    }
})

router.get('/question', async (req,res) =>{
    const ques = await Question.find({})
    console.log(ques);
    res.send(ques)
})

router.put('/question/:_id',async (req,res) => {
    try {
        console.log(req.body);
        console.log(req.params._id);
        const ques = await Question.findById(req.params._id).exec()
        console.log(ques);
        ques.set(req.body)
        
        const rs = await ques.save()
        console.log(rs);
        res.send(rs)
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.delete('/question/:_id', async (req,res) => {
    try{
        const ques = await Question.findById(req.params._id).exec()
        ques.delete()
        const rs = await ques.save()
        res.send(rs)

        //Hoac
        // const ques = await Question.deleteOne(req.params._id).exec()
        // res.send(ques)

    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router