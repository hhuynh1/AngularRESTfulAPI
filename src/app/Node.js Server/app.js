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

app.post('/postNames', (req, res) => {
  const names = req.body
  users.push(names)
  res.send(req.body)
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
