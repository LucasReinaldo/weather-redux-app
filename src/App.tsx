import React from 'react';
import { Provider } from 'react-redux';

import store from './store/modules/weather/rootReducer';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <h1>Weather App</h1>
      </Provider>
    </>
  );
};

export default App;
