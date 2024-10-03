
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


const ItemSchema=new mongoose.Schema ({
    name:String,
    description: String,

})

app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
  });



app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  });
  

  // Get a single item by id
app.get('/api/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
  });


  app.put('/api/items/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  });


  app.delete('/api/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  });

const Item = mongoose.model('Item', ItemSchema);

app.listen(PORT,()=>{
    console.log(`your app is runnin ${PORT}`);
})

