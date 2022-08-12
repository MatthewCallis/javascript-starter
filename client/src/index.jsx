import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './app.scss';

// NOTE: `render` has been replaced with `createRoot` in React 18.
ReactDOM.render(<App />, document.getElementById('root'));
