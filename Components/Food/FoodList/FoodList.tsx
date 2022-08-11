import React from "react";
import { Meals } from "../../../typeing";
import FoodItem from "./FoodItem";

interface Props {
  meals1: Meals[];
  meals2?: Meals[];
  meals3?: Meals[];
}

const FoodList = ({ meals1, meals2, meals3 }: Props) => {
  const firestTenMeals1 = meals1.slice(0, 10);
  const firestTenMeals2 = meals2?.slice(0, 10);
  const firestTenMeals3 = meals3?.slice(0, 10);

  return (
    <div className="w-[80%] mb-10 mt-20 mx-auto">
      <div>
        <div className="mb-8 text-2xl font-bold uppercase">Beef</div>
        <div className="grid grid-cols-3 gap-8 items-center justify-between">
          {firestTenMeals1.map((el) => (
            <FoodItem
              key={el.idMeal}
              price={Math.floor(Math.random() * (30 - 10 + 1)) + 10}
              image={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-8 mt-8 text-2xl font-bold uppercase">chicken</div>
        <div className="grid grid-cols-3 gap-8 items-center justify-between">
          {firestTenMeals2?.map((el) => (
            <FoodItem
              price={Math.floor(Math.random() * (30 - 10 + 1)) + 10}
              image={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
              key={el.idMeal}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-8 mt-8 text-2xl font-bold uppercase">Dessert</div>
        <div className="grid grid-cols-3 gap-8 items-center justify-between">
          {firestTenMeals3?.map((el) => (
            <FoodItem
              key={el.idMeal}
              price={Math.floor(Math.random() * (30 - 10 + 1)) + 10}
              image={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
