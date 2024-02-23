import { useEffect, useRef, useState } from "react";
import close from "../assets/close.svg";
import hamburger from "../assets/hamburgerMenu.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../features/user/userSlice";

const NavbarItem = ({ title, dropdownItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState({});

  const handleHover = () => {
    setIsHovered(true);
    clearTimeout(timeoutIds[title]);
  };

  const handleLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 100); // 5000 milliseconds (5 seconds)

    setTimeoutIds((prevTimeoutIds) => ({
      ...prevTimeoutIds,
      [title]: id,
    }));
  };

  return (
    <li
      className={`group relative ${isHovered ? "hover" : ""}`} onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <button
        id={`${title.toLowerCase()}DropdownButton`}
        className="pb-6 sm:text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none font-medium rounded-lg text-sm inline-flex items-center relative group"
        type="button"
      >
        {title}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id={`${title.toLowerCase()}Dropdown`}
        className={`z-10 ${isHovered ? "block" : "hidden"} bg-[#650e32] divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-0 mt-1`}
      >
        <ul className="py-2 text-sm text-gray-700" aria-labelledby={`${title.toLowerCase()}DropdownButton`}>
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="block px-4 py-2 hover:bg-yellow-500 text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );  
};
function Header() {
  const [navbar, setNavbar] = useState(false);
  const text = useRef("Login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const string = localStorage.getItem("user")
  const user = JSON.parse(string);

  const handleLoginButton = () =>{
    if(user?._id){
      dispatch(logoutuser())
      localStorage.removeItem("user")
      navigate("/login")
    }
    else{
      navigate("/login")
    }}
  useEffect(()=>{
    if(user?._id){
      text.current = "Logout"
    }
  },[user])
  return (
    <div className="w-full">
      <nav className={`sm:mx-auto ${navbar ? "bottom-[-80px]" : ""} bg-slate-600   left-0 right-0 z-10`}>
        <div className="justify-between sm:flex-row-reverse  mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex items-center sm:pt-2  flex-row-reverse sm:flex  justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <div className="flex justify-end">

                <div className=" relative sm:flex bg-customColor px-3 py-2 text-white">
                  <Link
                    to="/cart"
                    className={`text-sm sm:mr-10 font-medium hover:underline underline-offset-4 cursor-pointer`}
                  >
                    <svg className="h-8 p-1 hover:text-green-500 duration-200" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" className=""></path></svg>
                  </Link>
                  <button onClick={handleLoginButton}  >
                    {text.current}
                  </button>
                </div>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img src={close} width={30} height={30} alt="logo" />
                  ) : (
                    <img
                      src={hamburger}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 sm:mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "md:p-0 block absolute bg-slate-600 m-0 w-full z-50" : "hidden"}`}>
              <ul className={`${navbar ? "flex flex-col items-center" : "h-screen md:h-auto items-center justify-center md:flex"} `}>
                <Link  className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} to="/clothing"> Clothing </Link>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} to="/electronics"> Electronics </Link>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} to="/shoes"> Shoes </Link>
                <Link className={`pb-6 sm:text-white py-2 md:px-6 text-center ${navbar ? "" : "border-b-2 md:border-b-0 hover:bg-[#650e32] border-[#650e32] md:hover:text-[#650e32] md:hover:bg-transparent focus:outline-none"} font-medium rounded-lg text-sm inline-flex items-center relative group`} to="/accessories"> Accessories </Link>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col"></div>
    </div>
  );
}

export default Header;