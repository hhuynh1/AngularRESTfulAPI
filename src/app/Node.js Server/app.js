const port = 3000;
const express = require('express');  
const app = express();  
const cors = require('cors');
const exp = require('constants');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Array of Names
const users = [
  {firstName : ''},
  {lastName : ''}
];

app.get('/', (req, res) => {
	res.send("Node.js / Express.js is running on localhost:3000");
  console.log(req.body)
})


// Returns array of names in JSON format
app.get('/getNames', (req, res) => {
	res.send(users);
  console.log(req.body)
})

// Returns all names in JSON
app.get('/getAllNames', (req, res) => {
	res.send(users);
  console.log(req.body)
})

// Stores list of names in a Array
app.post('/postNames', (req, res) => {
  const names = req.body
  users.push(names)
  console.log(req.body)
})

// Returns array of names in JSON format
app.get('/getNames', (req, res) => {
	res.send(users);
  console.log(req.body)
})

// Node.js listening on port 3000
app.listen(port, (req, res) =>{
  console.log('Node.js server listening on localhost:3000!');
})
  res.send(req.body)
