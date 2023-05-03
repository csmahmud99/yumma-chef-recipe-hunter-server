const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefRecipe = require("./data/chefRecipe.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("'Yumma' is Running");
});

app.get("/chef-recipe", (req,res) => {
    res.send(chefRecipe);
});

app.get("/chef-recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const items = chefRecipe.find(item => parseInt(item.chefId) === id);
    res.send(items);
})

app.listen(port, () => {
    console.log(`'Yumma' API is running on port: ${port}`);
});