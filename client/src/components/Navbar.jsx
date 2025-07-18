import React from "react";
// Using emoji and text instead of image logo
const logo = '';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBarItem = ({ title, classprops,menuLink }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}> <a href={menuLink}>  {title} </a></li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  const menuItems = {
    Home: "#",
    Donate: "#",
    Services: "#services",
    "Latest Donations": "#donations",
  };
  const menuArray = Object.entries(menuItems);



  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <a href="#" className="flex items-center">
          <span role="img" aria-label="chain" className="text-3xl text-[#2952e3]">🔗</span>
          <span className="text-white text-xl font-bold ml-2">TrustGrid</span>
        </a>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {menuArray.map(([key,value], index) => (
        
       
          <NavBarItem key={key + index} title={key} menuLink={value} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {menuArray.map(([key,value], index) => (
        <NavBarItem key={key + index} title={key} menuLink={value} />
      ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
