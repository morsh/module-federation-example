import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { init18n } from './i18n/i18n';

init18n();

interface Props extends WithTranslation {
  name: string;
}

const App = withTranslation()(({ t, name }: Props) => (
  <div
    style={{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'cyan',
    }}
  >
    <h1>{t('title')} {name}</h1>
  </div>
));

export default App;