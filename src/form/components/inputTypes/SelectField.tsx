import * as React from 'react';
import { InputProps, Responsible, iCategory } from '../../../types/Types';

interface SelectProps extends InputProps {
  data: (Responsible | iCategory)[]
  type: string
  selectFromMock?: number
}

export default class SelectField extends React.Component<SelectProps> {
  componentDidMount() {
    const { callback, selectFromMock, name } = this.props;
    if (!!selectFromMock) {
      callback(name, { target: { value: selectFromMock } })
    }
  }

  render() {
    const { labelName, name, isRequired = false, placeholder, data, callback, value, type } = this.props;

    return (
      <div className="inputField">
        <div className="inputField__label">
          <label>{labelName}</label>
          {isRequired && <span>*</span>}
        </div>
        <div className="inputField__picker">
          <select
            name={name}
            required={isRequired}
            value={value ? value : ""}
            onChange={(newValue) => callback(name, newValue)}>
            <option value={""} disabled>{placeholder}</option>
            {data.map((item: Responsible & iCategory, index: number) => {
              return <option key={`${item.name}_${index}`} value={item.id}>
                {type === "responsible" ?
                  `${item.name} ${item.lastname}`
                  :
                  `${item.name}`
                }
              </option>
            })}
          </select>
        </div>
      </div>
    )
  }
}