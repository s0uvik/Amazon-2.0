import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../reduxStore/authSlice.js";

import googleIcon from "../assets/google-icon.png";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleSIgnin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      alert(error);
    });
  };

  const handleGoogleSignin = async () => {
    try {
      await googleSIgnin();
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(authAction.logoutUser());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className=" text-center flex flex-col gap-7 items-center  mt-10">
      <h1 className=" text-2xl md:text-3xl font-semibold">Sign In</h1>
      <div
        onClick={handleGoogleSignin}
        className=" cursor-pointer flex items-center gap-4 rounded-md shadow-lg overflow-hidden border-[#4578EE] text-slate-200 font-semibold h-14 border"
      >
        <img className=" w-10 ml-2" src={googleIcon} alt="" />
        <p className=" bg-[#4578EE] h-14 p-2 pt-3 ">Sign in with Google</p>
      </div>
      <button
        onClick={handleGoogleLogout}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Logout
      </button>{" "}
    </div>
  );
};

export default Signin;
