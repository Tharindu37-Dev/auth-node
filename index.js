const express=require('express');
const mongoose=require('mongoose');
const users=require('./routes/users');

const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/auth')
    .then(()=>console.log('Mongodb connected...'))
    .catch(err=> console.log('Could not connet to MongoDB...'));


app.use(express.json())
app.use('/api/users',users)

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})