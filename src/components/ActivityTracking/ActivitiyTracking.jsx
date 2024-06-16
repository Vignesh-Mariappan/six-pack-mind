import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import useFetchCurrentUserDoc from "../../hooks/useFetchCurrentUserDoc";
import LastSevenDaysProgress from "./LastSevenDaysProgress";
import TotalCountStat from "./TotalCountStat";

const ActivitiyTracking = () => {
  const [ user ] = useAuthState(auth);
  const userDoc = useFetchCurrentUserDoc(user?.displayName);

  return (
    <div className="my-6 flex flex-col items-center gap-8 animate__animated animate__fadeInUp animate__delay-1s">
      <h4 className="font-open-sans text-center text-xl text-accent">Last 7 days activities</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {
            userDoc?.activities?.map((activity, index) => <LastSevenDaysProgress key={Object.keys(activity)[0]} activityIndex={index} />)
          }
      </div>

      <TotalCountStat />

    </div>
  )
}

export default ActivitiyTracking