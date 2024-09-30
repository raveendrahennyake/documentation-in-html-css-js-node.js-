
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

//use
const app=express();
app.use(cors());
app.use(bodyParser.json());

const PORT=process.env.PORT ||5000;

mongoose.connect('mongodb://localhost:27017/mern_crud',{
    useUnifiedTopology: true,
    useNewUrlParser: true

    
}).then(()=>{console.log("mongo db connect ")}).catch ((err)=>{console.log(err)});


app.listen(PORT,()=>{
    console.log(`your app is runnin ${PORT}`);
})

