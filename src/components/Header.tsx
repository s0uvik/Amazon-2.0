import { auth } from "../firebase/firebase.js";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { authAction } from "../reduxStore/authSlice.js";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../reduxStore/hook.js";

const Header = () => {
  const authUser = useAppSelector((state) => state.authUser.authUser);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const displayName = authUser?.displayName.split(" ")[0];

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(authAction.setUser(currentUser));
    console.log(currentUser);
  });

  return (
    <header className="w-full  text-white ">
      <nav className="flex items-center justify-between p-2 bg-[#191d1d] ">
        {/* logo */}
        <Link to="/">
          <img
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            alt="header-logo"
            className=" cursor-pointer object-contain"
          />
        </Link>

        {/* search bar */}
        <div className="hidden sm:flex items-center rounded-md overflow-hidden bg-slate-500 flex-grow h-8 text-black mx-4">
          <input
            type="text"
            className=" flex-grow h-full p-2 focus:outline-none"
          />
          <span className=" text-xl bg-yellow-400 hover:bg-yellow-500 cursor-pointer p-1 h-full w-12">
            <AiOutlineSearch className="m-auto" />
          </span>
        </div>
        <div className=" flex items-center gap-4 text-sm whitespace-nowrap">
          <Link to="/login" className=" link">
            <p>{authUser ? `Hello ${displayName}` : "Sign In"}</p>
            <p className=" font-extrabold">Account & Lits</p>
          </Link>
          <Link to="/order" className=" link">
            <p>Return</p>
            <p className=" font-extrabold">&Order</p>
          </Link>
          <Link to="/cart" className=" link relative mt-2">
            <p className=" absolute bottom-6 left-3">{cart.length}</p>
            <AiOutlineShoppingCart className="text-3xl" />
          </Link>
          {authUser && (
            <img
              className=" w-10 rounded-full cursor-pointer"
              src={authUser?.photoURL}
              alt=""
            />
          )}
        </div>
      </nav>
      <nav className="flex item-center p-2 pl-4 space-x-3 bg-[#2f3636] text-sm ">
        <p className="link flex items-center gap-3">
          <AiOutlineMenu className="text-lg" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Todays Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </nav>
    </header>
  );
};

export default Header;
