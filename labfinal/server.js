const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://movie:12345@atlascluster.z0cd26s.mongodb.net/recipe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const recipeSchema = new mongoose.Schema({
  title: String,
  content: String,
  ingredients: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/recipes", (req, res) => {
    Recipe.find({})
      .then((recipes) => {
        res.json(recipes);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
  

  app.post("/recipes", (req, res) => {
    const { title, content, ingredients } = req.body;
    const newRecipe = new Recipe({ title, content, ingredients });
  
    newRecipe.save()
      .then((recipe) => {
        res.status(201).json(recipe);
      })
      .catch((err) => {
        console.error("Error creating recipe:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
  app.put("/recipes/:id", (req, res) => {
    const { id } = req.params;
    const { title, content, ingredients } = req.body;
  
    Recipe.findByIdAndUpdate(id, { title, content, ingredients }, { new: true })
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({ error: "Recipe not found" });
        }
        res.json(recipe);
      })
      .catch((err) => {
        console.error("Error updating recipe:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
  
  app.delete("/recipes/:id", (req, res) => {
    const { id } = req.params;
  
    Recipe.findByIdAndRemove(id)
      .then((recipe) => {
        if (!recipe) {
          return res.status(404).json({ error: "Recipe not found" });
        }
        res.json({ message: "Recipe deleted successfully" });
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
  const axios = require('axios');

const recipeData = {
  title: 'Chocolate Chip Cookies',
  content: 'Delicious homemade chocolate chip cookies',
  ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate chips', 'Baking soda', 'Salt', 'Vanilla extract', 'Egg']
};

axios.post('http://localhost:3000/recipes', recipeData)
  .then(response => {
    console.log('Recipe added successfully!');
    console.log('Added Recipe:', response.data);
  })
  .catch(error => {
    console.error('Error adding recipe:', error.response.data);
  });

  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
