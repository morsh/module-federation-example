import * as React from 'react';
import { init18n } from './i18n/i18n';
import { Title } from './components/Title/Title';

init18n();

interface Props {
  name: string;
}

const App = ({ name }: Props) => (
  <div
    style={{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'red',
    }}
  >
    <Title /><h2>{name}</h2>
  </div>
);

export default App;
