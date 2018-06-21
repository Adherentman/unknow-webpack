import React from 'react';
import { Card } from 'antd';
import { TextContext } from '../index';

function App() {
  return(
    <TextContext.Consumer>
      {text => <Card.Grid>{text}</Card.Grid>}
    </TextContext.Consumer>
  )
}

export default App;