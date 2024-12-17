document.addEventListener('DOMContentLoaded', function() {
    const recipeSearch = document.getElementById('recipeSearch');
    const recipeContainer = document.getElementById('recipeContainer');

    const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=";

    async function fetchRecipes(query) {
        try {
            const response = await fetch(API_URL + query);
            const data = await response.json();
            displayRecipes(data.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    function displayRecipes(recipes) {
        recipeContainer.innerHTML = ''; // Clear the existing recipes
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" />
                <h2>${recipe.title}</h2>
                <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}" target="_blank">View Recipe</a>
            `;
            recipeContainer.appendChild(recipeCard);
        });
    }

    recipeSearch.addEventListener('input', function() {
        const query = recipeSearch.value;
        if (query.length >= 3) { // Fetch only after 3 characters
            fetchRecipes(query);
        }
    });
});
