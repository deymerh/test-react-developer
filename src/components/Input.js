import React from 'react';

export const Input = ({
  id = "",
  type = "text",
  required = "true",
  name,
  placeholder,
  autoComplete = "false",
  value,
  onChange
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      onChange={onChange}
      value={value}
    />
  )
}
