import React, { Component } from 'react';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //fill this in later with...state
    }
  }
  render() {
    return (
      <div className="App">
        <LeftFrame />
        <Switch>
          {/* routes go here... */}
        </Switch>
        <RightFrame />
      </div>
    );
  }
}

export default App;
