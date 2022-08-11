import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import FoodList from "../Components/Food/FoodList/FoodList";
import FoodCategory from "../Components/Food/FootCategory/FoodCategoryt";
import { category, meals } from "../Components/Helper/Request";

import MainPart from "../Components/LandingPage/MainPart/MainPart";
import SideBar from "../Components/LandingPage/SideBar/SideBar";
import { Category, Meals } from "../typeing";

interface Propos {
  categoryData: Category[];
  meals1: Meals[];
  meals2: Meals[];
  meals3: Meals[];
}

const HomePage: NextPage<Propos> = ({
  categoryData,
  meals1,
  meals2,
  meals3,
}) => {
  return (
    <div className="max-h-screen  ">
      <Head>
        <title>foodish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-6">
        <div className="col-span-1 sticky top-0 h-screen w-[100%] sidebar ">
          <SideBar />
        </div>
        <div className="col-span-5 h-auto">
          <MainPart />
          <FoodCategory foodCategory={categoryData} />
          <FoodList meals1={meals1} meals2={meals2} meals3={meals3} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryData = await category();
  const meals1 = await meals("beef");
  const meals2 = await meals("chicken");
  const meals3 = await meals("dessert");
  return {
    props: {
      categoryData,
      meals1,
      meals2,
      meals3,
    },
  };
};

export default HomePage;
