import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DatePicker = ({ currentDate, setCurrentDate, setIsLoading }) => {

  const goToPreviousDate = () => {
    setIsLoading(true);
    let previousDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    setCurrentDate(previousDate);


    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }
    
  const goToNextDate = () => {
    setIsLoading(true);
    let nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    setCurrentDate(nextDate);

    setTimeout(() => {
        setIsLoading(false);
    }, 300);
  }

  const isCurrentDateEqualsToday = currentDate.toDateString() === new Date().toDateString();

  return (
    <div className="flex justify-center items-stretch my-5 animate__animated animate__fadeIn animate__delay-1s">
        <div className="p-3 bg-accent rounded-l-3xl cursor-pointer shadow-lg" onClick={goToPreviousDate}>
          <FaChevronLeft size={'1.5rem'} className="text-black" />
        </div>
        <div className="text-lg font-semibold font-open-sans bg-accent bg-opacity-25 text-accent px-4 py-2">{ currentDate.toDateString() }</div>
        <div className={`p-3 bg-accent rounded-r-3xl cursor-pointer shadow-lg ${ isCurrentDateEqualsToday && 'opacity-50 pointer-events-none'}`} onClick={goToNextDate}>
          <FaChevronRight size={'1.5rem'} className="text-black" />
        </div>
      </div>
  )
}

export default DatePicker