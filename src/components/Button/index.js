import React from 'react';
import ss from './Button.sass';

export const Button = ({ children, onClick }) => (
  <button className={ss.button} onClick={onClick}>{children}</button>
);

export default Button;
