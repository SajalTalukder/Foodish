import { GetServerSideProps } from "next";
import React from "react";
import { mealDetails } from "../../Components/Helper/Request";
import { MealDetails } from "../../typeing";

interface Porps {
  mealDetail: MealDetails[];
  id: string;
}
const DetailsPage = ({ mealDetail, id }: Porps) => {
  console.log(mealDetails, id);

  return <div>DetailsPage</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.query?.id || "";
  const mealDetail = await mealDetails(id);
  return {
    props: {
      mealDetail,
      id,
    },
  };
};

export default DetailsPage;
