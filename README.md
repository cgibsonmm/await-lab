# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Async Await - Recipe Lab

<img src="https://media.giphy.com/media/4lQnwnB9hVXlm/giphy.gif" height='200px' />

## Exercise Labs

- EXERCISE: Fetching Recipes - 5min
- EXERCISE: Fetching Ingredients - 10min
- EXERCISE: Fetching Recipes from Ingredients - 15min
- EXERCISE: Fetching Multiple Recipes - 15min

## Overview of key words

- `async`
- `await`
- `try/catch`

```
try {
  // request
} catch(err) {
  console.log(err);
}
```

## Intro To Recipix Lab

**Become a Master Chef!**

> Welcome, Developer! Today we are testing a new Recipe API.

<details>
  <summary><strong>Q: How do we fetch async data?</strong></summary>

A: `try` to use `await` in an `async` function.

```javascript
async function fetchData() {
  try {
    let response = api.get('https://recipix.app/search?q=banana');
    let result = await response.data;
  } catch (err) {
    console.log(err);
  }
}
```

B: Or we could use `.then()` syntax.

```javascript
function fetchData() {
  let response = api
    .get('https://recipix.app/search?q=banana')
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
}
```

</details>

## PART 1 - Fetch Recipe Data

Using an async request, show a recipe's title and link on your website.

```javascript
async function findRecipes(recipeName) {
  // read recipe
  let response = await axios.get(
    `https://recipix.app/api/search/?q=${recipeName}`
  );

  // document.getElementById('recipe-title').innerHTML = ???
  // document.getElementById('recipe-url').href = ???

  return response;
}
```

## PART 2 - Display Recipe Ingredients

Show all the current recipe's ingredients.

```javascript
function showIngredients(recipe) {
  // ???
}
```

## PART 3 - Display Recipe from Ingredients

For each ingredient displayed, add the `click` event listener that will search for new recipes, using the selected ingredient.

## PART 4 - Display Multiple Recipes

Each time we request recipes, we get an array inside the `results` array.
How would you display all ten `results` at once?
Use the existing functions `findRecipes` and `showIngredients` to display all ten recipe results.

## PART 5 - Display Search bar results

Try to display recipes using a search bar for text input.
HINT: Start by uncommenting the search bar in index.html

## Resources

- [Async Await](https://javascript.info/async-await)
- [Recipix API Docs](https://recipix.app/api/docs)
