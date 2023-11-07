import { useEffect } from "react";
import { useAppSelector } from "../reduxStore/hook";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const authUser = useAppSelector((state) => state.authUser.authUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser === null) navigate("/");
  });

  return <div>Order</div>;
};

export default Order;
