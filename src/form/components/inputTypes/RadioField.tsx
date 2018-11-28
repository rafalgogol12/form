import * as React from 'react';
import { InputProps } from '../../../types/Types';

export default class RadioField extends React.Component<InputProps> {
  render() {
    return (
      <div className="inputField noMargin">
        <div className="inputField__group">
          <label className="inputField__radio">
            {this.renderRadioButton("true", true)}
            AM
         </label>
          <label className="inputField__radio">
            {this.renderRadioButton("false", false)}
            PM
          </label>
        </div>
      </div>
    )
  }

  renderRadioButton(itemValue: string, valueToCompare: boolean) {
    const { name, value, callback } = this.props;
    return <input
      type="radio"
      name={name}
      value={itemValue}
      checked={value === valueToCompare}
      onChange={(newValue) => callback(name, newValue.target.value === "true" ? { target: { value: true } } : { target: { value: false } })}
    />
  }
}