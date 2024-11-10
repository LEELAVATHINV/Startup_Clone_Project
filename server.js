const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://jayasree:1122334455cluster@cluster0.mp0y0.mongodb.net/',{
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

const FormData =require('./models/FormData');

app.get('/', (req, res) => {
    res.send('Server is working');
})
app.post('/submit', async (req, res) => {
const {name,email,mobile,companyname}  = req.body;
try{
    const Formdata = new FormData({name,email, mobile, companyname});
    await Formdata.save();
    res.status(201).json({message: 'Form data saved'});
}catch(error){
    res.status(500).json({error: 'Failed to save from data'});
}
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
});