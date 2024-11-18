const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'world';
  res.send(`Hello ${name}!`);
});

console.log("oii");

const port = parseInt(process.env.PORT) || 8081;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});