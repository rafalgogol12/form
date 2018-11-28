import * as React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="app__header">
        <div className="container">
          <div className="row">
            <h1>New event</h1>
          </div>
        </div>
      </div>
    )
  }
}