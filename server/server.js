const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path));
app.listen(port, () => {
  console.log("server is running successfuly");
});
