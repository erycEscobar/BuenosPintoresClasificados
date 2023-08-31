import { useState } from 'react';
import './TerminosCondiciones.scss';
import TerminosCondicionesText from './TerminosCondicionesText';

const TerminosCondiciones = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [accepted, setAccepted] = useState(false);
    
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const isBottom = scrollHeight - scrollTop === clientHeight;
        setScrollPosition(scrollTop);
        setAccepted(isBottom);
    };
    
    const handleCheckboxChange = () => {
        if (scrollPosition === 0) {
          // User hasn't scrolled to the end of the terms.
          alert("Please read the entire terms before accepting.");
        } else {
          setAccepted(!accepted);
        }
    };   
    
    return (
        <div>
            <h2>Términos y condiciones de uso</h2>
            <TerminosCondicionesText handle={handleScroll}/>
            <label>
                <input
                type="checkbox"
                checked={accepted}
                onChange={handleCheckboxChange}
                disabled={!accepted}
            />
                I have read and accept the terms and conditions.
            </label>
        </div>
      );
    }
    
export default TerminosCondiciones