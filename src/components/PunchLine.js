import React from 'react';
import { Link } from 'react-router-dom';


function PunchLine(props) {
  const { punchline } = props.jokes
  return <div className='punch'>
    <p>{punchline}</p>
    <Link to='/'>
      <button className='card__btn'>Muy malo ¡Otro!</button>
    </Link>
  </div>
}

export default PunchLine;