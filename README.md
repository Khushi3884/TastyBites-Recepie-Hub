# TastyBites Recipe Hub

TastyBites Recipe Hub is a web application that allows users to search for and explore recipes using the Spoonacular API. The application dynamically fetches recipe data based on the user's search input and displays relevant recipes with links to view the full recipe. This project was built using HTML, CSS, and JavaScript.

## Features

- **Search for Recipes**: Users can search for recipes by name. The search results are fetched from the Spoonacular API.
- **Responsive Design**: The app is designed to work seamlessly on both desktop and mobile devices.
- **Recipe Cards**: Each recipe is displayed in a card that includes the recipe’s image, title, and a link to the full recipe.
- **Live Recipe View**: By clicking on the "View Recipe" button, users are redirected to the full recipe page on Spoonacular.

## Technologies Used

- **HTML**: Used to structure the content of the webpage.
- **CSS**: Used to style the webpage and ensure responsiveness across devices.
- **JavaScript**: Used to interact with the Spoonacular API, fetch data, and dynamically populate the page with recipe information.

## API Integration

The app uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipe data based on the search query. The API provides detailed information about recipes, including images, ingredients, and cooking instructions.

### Spoonacular API Key

To make the app work, you'll need a valid API key from Spoonacular. You can get your API key by signing up at [Spoonacular API](https://spoonacular.com/food-api).

Once you have your API key, replace `YOUR_API_KEY` in the `script.js` file with your actual API key:

```javascript
const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=";
