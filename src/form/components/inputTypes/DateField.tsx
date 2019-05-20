import * as React from 'react';
import * as moment from 'moment';

import RadioField from './RadioField';
import { formatDate } from '../../../utils/globals';
import { iTarget } from '../../../types/Types';

interface DateProps {
  labelName: string
  dayName: string
  hourName: string
  dayValue: string
  hourValue: string
  callback: (dayName: string, value: React.FormEvent<HTMLInputElement> | Event | iTarget) => void
  amValue: boolean
}

export default class DateField extends React.Component<DateProps> {
  render() {
    const { 
      labelName, 
      callback, 
      dayName, 
      dayValue, 
      hourName, 
      hourValue,
      amValue } = this.props;

    const today = moment().format(formatDate);

    return (
      <div className="inputField">
        <div className="inputField__label">
          <label>{labelName}</label>
          <span>*</span>
        </div>
        <input
          name={dayName}
          type={"date"}
          required={true}
          className={`inputField__input inputField__smallInput`}
          value={dayValue}
          onChange={(newValue) => callback(dayName, newValue)}
          min={today}
        />
        <p className="separateText">at</p>
        <input
          name={hourName}
          required={true}
          className={`inputField__input inputField__extraSmallInput`}
          value={hourValue}
          onChange={(newValue) => this.hourMask(newValue)}
          minLength={5}
          maxLength={5}
          placeholder={"--:--"}
          onKeyDown={this.onKeyDown}
        />
        <RadioField
          name={"am_format"}
          value={amValue}
          callback={(name: string, item: Event) => callback(name, item)}
        />
      </div>
    )
  }

  hourMask(newValue: iTarget) {
    const { callback, hourName } = this.props

    var string = newValue.target.value;
    string = string.replace(/-/g, "");
    const lastChar = string.charCodeAt(string.length - 1);

    if (string.length === 1 && (lastChar < 48 || lastChar > 49)) {
      string = string.substring(0, string.length - 1)
    }
    if (string[0] === "1" && string.length === 2 && lastChar > 50) {
      string = string.substring(0, string.length - 1)
    }
    if (string.length === 2) {
      string += ":";
    }
    if (string.length === 4 && (lastChar < 48 || lastChar > 53)) {
      string = string.substring(0, string.length - 1)
    }

    callback(hourName, { target: { value: string } });
  }

  onKeyDown = (e:  React.KeyboardEvent<object>) => {
    const { hourValue, hourName, callback} = this.props;

    if (hourValue.length === 3 && e.keyCode === 8) {
      callback(hourName, { target: { value: hourValue.substring(0, hourValue.length - 1) } });
    }
  };
}
