import { useState } from "react";
import { AUDIOS } from "../assets/audios";
import AudioPlayer from "./AudioPlayer";

import 'animate.css';
import PickYourMeditationDropdown from "./PickYourMeditationDropdown";

const PickYourMeditation = () => {
  const [ selectedMeditation, setSelectedMeditation ] = useState(1);
  const [ selectedMeditationAudios, setSelectedMeditationAudios ] = useState(AUDIOS["Well Being First"]);
  const [ currentPlayingAudioId, setCurrentPlayingAudioId ] = useState(null);
  // const meditationTypeClasses = `p-4 text-center max-[335px]:text-[9px] max-[385px]:text-[11px] text-[13px] lg:font-bold text-white rounded-md cursor-pointer`;
  // const outlineClasses = `outline outline-primary outline-3 outline-offset-4`;

  return (
    <div className="w-full flex flex-col gap-2.5 mb-8">
        <h2 className="text-2xl font-normal text-[#eab308] ml-1">Pick a meditation type</h2>
        
        <PickYourMeditationDropdown selectedMeditation={selectedMeditation} setSelectedMeditation={setSelectedMeditation} setSelectedMeditationAudios={setSelectedMeditationAudios} />

        {/* <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-3 items-stretch sm:min-w-[200px] text-nowrap animate__animated animate__fadeIn animate__slow" onClick={meditationTypeClickHandler}>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 1 && outlineClasses } bg-[#e11d48]`}>Well Being First</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 2 && outlineClasses } bg-[#0369a1]`}>Dehype/De-Link</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 3 && outlineClasses } bg-[#2e1065]`}>Fake Need Release</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 4 && outlineClasses } bg-[#4a044e]`}>Limiting Views & Habits</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 5 && outlineClasses } col-span-2 md:col-span-1 bg-[#ea580c]`}>Blessed Consciousness</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 6 && outlineClasses } col-span-2 md:col-span-1 bg-[#7e22ce]`}>Blessed Consciousness Max</div>
          <div className={`${meditationTypeClasses} ${ selectedMeditation === 7 && outlineClasses } col-span-2 md:col-span-1 bg-[#16a34a]`}>Final Meditation</div>
        </div> */}

        <div className="flex flex-col items-center gap-5 my-4">
          {
            selectedMeditationAudios?.map(meditationAudio => <AudioPlayer key={meditationAudio?.id} currentPlayingAudioId={currentPlayingAudioId} setCurrentPlayingAudioId={setCurrentPlayingAudioId} { ...meditationAudio } />)
          }
        </div>
    </div>
  )
}

export default PickYourMeditation