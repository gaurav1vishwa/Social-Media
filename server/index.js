const express= require("express");
const app= express();
require ("dotenv").config();

app.get('/',function(req, res){
    res.send("hey every one welcome back to new project")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
