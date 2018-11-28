import * as React from 'react';

import { InputProps } from '../../../types/Types';

export default class TextAreaField extends React.Component<InputProps> {
  render() {
    const { labelName, name, maxLength, isRequired = false, placeholder, value, callback } = this.props;

    return (
      <div>
        <div className="inputField">
          <div className="inputField__label">
            <label>{labelName}</label>
            {isRequired && <span>*</span>}
          </div>
          <textarea
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            required={isRequired}
            className="inputField__input textarea"
            value={value}
            onChange={(newValue) => callback(name, newValue)}
          />
        </div>
        <span className="informSpan">{`(${value.length}/${maxLength})`}</span>
      </div>
    )
  }
}