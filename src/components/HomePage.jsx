import PickYourMeditation from './PickYourMeditation';
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";

import 'animate.css';

const HomePage = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4'>
      <div className="bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInDown" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>

      <PickYourMeditation />
    </div>
  )
}

export default HomePage