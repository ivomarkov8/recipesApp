//1. Fetch categories
//2. Visualize all categories
import fetchData, {apiBaseUrl, categoriesEndPoint, fetchMealsbyCategory} from "./fetchData.js";

const categoriesFilterDiv = document.getElementById("detailed-categories-filter");
const resultsContainer = document.getElementById("results-container");

// function createMealPreviewElement(meal) {
//     const { idMeal, strMealThumb } = meal;
//     const recipeDiv = document.createElement("div");
//     recipeDiv.className = ""
// } get from gitHub


    async function showMealsByCategory(category) {
        const { meals } = await fetchMealsbyCategory(category);
        resultsContainer.innerHTML = "";
        meals.forEach((recipe) => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = "category-box";
            recipeDiv.setAttribute("id", recipe.idMeal);

            const recipeImg = document.createElement("img");
            recipeImg.setAttribute("src", recipe.strMealThumb);

            recipeDiv.appendChild(recipeImg);
            resultsContainer.appendChild(recipeDiv);
        });
    }

function createCategoryElement(categoryObj) {
    const {strCategory : title, strCategoryThumb: imgSrc} = categoryObj;

    const categoryDiv = document.createElement('div');
    categoryDiv.className = "category-box";
    categoryDiv.addEventListener("click", () => showMealsByCategory(title));

    const categoryThumb = document.createElement('img');
    categoryThumb.setAttribute('src', imgSrc);

    categoryThumb.setAttribute('alt' , `${title} category image`);

    const categoryTitle = document.createElement("h4");
    categoryTitle.textContent = title;

    categoryDiv.appendChild(categoryThumb);
    categoryDiv.appendChild(categoryTitle);
    return categoryDiv;
}

async function main() {
   const { categories } = await fetchData(apiBaseUrl + categoriesEndPoint);
   
   categories.forEach((el) => {
    const newCategoryEl = createCategoryElement(el);
    categoriesFilterDiv.appendChild(newCategoryEl);
   });
}

main();