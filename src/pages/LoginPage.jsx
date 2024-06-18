import { FcGoogle } from "react-icons/fc";
import { RiMentalHealthFill } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { Navigate } from "react-router-dom";
// import MeditationLoginImg from '../assets/images/meditation-login.png';
import MeditationLoginImg from '../assets/images/wellness-practice.png';
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";
import { RiBrainLine } from "react-icons/ri";
// firebase imports for google authentication
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestoreDB, googleProvider } from '../firebase/config';

const LoginPage = () => {
  const [ user ] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      const signedInUser = await signInWithPopup(auth, googleProvider);
      const userRef = doc(firestoreDB, 'users', signedInUser?.user?.displayName);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: signedInUser?.user.email,
          displayName: signedInUser?.user.displayName,
          activities: [
            { 'Date with breath': [] },
            { 'Date with body': [] },
            { 'Date with food': [] },
            { 'Hourly breaths': [] },
            { 'Count blessings': [] },
            { 'Tough things': [] },
          ]
        });
      }
    } catch (err) {
      console.error('Error signing in with google ', err);
    }
  }

  if (user) {
    return <Navigate to='/' />
  }

  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="hidden md:w-[50%] md:flex md:flex-col md:items-center md:justify-center md:gap-4 relative">
        <div className="bg-no-repeat bg-contain bg-center w-[400px] h-[400px] landscape:hidden animate__animated animate__bounceIn" style={{ backgroundImage: `url(${MeditationLoginImg})` }}></div>
        <PiStarFourFill className="absolute animate-pulse top-20 left-20 rotate-0 text-primary" size={'1.5rem'} />
        <PiStarFourFill className="absolute animate-pulse bottom-10 left-1/2 rotate-45 text-primary" size={'1.5rem'} />
        <PiStarFourFill className="absolute animate-pulse top-24 right-20 rotate-12 text-primary" size={'1.5rem'} />
        <RiBrainLine className="absolute top-12 left-1/2 text-secondary animate__animated animate__fadeInDown" size={'2.5rem'} />
        <h1 className="text-2xl max-[950px]:text-lg max-[1150px]:text-xl font-normal text-primary animate__animated animate__bounceIn flex items-center justify-center gap-2 font-merri-weather transition-all">
          <span><span className="bg-accent text-accent-content p-1 rounded-sm"><strong>Peaceful mind</strong></span> throughout the day!</span>
          <RiMentalHealthFill size={'1.5rem'} className="text-accent" />
        </h1>
        <h3 className="text-xl max-[950px]:text-base max-[1150px]:text-lg text-secondary font-normal animate__animated animate__fadeInUp font-merri-weather transition-all">Your everyday <span className="bg-secondary text-secondary-content p-1 rounded-sm"><strong>mental health app!</strong></span></h3>
      </div>
      <div className="w-[100%] md:w-[50%] bg-neutral md:bg-neutral relative">
        <div className="flex h-full flex-col items-center justify-center gap-3">
        <PiStarFourFill className="absolute md:hidden animate-pulse top-40 left-10 rotate-0 text-primary" size={'1.5rem'} />
        {/* <PiStarFourFill className="absolute md:hidden animate-pulse bottom-10 left-1/2 rotate-45 text-primary" size={'1.5rem'} /> */}
        <PiStarFourFill className="absolute md:hidden animate-pulse top-40 right-10 rotate-12 text-primary" size={'1.5rem'} />
        
          <div className="fixed top-3 right-3 bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInRight" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>
          <div className="block md:hidden bg-no-repeat bg-contain bg-center w-[275px] h-[275px] landscape:hidden animate__animated animate__bounceIn" style={{ backgroundImage: `url(${MeditationLoginImg})` }}></div>
          <h4 className="text-lg flex items-center justify-center gap-2 md:hidden max-[360px]:hidden font-normal text-primary animate__animated animate__fadeIn font-merri-weather transition-all">
            <span><span className="bg-accent text-accent-content p-1 rounded-sm"><strong>Peaceful mind</strong></span> throughout the day!!</span>
            <RiMentalHealthFill className="text-accent block max-[360px]:hidden" />
          </h4>
          <h3 className="text-lg text-secondary md:text-neutral-content font-semibold animate__animated animate__fadeIn">Log in</h3>
          <button className="btn bg-white md:bg-white btn-outline border-2 hover:border-2 hover:border-black text-black btn-square btn-wide" onClick={ signInWithGoogle }>
            Continue with Google
            <FcGoogle size={'1.5rem'} />  
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage