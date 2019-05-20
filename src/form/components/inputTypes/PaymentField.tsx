import * as React from 'react';
import { PaymentProps } from '../../../types/Types';
import NumberField from './NumberField';

export default class PaymentField extends React.Component<PaymentProps> {
  render() {
    const { 
      labelName, 
      placeholder, 
      feeName, 
      value, 
      callback, 
      inputValue } = this.props;

    return (
      <div className="inputField">
        <div className="inputField__label">
          <label>{labelName}</label>
        </div>
        <div className="inputField__group">
          <label>
            {this.renderRadioButton("false", false)}
            Free event
         </label>
          <label>
            {this.renderRadioButton("true", true)}
            Paid event
          </label>
        </div>
        {value &&
          <NumberField
            name={feeName}
            placeholder={placeholder}
            value={inputValue}
            extraText={"$"}
            callback={(name: string, item: Event) => callback(name, item)}
            isRequired={value}
            paymentField
          />
        }
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