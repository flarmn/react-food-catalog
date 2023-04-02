import { API_URL } from "./config";
 
const getRecipeById = async (recipeId) =>{
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=7825623436b44d96b758428c6e88b7c2`)
    .then(response => response.json())
    return response;
}

const getAllCategories =  async () => {
const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7825623436b44d96b758428c6e88b7c2')
.then(response => response.json())
return response;
}

const getFilteredCategory = async (catName) => {
    const response = fetch(API_URL + 'filter.php?c=' + catName)
    return  await response.json();
}

export {getRecipeById, getAllCategories, getFilteredCategory }