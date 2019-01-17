import * as React from 'react';
import { ButtonProps } from '../../types/Types';

export default class SubmitButton extends React.Component<ButtonProps> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <button className="form__submit" type="submit" disabled={this.props.disabled}>
            Publish event
          </button>
        </div>
      </div>
    )
  }
}