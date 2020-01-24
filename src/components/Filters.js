import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faHandRock, faGrinSquintTears, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';



function Filters(props) {

  const handleType = (ev) => {
    props.handleType({
      inputType: ev.target.value
    })
  }

  return (
    <div className='filter__container'>
      <h2 className='title--big'>Selecciona tipo de chiste</h2>
      <form className='filter__radio'>
        <label className='form__label' htmlFor="type">Toditos <FontAwesomeIcon icon={faGlobeEurope} /></label>
        <input
          type="radio"
          name='type'
          value=''
          onChange={handleType}
          checked={props.checked === ''} />
        <label className='form__label' htmlFor="type">General <FontAwesomeIcon icon={faGrinSquintTears} /></label>
        <input
          type="radio"
          name='type'
          value='general'
          onChange={handleType}
          checked={props.checked === 'general'} />
        <label className='form__label' htmlFor="type">Programación <FontAwesomeIcon icon={faLaptopCode} /></label>
        <input
          type="radio"
          name='type'
          value='programming'
          onChange={handleType}
          checked={props.checked === 'programming'} />
        <label className='form__label' htmlFor="type">Knock-knock<FontAwesomeIcon icon={faHandRock} /></label>
        <input
          type="radio"
          name='type'
          value='knock-knock'
          onChange={handleType}
          checked={props.checked === 'knock-knock'} />
      </form>
    </div>
  )
}
export default Filters;