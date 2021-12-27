import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, ...rest}) => {

  return (
    <button {...rest} className={`${isGoogleSignIn ? 'google-button' : ''} custom-button`}>
      {children}
    </button>
  )
}

export default CustomButton;
