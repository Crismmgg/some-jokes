import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehRollingEyes } from '@fortawesome/free-regular-svg-icons';



function PunchLine(props) {
  const { punchline } = props.jokes
  return <div className='punch'>
    <p>{punchline}</p>
    <Link to='/'>
      <button className='card__btn'>Muy malo ¡Otro! <FontAwesomeIcon icon={faMehRollingEyes} /></button>
    </Link>
  </div>
}

export default PunchLine;