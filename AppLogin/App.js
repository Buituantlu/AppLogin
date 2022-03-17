import * as React from 'react';
import { Provider } from 'react-redux';
import RootStack from './src/navigation';
import store from './src/redux/store/store'

const App = () => {
  return (
    <Provider store={store} >
      <RootStack />
    </Provider>
  );
}

export default App;