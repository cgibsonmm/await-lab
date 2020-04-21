// Async Await Lab
// (API Docs)[https://recipix.app/api/docs]

// PART 1: Read Recipe Name
findRecipes('banana');
async function findRecipes(recipeName) {
  // read recipe
  let response = await axios.get(
    `https://recipix.app/api/search/?q=${recipeName}`
  );

  // document.getElementById('recipe-title').innerHTML = ???
  // document.getElementById('recipe-url').href = ???

  // showIngredients( ??? );
}

// PART 2: Read Recipe Ingredients
function showIngredients(recipe) {
  // show the ingredients
  // iterare over the response data
  // insert each ingredient into the DOM.
  // choose whichever type of iterator for each ingredient..
  let ingredients = recipe.ingredients;
  document.getElementById('recipe-ingredients').innerHTML = '';
  ingredients.forEach(function(ingredient) {
    let listItem = document.createElement('li');
    // listItem.innerHTML = ???
    // listItem.addEventListener('???', ???);
    document.getElementById('recipe-ingredients').append(listItem);
  });
  // return ingredients;
}

// PART 3: Display Recipe from Ingredients

// For each ingredient displayed, add a `click` event listener that
// will search for new recipes, using the selected ingredient.
// HINT: Check out line 29!

// PART 4: Display Multiple Recipes

// Each time we request recipes, we get an array inside the `results` array.
// How would you display all ten `results` at once?
// Use the existing functions `findRecipes` and `showIngredients` to display all ten recipe results.

// PART 5 - Display Search bar results

// Try to display recipes using a search bar for text input.
// HINT: Start by uncommenting the search bar in index.html
