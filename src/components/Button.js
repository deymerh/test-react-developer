import React from 'react';

export const Button = ({
  type = "submit",
  disabled="false",
  onClick,
  title
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}>
        {title}
    </button>
  )
}
