import * as React from 'react';
import { init18n } from './i18n/i18n';

init18n();

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>Remote Component 2</h1>
    </div>
  );
};

export default App;