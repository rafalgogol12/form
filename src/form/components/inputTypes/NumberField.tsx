import * as React from 'react';

import { InputProps } from '../../../types/Types';
import { onlyNumber } from '../../../utils/Functions';

export default class NumberField extends React.Component<InputProps> {
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
      paymentField = false} = this.props;

    return (
      <div className={`inputField ${paymentField && "noMargin"}`}>
        {!!labelName &&
          <div className="inputField__label">
            <label>{labelName}</label>
            {isRequired && <span>*</span>}
          </div>
        }
        <input
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          required={isRequired}
          className={`inputField__input ${extraText ? "inputField__smallInput" : null} ${paymentField && "event__fee"}`}
          value={value}
          onChange={(newValue) => onlyNumber(name, value, newValue, callback)}
        />
        {extraText &&
          <p>{extraText}</p>
        }
      </div>
    )
  }
}