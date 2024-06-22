import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestoreDB } from "../firebase/config";
import useFetchCurrentUserDoc from "../hooks/useFetchCurrentUserDoc";
import DatePicker from "../components/DatePicker";
import ActivitiyTracking from "../components/ActivityTracking/ActivitiyTracking";

import useSound from 'use-sound';
import dingSound from '../assets/audios/Ending_sounds/ding.mp3';

const BlessedConsciousnessPage = () => {

  const [ user ] = useAuthState(auth);
  const userDoc = useFetchCurrentUserDoc(user?.displayName);
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ isLoading, setIsLoading ] = useState(false);
  
  const [ isDateWithBreathMarked, setIsDateWithBreathMarked ] = useState(false);
  const [ isDateWithBodyMarked, setIsDateWithBodyMarked ] = useState(false);
  const [ isDateWithFoodMarked, setIsDateWithFoodMarked ] = useState(false);
  const [ isHourlyBreathsMarked, setIsHourlyBreathsMarked ] = useState(false);
  const [ isCountBlessingsMarked, setIsCountBlessingsMarked ] = useState(false);
  const [ isToughThingsMarked, setIsToughThingsMarked ] = useState(false);

  const [ playDing ] = useSound(dingSound)

  useEffect(() => {
    const userActivities = userDoc?.activities;

    if(userActivities) {

      const [ 
        blessedConsciousnessActivityOne,
        blessedConsciousnessActivityTwo,
        blessedConsciousnessActivityThree,
        blessedConsciousnessActivityFour,
        blessedConsciousnessActivityFive,
        blessedConsciousnessActivitySix,
      ] = userActivities;


      setIsDateWithBreathMarked(blessedConsciousnessActivityOne['Date with breath']?.includes(currentDate?.toDateString()) || false);
      setIsDateWithBodyMarked(blessedConsciousnessActivityTwo['Date with body']?.includes(currentDate?.toDateString()) || false);
      setIsDateWithFoodMarked(blessedConsciousnessActivityThree['Date with food']?.includes(currentDate?.toDateString()) || false);
      setIsHourlyBreathsMarked(blessedConsciousnessActivityFour['Hourly breaths']?.includes(currentDate?.toDateString()) || false);
      setIsCountBlessingsMarked(blessedConsciousnessActivityFive['Count blessings']?.includes(currentDate?.toDateString()) || false);
      setIsToughThingsMarked(blessedConsciousnessActivitySix['Tough things']?.includes(currentDate?.toDateString()) || false);
    }

  }, [currentDate, userDoc]);

  const onBlessedActivityMarked = async (event) => {
    const activityId = event.target.id;
    const userActivities = [ ...userDoc.activities ];
    if (Array.isArray(userActivities) && userActivities.length > 0) {
      switch (activityId) {
        case 'bca01':
          if(isDateWithBreathMarked) {
            userActivities[0]['Date with breath'] = userActivities[0]['Date with breath'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithBreathMarked(false);
          } else {
            userActivities[0]['Date with breath'] = [...userActivities[0]['Date with breath'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithBreathMarked(true);
            playDing();
          }
          break;

        case 'bca02':
          if(isDateWithBodyMarked) {
            userActivities[1]['Date with body'] = userActivities[1]['Date with body'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithBodyMarked(false);
          } else {
            userActivities[1]['Date with body'] = [...userActivities[1]['Date with body'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithBodyMarked(true);
            playDing();
          }
          break;

        case 'bca03':
          if(isDateWithFoodMarked) {
            userActivities[2]['Date with food'] = userActivities[2]['Date with food'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithFoodMarked(false);
          } else {
            userActivities[2]['Date with food'] = [...userActivities[2]['Date with food'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsDateWithFoodMarked(true);
            playDing();
          }
          break;

        case 'bca04':
          if(isHourlyBreathsMarked) {
            userActivities[3]['Hourly breaths'] = userActivities[3]['Hourly breaths'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsHourlyBreathsMarked(false);
          } else {
            userActivities[3]['Hourly breaths'] = [...userActivities[3]['Hourly breaths'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsHourlyBreathsMarked(true);
            playDing();
          }
          break;

        case 'bca05':
          if(isCountBlessingsMarked) {
            userActivities[4]['Count blessings'] = userActivities[4]['Count blessings'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsCountBlessingsMarked(false);
          } else {
            userActivities[4]['Count blessings'] = [...userActivities[4]['Count blessings'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsCountBlessingsMarked(true);
            playDing();
          }
          break;

        case 'bca06':
          if(isToughThingsMarked) {
            userActivities[5]['Tough things'] = userActivities[5]['Tough things'].filter(date => date!== currentDate?.toDateString());
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsToughThingsMarked(false);
          } else {
            userActivities[5]['Tough things'] = [...userActivities[5]['Tough things'], currentDate?.toDateString() ];
            await setDoc(doc(firestoreDB, 'users', user?.displayName), {
              activities: userActivities
            }, {
              merge: true
            });
            setIsToughThingsMarked(true);
            playDing();
          }
          break;

        default:
          break;
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="font-open-sans text-xl md:text-3xl text-primary animate__animated animate__fadeInDown">Blessed Consciousness</h3>
      <h4 className="font-open-sans text-lg md:text-xl text-secondary animate__animated animate__fadeIn">Track activities for the day</h4>

      <DatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} setIsLoading={setIsLoading} />

      {/* Activities & Checkboxes */}
      <div className="flex flex-col justify-center items-center w-full max-w-[200px] gap-4 animate__animated animate__fadeIn animate__delay-1s" onClick={onBlessedActivityMarked}>
        { !isLoading ? (
          <>
            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca01" className="font-open-sans text-base text-cyan-600">Date with breath</label>
              <input checked={isDateWithBreathMarked} type="checkbox" name="bca01" id="bca01" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>

            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca02" className="font-open-sans text-base text-cyan-600">Date with body</label>
              <input checked={isDateWithBodyMarked} type="checkbox" name="bca02" id="bca02" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>

            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca03" className="font-open-sans text-base text-cyan-600">Date with food</label>
              <input checked={isDateWithFoodMarked} type="checkbox" name="bca03" id="bca03" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>

            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca04" className="font-open-sans text-base text-cyan-600">Hourly breaths</label>
              <input checked={isHourlyBreathsMarked} type="checkbox" name="bca04" id="bca04" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>

            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca05" className="font-open-sans text-base text-cyan-600">Count blessings</label>
              <input checked={isCountBlessingsMarked} type="checkbox" name="bca05" id="bca05" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>

            <div className="flex gap-4 items-center justify-between w-full">
              <label htmlFor="bca06" className="font-open-sans text-base text-cyan-600">Tough things</label>
              <input checked={isToughThingsMarked} type="checkbox" name="bca06" id="bca06" className="checkbox checkbox-md border-rose-500 checked:border-cyan-600 [--chkbg:theme(colors.cyan.600)] [--chkfg:black]" />
            </div>
          </>
        ) : <span className="loading h-[225px] loading-spinner text-info"></span> }
      </div>

      {/* Data Visualization */}
      <ActivitiyTracking />
    </div>
  )
}

export default BlessedConsciousnessPage