import { Outlet } from "react-router-dom";
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";
import ThemeSwitcherDropdown from '../components/ThemeSwitcherDropdown';


import 'animate.css';
import MenuDropdown from "../components/MenuDropdown";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { FaCircleUser } from "react-icons/fa6";

const Layout = () => {
  const [ user ] = useAuthState(auth);

  return (
    <div className='w-full h-full max-w-[1440px] mx-auto px-4 max-[325px]:px-1 font-open-sans'>
      <div className="flex items-center gap-2">

        <div className="mr-auto bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInDown" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>

        {
          user?.displayName && (
            <div className="hidden md:flex md:gap-2 md:items-center text-primary">
              <FaCircleUser size={'1.5rem'} />
              <span>{ user?.displayName }</span>
            </div>
          )
        }

        <ThemeSwitcherDropdown />

        <MenuDropdown />
      </div>

      <Outlet />
    </div>
  )
}

export default Layout;