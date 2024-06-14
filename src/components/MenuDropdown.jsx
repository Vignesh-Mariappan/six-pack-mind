import { useRef } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const MenuDropdown = () => {
    const menuDropdownRef = useRef(null);
    const overlayRef = useRef(null);
    const location = useLocation();
    const { pathname} = location;

    const isMeditation = pathname === '/six-pack-mind/';
    const isBlessedConsciousness = pathname.includes('/blessed-consciousness/');

    const menuOpened = () => {
        if(overlayRef && overlayRef.current) {
            overlayRef.current.style.zIndex = '998';
        }
    }

    const closeMenu = (event) => {
        if(event.target.textContent === 'Meditation' && isMeditation ||
        event.target.textContent === 'Blessed Consciousness' && isBlessedConsciousness) {
            return;
        }

        overlayClick();
    }

    const overlayClick = () => {
        if(menuDropdownRef && menuDropdownRef.current) {
         menuDropdownRef.current.removeAttribute('open')
        }

        if(overlayRef && overlayRef.current) {
            overlayRef.current.style.zIndex = '-1'
        }
    }

  return (
    <>
        <details className="dropdown dropdown-bottom dropdown-end z-[999]" ref={menuDropdownRef}>
          <summary className="btn btn-ghost btn-circle" onClick={menuOpened}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-64" onClick={closeMenu}>
            <Link to='/six-pack-mind/'>
              <li className="mb-2">
                <button className={`p-2 ${isMeditation && 'bg-base-200'}`}>
                  <GiMeditation className={isMeditation && 'text-secondary' } />
                  <span className={ isMeditation && 'font-semibold text-secondary' }>Meditation</span>  
                </button>
              </li>
            </Link>
            <Link to='/six-pack-mind/blessed-consciousness/'>
              <li className="mb-2">
                <button className={`p-2 ${isBlessedConsciousness && 'bg-base-200'}`}>
                  <FaHandHoldingHeart className={isBlessedConsciousness && 'text-secondary' } />
                  <span className={ isBlessedConsciousness && 'font-semibold text-secondary' }>Blessed Consciousness</span>  
                </button>
              </li>
            </Link>
          </ul>
        </details>
        <div className={`fixed top-0 left-0 bottom-0 right-0`} ref={overlayRef} onClick={overlayClick}></div>
    </>
  )
}

export default MenuDropdown