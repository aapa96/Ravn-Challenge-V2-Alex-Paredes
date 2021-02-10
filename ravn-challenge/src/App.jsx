import React from 'react'
import { LoaderComponent } from './Components/Loader';
import logo from './logo.svg';
import { Test } from './Pages/test';
import { ApiContext, ApiProvider } from './Services/Api';

export const App = () => {
  return (
    <React.Fragment>
      <ApiProvider>
        <LoaderComponent />
        <Test />
        <h1>Hola mundo</h1>
      </ApiProvider>
    </React.Fragment>
  );
}

export default App;
