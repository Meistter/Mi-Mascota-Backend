const express = require("express");
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker')

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/josue", (req, res) =>{
    res.json({name: 'Josue', apellido: 'Perez'});
  });

app.listen(port, () =>{
  console.log("My port: " + port);
});
app.get('/categories/filter',(req,res)=>{ 
  res.json('soy filter')
})
app.get('/categories/:categoryId',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    }
  ])
})

//recibiendo 2 parametros
app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId}= req.params
  res.json([
    {
      categoryId,
      productId,
      category: 'Food',
      products: []
    }
  ])
})

app.get('/products',(req,res)=>{
  const products= []
  const { size } = req.query
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.url()
    })
  }
  res.json(products)
})

app.get('/users',(req,res)=>{
  const {limit, offset}= req.query
  if(limit && offset) {
    res.json([
      {
        limit,
        offset
      }
    ])
  }else {
    res.send('no hay parametros')
  }
 
})

//Practica creación servidor con Express