import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import useFetchCurrentUserDoc from '../../hooks/useFetchCurrentUserDoc';

const daysOfWeek = new Map();
daysOfWeek.set(0, 'Sun');
daysOfWeek.set(1, 'Mon');
daysOfWeek.set(2, 'Tue');
daysOfWeek.set(3, 'Wed');
daysOfWeek.set(4, 'Thu');
daysOfWeek.set(5, 'Fri');
daysOfWeek.set(6, 'Sat');

const LastSevenDaysProgress = ({ activityIndex }) => {

  const [ activityProgress, setActivityProgress ] = useState([]);
  const [ user ] = useAuthState(auth);
  const userDoc = useFetchCurrentUserDoc(user?.email);

  useEffect(() => {
    const userActivities = userDoc?.activities;

    if (Array.isArray(userActivities) && userActivities.length > 0) {
        let date = new Date();
        let activities = [];

        for (let index = 7; index > 0; index--) {
            let isUserMarked = Object.values(userActivities[activityIndex])[0].includes(date.toDateString());
            let currentActivityProgress = {
                day: daysOfWeek.get(date.getDay()),
                isUserMarked
            }
            activities.push(currentActivityProgress);
            date = new Date(date.setDate(date.getDate() - 1));
        }

        setActivityProgress(activities.reverse());
    }

  }, [activityIndex, userDoc?.activities]);

  return (
    <div className="card max-w-[350px] max-[350px]:w-[300px] bg-base-300 shadow-xl">
        { userDoc?.activities && (
            <h5 className="font-open-sans text-lg text-primary animate__animated animate__fadeIn text-center pt-4">{ Object.keys(userDoc?.activities[activityIndex])[0] }</h5>
        )}
        <div className="card-body px-8 py-6 max-[350px]:p-4 ">
            <div className="flex justify-between gap-3">
                {
                    activityProgress?.map((current, index) => {
                        return (
                            <div key={index} className="w-[28px] flex flex-col items-center gap-3">
                                <progress className="progress progress-accent w-4 h-28" value={ current?.isUserMarked ? '100' : '0' } max="100"></progress>
                                <div className="text-base text-secondary">{ current?.day }</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default LastSevenDaysProgress