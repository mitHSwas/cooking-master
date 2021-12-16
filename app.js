displayMeal = () => {
    const searchLatter = document.getElementById('searchInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLatter}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const meals = data.meals;
        const mealsDiv = document.getElementById("container")
        meals.forEach(meals => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
                <img onClick= "displayMealDetails(${meals.idMeal})" src=${meals.strMealThumb}>
                <h3 onClick= "displayMealDetails(${meals.idMeal})">${meals.strMeal}</h3>
                `;
            mealDiv.className = "meal"
            mealsDiv.appendChild(mealDiv);
        });
    })
}
const displayMealDetails = id => {
    const mealDetails = document.getElementById('mealDetails');
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const meals = data.meals;
        mealDetails.innerHTML = `
            <img src=${meals[0].strMealThumb}>
            <h2>${meals[0].strMeal}</h2>
            <ul>
                <h3>Ingredients: </h3>
                <li>${meals[0].strIngredient1}</li>
                <li>${meals[0].strIngredient2}</li>
                <li>${meals[0].strIngredient3}</li>
                <li>${meals[0].strIngredient4}</li>
                <li>${meals[0].strIngredient5}</li>
                <li>${meals[0].strIngredient6}</li>
                <li>${meals[0].strIngredient7}</li>
                <li>${meals[0].strIngredient8}</li>
                <li>${meals[0].strIngredient9}</li>
            </ul>
            `;
    });
}