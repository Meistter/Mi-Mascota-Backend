const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/josue", (req, res) =>{
    res.json({name: 'Josue', apellido: 'Perez'});
  });

app.listen(port, () =>{
  console.log("My port: " + port);
});

//Practica creación servidor con Express