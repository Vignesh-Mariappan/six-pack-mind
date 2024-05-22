import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { AUDIOS } from "../assets/audios";

const PickYourMeditation = () => {
  const [ selectedMeditation, setSelectedMeditation ] = useState(1);
  const meditationTypeClasses = `p-4 sm:basis-1/3 lg:basis-0 text-center font-black flex-1 text-[16px] text-white rounded-md cursor-pointer`;
  const outlineClasses = `outline outline-primary outline-3 outline-offset-4`;
  const [ selectedMeditationAudios, setSelectedMeditationAudios ] = useState(AUDIOS["Well Being First"]);
  const [ currentPlayingAudioId, setCurrentPlayingAudioId ] = useState(null);

  const meditationTypeClickHandler = event => {
    switch(event.target.textContent) {
      case "Well Being First":
        setSelectedMeditation(1);
        setSelectedMeditationAudios(AUDIOS["Well Being First"]);
        break;
      case "No Big Deal":
        setSelectedMeditation(2);
        setSelectedMeditationAudios(AUDIOS["No Big Deal"]);
        break;
      case "No Fake Needs":
        setSelectedMeditation(3);
        setSelectedMeditationAudios(AUDIOS["No Fake Needs"]);
        break;
      case "Avoid Limiting Habits":
        setSelectedMeditation(4);
        setSelectedMeditationAudios(AUDIOS["Avoid Limiting Habits"]);
        break;
      case "Severely Blessed":
        setSelectedMeditation(5);
        setSelectedMeditationAudios(AUDIOS["Severely Blessed"]);
        break;
      default:
        setSelectedMeditation(1);
        setSelectedMeditationAudios(AUDIOS["Well Being First"]);
        break;
    }
  }

  return (
    <div className="w-full flex flex-col gap-2.5">
        <h2 className="text-3xl font-black text-[#eab308] my-4">Pick a meditation</h2>
        <div className="flex flex-col justify-center gap-3 items-stretch sm:flex-row text-nowrap flex-wrap" onClick={meditationTypeClickHandler}>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 1 && outlineClasses } bg-[#e11d48]`}>Well Being First</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 2 && outlineClasses } bg-[#0369a1]`}>No Big Deal</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 3 && outlineClasses } bg-[#2e1065]`}>No Fake Needs</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 4 && outlineClasses } bg-[#4a044e]`}>Avoid Limiting Habits</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 5 && outlineClasses } bg-[#ea580c]`} /* className="p-4 text-white font-black flex-1 outline outline-primary outline-3 outline-offset-4 text-[16px]  rounded-md bg-[#ea580c] cursor-pointer" */>Severely Blessed</div>
        </div>

        <div className="flex flex-col items-center gap-5 my-4">
          {
            selectedMeditationAudios?.map(meditationAudio => <AudioPlayer key={meditationAudio?.id} currentPlayingAudioId={currentPlayingAudioId} setCurrentPlayingAudioId={setCurrentPlayingAudioId} { ...meditationAudio } />)
          }
        </div>
    </div>
  )
}

export default PickYourMeditation