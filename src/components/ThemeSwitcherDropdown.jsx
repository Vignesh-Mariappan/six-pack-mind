import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ThemeSwitcherDropdown = () => {
    const [ currentTheme, setCurrentTheme ] = useState('synthwave');

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", currentTheme ?? 'synthwave');
  }, [ currentTheme ])

  const themeSwitcher = (event) => {
    const selectedTheme = event.target.textContent.trim().toLowerCase();

    switch (selectedTheme) {
      case 'night':
        setCurrentTheme('night');
        break;
      case 'coffee':
        setCurrentTheme('coffee');
        break;
      case 'synthwave':
        setCurrentTheme('synthwave');
        break;
      case 'forest':
        setCurrentTheme('forest');
        break;
      default: 
        setCurrentTheme('synthwave');
        break;
    }
  }

  const isNight = currentTheme.toLowerCase() === 'night';
  const isCoffee = currentTheme.toLowerCase() === 'coffee';
  const isSynthwave = currentTheme.toLowerCase() === 'synthwave';
  const isForest = currentTheme.toLowerCase() === 'forest';
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-neutral m-1">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
          </div>

          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52" onClick={themeSwitcher}>
              <li className="mb-2"><button>
                <span className={ isNight && 'font-semibold text-primary' }>Night</span>  
                { isNight && <FaCheck className='text-primary' /> }
              </button></li>
              <li className="mb-2"><button>
                <span className={ isCoffee && 'font-semibold text-primary' }>Coffee</span>
                { isCoffee && <FaCheck className='text-primary' /> }
              </button></li>
              <li className="mb-2"><button>
                <span className={ isSynthwave && 'font-semibold text-primary' }>Synthwave</span> 
                { isSynthwave && <FaCheck className='text-primary' /> }
              </button></li>
              <li className="mb-2"><button>
                <span className={ isForest && 'font-semibold text-primary' }>Forest</span> 
                { isForest && <FaCheck className='text-primary' /> }
              </button></li>
        </ul>
          
        </div>
  )
}

export default ThemeSwitcherDropdown