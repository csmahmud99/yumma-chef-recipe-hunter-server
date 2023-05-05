const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefRecipe = require("./data/chefRecipe.json");

app.use(cors());

// General Output API from Server
app.get("/", (req, res) => {
    res.send("'Yumma' is Running");
});

// This API is Providing All Data to the Client
app.get("/chef-recipe", (req,res) => {
    res.send(chefRecipe);
});

// This API is Providing Data to the Client According to the User's Choice
app.get("/chef-recipe/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const items = chefRecipe.find(item => parseInt(item.chefId) === id);
    res.send(items);
})

// App is running or not inside production
app.listen(port, () => {
    console.log(`'Yumma' API is running on port: ${port}`);
});