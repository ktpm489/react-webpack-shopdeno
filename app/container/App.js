import '../sass/base.sass';
import React from 'react';
import Index from './Index'
import Data from '../test.js' //mock数据

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Data;
  }
  render() {
    return (
      <Index {...this.state} />
    );
  }
}


export default App;