import React from "react"
import classes from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// USAGE EXAMPLES TO USE INSIDE OF YOUR PAGE OR COMPONENT

// USAGE EXAMPLE1: <Button btnText='whatever text' styles='transparent'/>
// USAGE EXAMPLE2: <Button btnText='whatever text' styles='orange'/>

const Button = ({ styles, btnText }) => {
  const styleTypes = {
    transparent: {
      color: '#16205F',
      textTransform: 'uppercase',
      border: '2px solid #16205F',
      boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.12)',
    },
    orange: {
      backgroundImage: 'linear-gradient(90deg, #ED7901 0%, #FCB81F 50%)',
      color: 'aliceblue',
      padding: '0.4rem 1rem',
      boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.12)'
    }
  };

  const buttonStyle = styleTypes[styles]; 

  return (
    <button className={`${classes.btn}`} style={buttonStyle}>{btnText} 
      <span>        </span><FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}

export default Button;
