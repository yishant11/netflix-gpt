import { auth } from "../utils/firebase";
import {signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store => store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
    <img className="w-40"
    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="logo"
    /> 
    {user && (
    <div className="flex p-3">
      <img className="w-14 h-14"
      src={user.photoURL}
      alt="user-icon"
      />
      <button className="font-bold text-white" 
      onClick={handleSignOut}>
        (Sign Out)
      </button>
    </div>
  )}
  </div>
)};

export default Header;