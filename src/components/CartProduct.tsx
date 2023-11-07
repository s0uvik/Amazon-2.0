import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
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

const CartProduct: React.FC<ProductProps> = ({ productInfo }) => {
  const { image, title, description, price } = productInfo;
  const RANDOM_NUMBER: number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const [rating] = useState<number>(RANDOM_NUMBER);

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(productInfo));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart(productInfo.id));
  };

  return (
    <div className="grid grid-cols-5 border-b-2 pb-2">
      <img
        className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-contain"
        src={image}
        alt=""
      />
      <div className=" col-span-3 mx-5 ">
        <p>{title}</p>
        <div className=" flex text-yellow-600">
          {Array(rating)
            .fill(1)
            .map((_, i) => (
              <AiFillStar key={i} />
            ))}
        </div>
        <p className=" text-sm md:line-clamp-3 line-clamp-1 mt-1">{description}</p>
        <p className=" mt-2 font-semibold">${price}</p>
      </div>
      <div className=" flex flex-col gap-2 justify-self-auto">
        {/* <button className="button" onClick={addToCartHandler}>
          Add more
        </button> */}
        <button className="button" onClick={removeItemHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
