import * as React from 'react';
import { FormProps } from '../container/Form';
import DateField from './inputTypes/DateField';
import NumberField from './inputTypes/NumberField';
import { iTarget } from '../../types/Types';

export default class TimeComponent extends React.Component<FormProps> {
  render() {
    const { 
      newEvent, 
      callbackToSave } = this.props;

    return (
      <div className="container">
        <div className="row whiteContent">
          <h2>When</h2>
          <DateField
            labelName={"Start on"}
            dayName={"day"}
            dayValue={newEvent.day}
            hourName={"hour"}
            hourValue={newEvent.hour}
            amValue={newEvent.am_format}
            callback={(name: string, item: React.FormEvent<HTMLInputElement> | Event | iTarget) => callbackToSave(name,item)}
          />
          <NumberField
            labelName={"Duration"}
            name={"duration"}
            placeholder={"Number"}
            value={newEvent.duration}
            extraText={"hour"}
            callback={(name: string, item: Event) => callbackToSave(name,item)}
          />
        </div>
      </div>
    )
  }
}