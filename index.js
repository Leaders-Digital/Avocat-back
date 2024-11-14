const express = require('express');
const app = express();
const port = 5000;
require("./Models/index");


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  
});