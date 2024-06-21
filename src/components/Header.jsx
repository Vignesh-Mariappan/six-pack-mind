import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { FaCircleUser } from "react-icons/fa6";
import ThemeSwitcherDropdown from "./ThemeSwitcherDropdown";
import MenuDropdown from "./MenuDropdown";
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";

const Header = () => {
  const [ user ] = useAuthState(auth);

  return (
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
  )
}

export default Header