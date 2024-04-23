const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middelcors
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com"
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com"
  }
]

app.get('/', (req, res) => {
  res.send('Users Managment server is runing!')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) =>{
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, () => {
  console.log(`server is runing on PORT ${port}`)
})