import * as React from 'react';

import InputField from './inputTypes/InputField';
import TextAreaField from "./inputTypes/textAreaField";
import SelectField from "./inputTypes/SelectField";
import { FormProps, titleValidStatement } from '../container/Form';
import PaymentField from './inputTypes/PaymentField';
import NumberField from './inputTypes/NumberField';
import { maxDescriptionLength } from '../../utils/globals';

export default class EventInformation extends React.Component<FormProps> {
  render() {
    const {
      newEvent,
      callbackToSave,
      mockData } = this.props;

    return (
      <div className="container">
        <div className="row whiteContent">
          <h2>About</h2>
          <div className="row__content">
            <InputField
              labelName={"Title"}
              name={"title"}
              placeholder={"Make it short and clear"}
              isRequired
              value={newEvent.title}
              validationStatement={titleValidStatement(mockData.titles, newEvent)}
              validationError={"This title already exist"}
              callback={(name: string, item: Event) => callbackToSave(name, item)}
            />
            <TextAreaField
              labelName={"Description"}
              name={"description"}
              placeholder={"Write about your event, be creative"}
              isRequired
              value={newEvent.description}
              callback={(name: string, item: Event) => callbackToSave(name, item)}
              maxLength={maxDescriptionLength}
            />
            <SelectField
              labelName={"Category"}
              name={"category_id"}
              placeholder={"Select category (skills, interest, location)"}
              data={mockData.categories}
              value={newEvent.category_id}
              callback={(name: string, item: Event) => callbackToSave(name, item, true)}
              type="category"
            />
            <PaymentField
              labelName={'Payment'}
              name={"paid_event"}
              feeName={"event_fee"}
              placeholder={"Fee"}
              value={newEvent.paid_event}
              inputValue={newEvent.event_fee}
              callback={(name: string, item: Event) => callbackToSave(name, item)}
            />
            <NumberField
              labelName={"Reward"}
              name={"reward"}
              placeholder={"Number"}
              value={newEvent.reward}
              extraText={"reward points for attendance"}
              callback={(name: string, item: Event) => callbackToSave(name, item)}
            />
          </div>
        </div>
      </div>
    )
  }
}