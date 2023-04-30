const express=require('express');
const mongoose=require('mongoose');
const users=require('./routes/users');

const app=express();

require('./startup/db')();
require('./startup/prod')(app);


app.use(express.json())
app.use('/api/users',users)

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})