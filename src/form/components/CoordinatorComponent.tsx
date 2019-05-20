import * as React from 'react';

import InputField from './inputTypes/InputField';
import SelectField from "./inputTypes/SelectField";
import { loggedUserId } from '../../utils/globals';
import { FormProps } from '../container/Form';

interface CoordinatorProps extends FormProps {
  callbackToSaveObject: (name: string, value: Event, toNumber?: boolean) => void
}

export default class CoordinatorComponent extends React.Component<CoordinatorProps> {
  render() {
    const { 
      newEvent, 
      callbackToSave, 
      callbackToSaveObject, 
      mockData } = this.props;
      
    return (
      <div className="container">
        <div className="row whiteContent">
          <h2>Coordinator</h2>
          <div className="row__content">
            <SelectField
              labelName={"Responsible"}
              name={"coordinator"}
              value={newEvent.coordinator.id}
              placeholder={"me"}
              data={mockData.responsibles}
              selectFromMock={loggedUserId}
              type="responsible"
              callback={(name: string, item: Event) => callbackToSaveObject(name, item)}
            />
            <InputField
              labelName={"Email"}
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              isRequired
              value={newEvent.email}
              callback={(name: string, item: Event) => callbackToSave(name, item)}
            />
          </div>
        </div>
      </div>
    )
  }
}