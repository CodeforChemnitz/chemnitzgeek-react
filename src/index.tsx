import 'mini.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElem = document.getElementById('container') as HTMLElement;
ReactDOM.render(<App />, rootElem);

// tslint:disable-next-line:no-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-any
  (module as any).hot.accept('./App', () => {
    // tslint:disable-next-line:no-require-imports
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootElem);
  });
}

registerServiceWorker();
