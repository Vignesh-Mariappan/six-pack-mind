import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";
import PickYourMeditation from '../components/PickYourMeditation';
import ThemeSwitcherDropdown from '../components/ThemeSwitcherDropdown';

import 'animate.css';

const HomePage = () => {

  return (
    <div className='w-full h-full max-w-[1440px] mx-auto px-4 font-open-sans'>
      <div className="flex items-center justify-between gap-2">

        <div className="bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInDown" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>

        <ThemeSwitcherDropdown />
      </div>

      <PickYourMeditation />
    </div>
  )
}

export default HomePage