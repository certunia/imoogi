import api from "./index.js";

export async function getCocktails() {
  return api('get', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
     .then(data => {
       return data;
     });
}

export async function getNasa() {
  return api('get', 'https://api.nasa.gov/planetary/apod?api_key=8QM0zVNIDDypMrk0hJtowNpwFalxPWnRU5EZ9cj0')
    .then(data => {
      return data;
    });
}

export async function getImoogi() {
  return api('get', 'https://fastapi-production-b52e.up.railway.app/')
    .then(data => {
      return data;
    });
}
