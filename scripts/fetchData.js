const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/"
const categoriesEndPoint = "/categories.php";
const filterEndPoint = "/filter.php"


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function fetchMealsbyCategory(category) {
    try {
        const url = apiBaseUrl + filterEndPoint + "?c=" + category;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export {apiBaseUrl,categoriesEndPoint, fetchMealsbyCategory};
export default fetchData;