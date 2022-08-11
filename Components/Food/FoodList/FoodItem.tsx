import React from "react";

interface Props {
  name: string;
  price: number;
  image: string;
  id: string;
}

const FoodItem = ({ name, id, price, image }: Props) => {
  return (
    <div className="bg-gray-300 rounded-lg overflow-hidden">
      <div>
        <img className=" rounded-lg" src={image} alt={name} />
      </div>
      <div className="p-4">
        <div className="truncate mb-3 text-lg font-semibold">{name}</div>
        <div className="text-2xl font-bold text-orange-700">${price}</div>
        <div className="flex mb-4 items-center justify-between mt-4">
          <button className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-800 transition duration-150 text-white font-bold">
            Details
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-800 transition duration-150 text-white font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
