const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const bodyParser = require('body-parser');  
require('dotenv').config();  

const Product = require('./model/product');  

const app = express();  
const port = process.env.PORT || 5000;  

app.use(cors());  
app.use(bodyParser.json());  

// Connect to MongoDB  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log("MongoDB connected"))  
    .catch(err => console.error("MongoDB connection error:", err));  

// API Endpoints  

// Get all products  
app.get('/api/products', async (req, res) => {  
    try {  
        const products = await Product.find();  
        res.json(products);  
    } catch (err) {  
        res.status(500).json({ message: err.message });  
    }  
});  

// Create a new product  
app.post('/api/products', async (req, res) => {  
    const { name, price, imageUrl } = req.body;  

    const newProduct = new Product({ name, price, imageUrl });  

    try {  
        const savedProduct = await newProduct.save();  
        res.status(201).json(savedProduct);  
    } catch (err) {  
        res.status(400).json({ message: err.message });  
    }  
});  

// Update a product  
app.patch('/api/products/:id', async (req, res) => {  
    try {  
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        res.json(updatedProduct);  
    } catch (err) {  
        res.status(400).json({ message: err.message });  
    }  
});  

// Delete a product  
app.delete('/api/products/:id', async (req, res) => {  
    try {  
        await Product.findByIdAndDelete(req.params.id);  
        res.status(204).send();  
    } catch (err) {  
        res.status(400).json({ message: err.message });  
    }  
});  

// Start the server  
app.listen(port, () => {  
    console.log(`Server running on http://localhost:${port}`);  
});

//______________



// Enable All CORS Requests  
app.use(cors());  

// OR enable specific origins  
app.use(cors({  
    origin: 'http://localhost:3000' // Replace with your client's origin  
}));  

// Define your routes  
app.get('/api/your-endpoint', (req, res) => {  
    res.send('CORS is configured!');  
});  

// Start the server  
app.listen(3000, () => {  
    console.log('Server is running on port 3000');  
});