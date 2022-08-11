import React from "react";
import { Category } from "../../../typeing";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
interface Props {
  foodCategory: Category[];
}
const FoodCategory = ({ foodCategory }: Props) => {
  const router = useRouter();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mt-12 w-[80%] h-[10vh] mx-auto">
      <h1 className="mb-6 text-2xl font-bold uppercase">Category</h1>
      <Carousel infinite={true} responsive={responsive}>
        {foodCategory.map((el) => {
          return (
            <div key={el.idCategory}>
              <div
                onClick={() => {
                  router.push(`/category/${el.strCategory}`);
                }}
                className="bg-red-600 hover:bg-red-800 transition-all duration-150 p-3 cursor-pointer uppercase font-semibold text-center mr-4 rounded-lg text-white"
              >
                {el.strCategory}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FoodCategory;
