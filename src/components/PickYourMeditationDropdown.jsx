import { FaChevronDown } from "react-icons/fa6";
import { AUDIOS } from "../assets/audios";

const PickYourMeditationDropdown = ({ selectedMeditation, setSelectedMeditation, setSelectedMeditationAudios}) => {
    const findMeditationType = () => {
        switch(selectedMeditation) {
            case 1:
                return 'Well Being First';
            case 2:
                return 'Dehype/De-Link';
            case 3:
                return 'Fake Need Release';
            case 4:
                return 'Limiting Views & Habits';
            case 5:
                return 'Blessed Consciousness';
            case 6:
                return 'Blessed Consciousness Max';
            case 7:
                return 'Final Meditation';
            default:
                return 'Well Being First';
        }
    }

    const meditationTypeClickHandler = event => {
        switch(event.target.textContent.trim()) {
          case "Well Being First":
            setSelectedMeditation(1);
            setSelectedMeditationAudios(AUDIOS["Well Being First"]);
            break;
          case "Dehype/De-Link":
            setSelectedMeditation(2);
            setSelectedMeditationAudios(AUDIOS["Dehype/De-Link"]);
            break;
          case "Fake Need Release":
            setSelectedMeditation(3);
            setSelectedMeditationAudios(AUDIOS["Fake Need Release"]);
            break;
          case "Limiting Views & Habits":
            setSelectedMeditation(4);
            setSelectedMeditationAudios(AUDIOS["Limiting Views & Habits"]);
            break;
          case "Blessed Consciousness":
            setSelectedMeditation(5);
            setSelectedMeditationAudios(AUDIOS["Blessed Consciousness"]);
            break;
          case "Blessed Consciousness Max":
            setSelectedMeditation(6);
            setSelectedMeditationAudios(AUDIOS["Blessed Consciousness Max"]);
            break;
          case "Final Meditation":
            setSelectedMeditation(7);
            setSelectedMeditationAudios(AUDIOS["Final Meditation"]);
            break;
          default:
            setSelectedMeditation(1);
            setSelectedMeditationAudios(AUDIOS["Well Being First"]);
            break;
        }
    
        const dropdownEl = document.activeElement;
        dropdownEl && dropdownEl.blur();
      }

  return (
    <div className="dropdown animate__animated animate__fadeIn z-10">
        <div tabIndex={0} role="button" className="btn btn-accent m-1">
        <span>{ findMeditationType() }</span>
        <span><FaChevronDown /></span>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-950 rounded-box w-auto" onClick={meditationTypeClickHandler}>
        <li className="mb-2"><button>Well Being First</button></li>
        <li className="mb-2"><button>Dehype/De-Link</button></li>
        <li className="mb-2"><button>Fake Need Release</button></li>
        <li className="mb-2"><button>Limiting Views & Habits</button></li>
        <li className="mb-2"><button>Blessed Consciousness</button></li>
        <li className="mb-2"><button>Blessed Consciousness Max</button></li>
        <li className="mb-2"><button>Final Meditation</button></li>
        </ul>
    </div>
  )
}

export default PickYourMeditationDropdown