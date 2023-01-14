import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { init18n } from './i18n/i18n';

init18n();

const App = withTranslation()(({ t }: WithTranslation) => (
  <div
    style={{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'cyan',
    }}
  >
    <h1>{t('title')}</h1>
  </div>
));

export default App;