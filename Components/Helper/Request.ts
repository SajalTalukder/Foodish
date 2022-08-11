export const category = async () => {
  const data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const categoryDataObj = await data.json();
  const categoryData = categoryDataObj.categories;
  return categoryData;
};

export const searchMeal = async (name: string | string[]) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  const searchData = await data.json();
  return searchData.meals;
};

export const meals = async (name: string | string[]) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  const meals = await data.json();
  return meals.meals;
};
