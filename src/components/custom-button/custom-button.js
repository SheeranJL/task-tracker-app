import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, ...rest}) => {

  return (
    <button {...rest}>
      {children}
    </button>
  )
}

export default CustomButton;
