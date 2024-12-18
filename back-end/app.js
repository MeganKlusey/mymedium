const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=> res.json())
.catch((err)=>{
    console.log("error occured", err)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})