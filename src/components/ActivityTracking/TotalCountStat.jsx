import React from 'react'
import useFetchCurrentUserDoc from '../../hooks/useFetchCurrentUserDoc';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';

const TotalCountStat = () => {
  const [ user ] = useAuthState(auth);
  const userDoc = useFetchCurrentUserDoc(user?.email);

  return (
    <>
        <h4 className="font-open-sans text-center text-xl text-accent animate__animated animate__fadeIn">Activity total count</h4>
        <div className='grid grid-cols-1 min-[335px]:grid-cols-2 min-[600px]:grid-cols-3 grid-flow-row gap-4 font-open-sans'>
            {
                userDoc?.activities && (
                    userDoc?.activities?.map(activity => {
                        const activityName = Object.keys(activity)[0];
                        const activityCount = Object.values(activity)[0].length;

                        return (
                            <div className="stats shadow bg-base-300" key={activityName}>
                                <div className="stat max-[400px]:p-4">
                                    <div className="stat-title max-[400px]:text-sm">{ activityName }</div>
                                    <div className="stat-value text-primary">{ activityCount }</div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    </>
  )
}

export default TotalCountStat