import { useState } from "react";
import { AUDIOS } from "../assets/audios";
import AudioPlayer from "./AudioPlayer";

import 'animate.css';
import PickYourMeditationDropdown from "./PickYourMeditationDropdown";

const PickYourMeditation = () => {
  const [ selectedMeditation, setSelectedMeditation ] = useState(1);
  const [ selectedMeditationAudios, setSelectedMeditationAudios ] = useState(AUDIOS["Well Being First"]);
  const [ currentPlayingAudioId, setCurrentPlayingAudioId ] = useState(null);

  return (
    <div className="w-full flex flex-col gap-2.5 mb-8">
        <h2 className="text-2xl font-normal text-[#eab308] ml-1 animate__animated animate__fadeIn">Pick a meditation type</h2>
        
        <PickYourMeditationDropdown selectedMeditation={selectedMeditation} setSelectedMeditation={setSelectedMeditation} setSelectedMeditationAudios={setSelectedMeditationAudios} />

        <div className="flex flex-col items-center gap-5 my-4 animate__animated animate__fadeIn animate__delay-1s">
          {
            selectedMeditationAudios?.map(meditationAudio => <AudioPlayer key={meditationAudio?.id} currentPlayingAudioId={currentPlayingAudioId} setCurrentPlayingAudioId={setCurrentPlayingAudioId} { ...meditationAudio } />)
          }
        </div>
    </div>
  )
}

export default PickYourMeditation