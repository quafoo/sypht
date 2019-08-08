import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <div>{children}</div>
    );
  }
}
