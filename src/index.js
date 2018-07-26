import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'emotion';

injectGlobal({
  body: { margin: 0 },
})

ReactDOM.render(<App />, document.getElementById('root'));

