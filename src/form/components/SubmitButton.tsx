import * as React from 'react';

export default class SubmitButton extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <button className="form__submit" type="submit">
            Publish event
          </button>
        </div>
      </div>
    )
  }
}