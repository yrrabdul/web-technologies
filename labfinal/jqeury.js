$(document).ready(function() {
    function getRecipes() {
      $.ajax({
        url: "http://localhost:3000/recipes",
        type: "GET",
        success: function(recipes) {
          $("#recipe-list").empty();
  
          recipes.forEach(function(recipe) {
            var listItem = $("<li>");
            var titleHeading = $("<h3>").text(recipe.title);
            listItem.append(titleHeading);
  
            var contentParagraph = $("<p>").text(recipe.content);
            listItem.append(contentParagraph);
  
            var ingredientList = $("<ul>");
  
            recipe.ingredients.forEach(function(ingredient) {
              var ingredientItem = $("<li>").text(ingredient);
              ingredientList.append(ingredientItem);
            });
  
            listItem.append(ingredientList);
  
            $("#recipe-list").append(listItem);
          });
        },
        error: function() {
          console.error("Error fetching recipes.");
        }
      });
    }
  
    getRecipes();
  });
  