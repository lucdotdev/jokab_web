const express = require("express");
const {getDataFromDataBase} = require("./db_actions.js");
const app = express();
app.set("view engine", "pug");
app.get("/", async (req, res)=>{
  let data = await getDataFromDataBase();
  res.render("home", {data:data});
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

