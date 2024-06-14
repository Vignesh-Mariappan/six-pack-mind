import { FcGoogle } from "react-icons/fc";
import { RiMentalHealthFill } from "react-icons/ri";
import { Navigate } from "react-router-dom";
import MeditationLoginImg from '../assets/images/meditation-login.png';
import SixPackMindLogo from "../assets/logo/six-pack-mind-transparent.png";

// firebase imports for google authentication
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestoreDB, googleProvider } from '../firebase/config';

const LoginPage = () => {
  const [ user ] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      const signedInUser = await signInWithPopup(auth, googleProvider);
      const userRef = doc(firestoreDB, 'users', signedInUser?.user?.displayName);
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
    } catch (err) {
      console.error('Error signing in with google ', err);
    }
  }

  if (user) {
    return <Navigate to='/six-pack-mind/' />
  }

  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="hidden md:w-[50%] md:flex md:flex-col md:items-center md:justify-center md:gap-3">
        <div className="bg-no-repeat bg-contain bg-center w-[400px] h-[400px] animate__animated animate__bounceIn" style={{ backgroundImage: `url(${MeditationLoginImg})` }}></div>
        <h1 className="text-3xl max-[950px]:text-xl max-[1100px]:text-2xl font-normal text-primary animate__animated animate__fadeIn flex gap-2">
          <span>Peaceful mind throughout the day!!</span>
          <RiMentalHealthFill className="text-accent" />
        </h1>
        <h3 className="text-2xl max-[950px]:text-lg max-[1100px]:text-base text-secondary font-normal animate__animated animate__fadeInUp">Your everyday mental health app!</h3>
      </div>
      <div className="w-[100%] md:w-[50%] bg-neutral md:bg-white">
        <div className="flex h-full flex-col items-center justify-center gap-3">
          <div className="fixed top-3 right-3 bg-no-repeat bg-contain bg-center w-[150px] h-[150px] animate__animated animate__backInRight" style={{ backgroundImage: `url(${SixPackMindLogo})` }}></div>
          {/* <h1 className="text-4xl text-left font-bold text-accent">Peaceful mind throughout the day!!</h1>
          <h3 className="text-3xl text-success font-semibold">Your everyday mental health app!</h3> */}
          <div className="block md:hidden bg-no-repeat bg-contain bg-center w-[275px] h-[275px] animate__animated animate__bounceIn" style={{ backgroundImage: `url(${MeditationLoginImg})` }}></div>
          <h4 className="text-xl flex items-center justify-center gap-2 max-[360px]:hidden font-normal text-primary md:text-black animate__animated animate__fadeIn ">
            <span>Peaceful mind throughout the day!!</span>
            <RiMentalHealthFill className="text-accent block max-[360px]:hidden" />
          </h4>
          <h3 className="text-lg text-secondary md:text-neutral font-semibold animate__animated animate__fadeIn">Log in</h3>
          <button className="btn bg-white md:bg-transparent btn-outline border-2 hover:border-2 hover:border-black text-black btn-square btn-wide" onClick={ signInWithGoogle }>
            Continue with Google
            <FcGoogle size={'1.5rem'} />  
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage