//1. Fetch categories
//2. Visualize all categories

const categoriesFilterDiv = document.getElementById("detailed-categories-filter");
const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/"

const categoriesEndPoint = "/categories.php";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

function createCategoryElement(categoryObj) {
    const {strCategory, strCategoryThumb} = categoryObj;

    const categoryDiv = document.createElement('div');
    categoryDiv.className = "category-box";

    const categoryThumb = document.createElement('img');
    categoryThumb.setAttribute('src', strCategoryThumb);

    categoryThumb.setAttribute('alt' , `${strCategory} category image`);

    categoryDiv.appendChild(categoryThumb);
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