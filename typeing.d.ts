interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

interface Meals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface MealDetails {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}

export { Category, Meals, MealDetails };
