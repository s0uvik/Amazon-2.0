"use client";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import prime from "../assets/prime.png";
import { useAppDispatch } from "../reduxStore/hook";
import { cartActions } from "../reduxStore/cartSlice";

type ProductProps = {
  key: number;
  productInfo: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const ProductCard: React.FC<ProductProps> = ({ productInfo }) => {
  const { title, price, category, image } = productInfo;
  const RANDOM_NUMBER: number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const [rating] = useState<number>(RANDOM_NUMBER);
  const [hasPrime] = useState<boolean>(Math.random() < 0.5);

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(productInfo));
  };

  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-6">
      <p className=" mr-2 text-sm italic text-gray-400">{category}</p>
      <img
        src={image}
        alt="product image"
        height={150}
        width={150}
        className=" object-contain w-[150px] h-[150px] mx-auto"
      />
      <h4 className=" my-2">{title}</h4>
      <div className="flex text-yellow-600">
        {Array(rating)
          .fill(1)
          .map((_, i) => {
            return <AiFillStar key={i} />;
          })}
      </div>
      <p className=" mb-4">${price}</p>
      {hasPrime && (
        <div className=" flex items-center mb-3  ">
          <img width={80} src={prime} alt="Prime Image" />
          <p className=" text-xs text-gray-500">Free Delivery</p>
        </div>
      )}
      <button className=" mt-auto button" onClick={addToCartHandler}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
