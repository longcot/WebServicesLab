require('./model/Question')

const express = require('express')
const mongoose = require('mongoose')
const quesRoutes = require('./routes/quesRoutes')

const app =express()

app.use(express.json())
app.use('/', quesRoutes)

mongoose.connect(mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.pzbpw.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance!');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error connecting: ',err);
})

app.listen(3100,()=>{
    console.log('Server running on port 3100');
})