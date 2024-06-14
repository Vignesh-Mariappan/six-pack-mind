import { Outlet } from "react-router-dom";
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";
import ThemeSwitcherDropdown from '../components/ThemeSwitcherDropdown';


import 'animate.css';
import MenuDropdown from "../components/MenuDropdown";

const Layout = () => {

  return (
    <div className='w-full h-full max-w-[1440px] mx-auto px-4 font-open-sans'>
      <div className="flex items-center gap-2">

        <div className="mr-auto bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInDown" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>

        <ThemeSwitcherDropdown />

        <MenuDropdown />
      </div>

      <Outlet />
    </div>
  )
}

export default Layout;