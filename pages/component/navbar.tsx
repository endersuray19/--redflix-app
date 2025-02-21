import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./mobileMenu";
import NavbarItems from "./navbarItem";
import { BsChevronUp } from "react-icons/bs";
import { BsSearch,BsBell } from "react-icons/bs";
import AccountMenu from "./accountMenu";

const TOP_OFFSET =66;
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [shadowBackground, setShadowBackground] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.screenY >= TOP_OFFSET){
        setShadowBackground(true);
      }
      else{
        setShadowBackground(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleMenuAccount = useCallback(()=>{
    setShowAccountMenu((current)=>!current)
  },[]);
  return (
    <nav className="w-full fixed z-40 ">
      <div className={`px-4 md:px-4 py-6 flex flex-row items-center transition duration-500 ${shadowBackground  ?' bg-zinc-900 bg-opacity-90':''} `}>
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItems label="Home" />
          <NavbarItems label="Series" />
          <NavbarItems label="Film" />
          <NavbarItems label="New & Popular" />
          <NavbarItems label="My List" />
          <NavbarItems label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronUp className={`text-white transition ${showMobileMenu ? 'rotate-180':'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="font-bold mr-5 text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch/>
          </div>
          <div className="font-bold mr-3 text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell/>
          </div>
          <div onClick={toggleMenuAccount} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                <img src="/images/default-blue.png" alt="profile"/>
            </div>
           <BsChevronUp className={`text-white transition ${showAccountMenu ? 'rotate-180':'rotate-0'}`} />
           <AccountMenu visible={showAccountMenu}/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
