import * as React from 'react';
import { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('remote-component/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Consumer 3</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp name='Mor' />
      </Suspense>
    </div>
  );
};

export default App;
