import React from 'react';
import { Link } from 'react-router-dom';


function JokesList(props) {
  const { jokes } = props
  return (
    <React.Fragment>
      <ul className='joke__list'>
        {jokes.map(joke => {
          const { id, setup } = joke
          const route = `/joke/${id}`
          return (
            <li key={id} className='joke__item'>
              <h3 className='title--medium'>{setup}</h3>
              <Link to={route}>
                <button className='form__btn'>Tell me more</button>
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment >)
}

export default JokesList