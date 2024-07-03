import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import useFetchCurrentUserDoc from "../../hooks/useFetchCurrentUserDoc";
import LastSevenDaysProgress from "./LastSevenDaysProgress";
import TotalCountStat from "./TotalCountStat";
import useFetchUsersCollection from "../../hooks/useFetchUsersCollection";
import { FaMedal } from "react-icons/fa";

const ActivitiyTracking = () => {
  const [ user ] = useAuthState(auth);
  const userDoc = useFetchCurrentUserDoc(user?.displayName);
  const usersData = useFetchUsersCollection('users');

  const day1 = new Date().toDateString(); // today
  const day2 = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();
  const day3 = new Date(new Date().setDate(new Date().getDate() - 2)).toDateString();
  const day4 = new Date(new Date().setDate(new Date().getDate() - 3)).toDateString();
  const day5 = new Date(new Date().setDate(new Date().getDate() - 4)).toDateString();
  const day6 = new Date(new Date().setDate(new Date().getDate() - 5)).toDateString();
  const day7 = new Date(new Date().setDate(new Date().getDate() - 6)).toDateString();

  const usersDataSource = usersData?.map(user => {

      const activityDWBr = user?.activities[0]['Date with breath'];
      const activityDWB = user?.activities[1]['Date with body'];
      const activityDWF = user?.activities[2]['Date with food'];
      const activityHBr = user?.activities[3]['Hourly breaths'];
      const activityCB = user?.activities[4]['Count blessings'];
      const activityTT = user?.activities[5]['Tough things'];

      let dateWithBreathCount = 0;
      let dateWithBodyCount = 0;
      let dateWithFoodCount = 0;
      let hourlyBreathsCount = 0;
      let countBlessingsCount = 0;
      let toughThingsCount = 0;


      [ day1, day2, day3, day4, day5, day6, day7 ]?.forEach((currentDay) => {
        [ activityDWBr, activityDWB, activityDWF, activityHBr, activityCB, activityTT ]?.forEach(( currentActivity, currentIndex) => {
          if (currentActivity?.includes(currentDay)) {
            if (currentIndex === 0) {
              dateWithBreathCount += 1;
            } else if (currentIndex === 1) {
              dateWithBodyCount += 1;
            } else if (currentIndex === 2) {
              dateWithFoodCount += 1;
            } else if (currentIndex === 3) {
              hourlyBreathsCount += 1;
            } else if (currentIndex === 4) {
              countBlessingsCount += 1;
            } else if (currentIndex === 5) {
              toughThingsCount += 1;
            }
          }
        })
      })

      const totalCount = dateWithBreathCount + dateWithBodyCount + dateWithFoodCount + hourlyBreathsCount + countBlessingsCount + toughThingsCount;
      const percentage = Math.round((totalCount / 42) * 100);

      const currentUser = {
        key: user?.displayName,
        name: user?.displayName,
        count: totalCount,
        percentage,
      }

      return currentUser;
  });

  usersDataSource?.sort((user1, user2) => user2.percentage - user1.percentage);

  // find all the unique percentages of users
  const userPercentages = [ ...new Set(usersDataSource?.map((user) => user.percentage)) ]; 

  // find the users with the top three percentages
  const rankOne = usersDataSource?.filter(user => user?.percentage === userPercentages[0])?.map(user => user?.name);
  const rankTwo = usersDataSource?.filter(user => user?.percentage === userPercentages[1])?.map(user => user?.name);
  const rankThree = usersDataSource?.filter(user => user?.percentage === userPercentages[2])?.map(user => user?.name);

  // data source for the leaderboard table
  const topRankHolders = userPercentages?.map((userPercentage, index) => {
    const ranks = [ rankOne, rankTwo, rankThree ];
    return {
      name: ranks[index]?.length > 0 ? ranks[index].join(', ') : ranks[index][0],
      percentage: userPercentage
    }
  });

  return (
    <div className="my-6 flex flex-col items-center gap-8 animate__animated animate__fadeInUp animate__delay-1s">
      <h4 className="font-open-sans text-center text-xl text-accent">Last 7 days activity tracking</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {
            userDoc?.activities?.map((activity, index) => <LastSevenDaysProgress key={Object.keys(activity)[0]} activityIndex={index} />)
          }
      </div>

      {
        topRankHolders?.length > 0 && (
          <>
            <h4 className="font-open-sans text-center text-xl text-accent">Leader board (Past seven days)</h4>

            <div className="overflow-x-auto w-full font-open-sans hidden lg:block ">
              <table className="table bg-neutral">
                {/* head */}
                <thead>
                  <tr className="text-base text-primary">
                    <th></th>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    topRankHolders?.map((currentUser, index) => (
                      currentUser?.percentage > 0 ? (
                        <tr className="text-base text-cyan-600" key={currentUser?.name || index}>
                          <td>{index + 1}</td>
                          <td className="font-bold" style={{ wordWrap: 'anywhere' }}>{ currentUser.name === user?.displayName ? `${currentUser?.name} (You)` : currentUser?.name }</td>
                          <td className="font-semibold">{currentUser.percentage}%</td>
                          <td><FaMedal className={`${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-300' : 'text-yellow-900'}`} size={'1.2rem'} /></td>
                        </tr>
                      ) : null
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto w-full font-open-sans flex flex-col justify-center items-center gap-4 lg:hidden">
                { topRankHolders?.map((currentUser, index) => (
                  currentUser?.percentage > 0 ? (
                    <div className="card bg-neutral w-96 max-[400px]:w-80 max-[325px]:w-72 shadow-xl" key={ currentUser?.name || index }>
                      <div className="card-body">
                        <h2 className="card-title text-primary">{ `Rank ${index + 1} `   }<FaMedal className={`${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-slate-300' : 'text-yellow-900'}`} size={'1.2rem'} /></h2>
                        <h5 className="text-accent">{ currentUser.name === user?.displayName ? `${currentUser?.name} (You)` : currentUser?.name }</h5>
                        <p className="font-semibold text-success">{ `${ currentUser?.percentage ?? '0%' }%` }</p>
                      </div>
                    </div>
                  ) : null
                )) }  
            </div>
          </>
        )
      }

      <TotalCountStat />

    </div>
  )
}

export default ActivitiyTracking