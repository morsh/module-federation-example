import * as React from 'react';
import { Provider } from 'react-redux';
import { init18n } from './i18n/i18n';
import { Title } from './components/Title/Title';
import { createStore } from './redux/store/configureStore';
import { useTranslation } from 'react-i18next';
import { Loader } from './components/Loader/Loader';
import { Helmet } from 'react-helmet';
import { AppProps } from './AppProps';

init18n();

const App = ({ name }: AppProps) => {
  const { i18n } = useTranslation();
  const store = React.useMemo(
    () => createStore({ locale: i18n.language }),
    [i18n.language],
  );

  if (!i18n.isInitialized) {
    return <Loader />;
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }} />
      <React.StrictMode>
        <Provider store={store}>
          <div
            data-hook='app-remote-comp-root'
            style={{
              margin: '10px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: 'red',
            }}
          >
            <Title /><h2>{name}</h2>
          </div>
        </Provider>
      </React.StrictMode>
    </>
  );
}
    
export default App;
