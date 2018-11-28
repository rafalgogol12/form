import * as React from 'react';

import { InputProps } from '../../../types/Types';

export default class InputField extends React.Component<InputProps> {
  render() {
    const { 
      labelName, 
      name, 
      maxLength, 
      isRequired = false, 
      placeholder, 
      value = "", 
      callback, 
      extraText, 
      validationStatement,
      type = "text",
      validationError } = this.props;

    return (
      <div className="inputField">
        <div className="inputField__label">
          <label>{labelName}</label>
          {isRequired && <span>*</span>}
        </div>
        <input
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          required={isRequired}
          className={`inputField__input ${extraText ? "inputField__smallInput": null}`}
          value={value}
          type={type}
          onChange={(newValue) => callback(name, newValue)}
        />
        {extraText && 
          <p>{extraText}</p>
        }
        {validationStatement &&
          <p className="validation__error">{validationError}</p>
        }
      </div>
    )
  }
}