import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import FoodItem from "../../Components/Food/FoodList/FoodItem";
import FoodList from "../../Components/Food/FoodList/FoodList";
import FoodCategory from "../../Components/Food/FootCategory/FoodCategoryt";
import { category, meals } from "../../Components/Helper/Request";
import MainPart from "../../Components/LandingPage/MainPart/MainPart";
import SideBar from "../../Components/LandingPage/SideBar/SideBar";
import { Category, Meals } from "../../typeing";

interface Props {
  cat: string;
  meals1: Meals[];
  categoryData: Category[];
}
const CategoryPage = ({ cat, categoryData, meals1 }: Props) => {
  let content;

  if (meals1) {
    content = meals1?.map((el) => (
      <FoodItem
        price={Math.floor(Math.random() * (30 - 10 + 1)) + 10}
        image={el.strMealThumb}
        name={el.strMeal}
        id={el.idMeal}
        key={el.idMeal}
      />
    ));
  }

  return (
    <div className="max-h-screen  ">
      <Head>
        <title>foodish - {cat}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-6">
        <div className="col-span-1 w-[100%] sidebar ">
          <SideBar />
        </div>
        <div className="col-span-5  h-auto">
          <MainPart />
          <FoodCategory foodCategory={categoryData} />
          <div className="w-[80%] mx-auto mt-20 mb-10">
            <div className="flex items-center space-x-2">
              <h1 className="mb-8 text-2xl font-bold uppercase">{cat}</h1>
              <h1 className="mb-8">
                ({meals1 ? meals1.length : 0} Items Found)
              </h1>
            </div>
            <div className="grid  grid-cols-3 gap-8 items-center justify-between">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cat = context?.query?.name || "";
  const categoryData = await category();
  const meals1 = await meals(cat);
  return {
    props: {
      categoryData,
      cat,
      meals1,
    },
  };
};

export default CategoryPage;
