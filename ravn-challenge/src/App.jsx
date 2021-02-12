import React from 'react'
import { HeaderComponent } from './Components/Header';
import { LoaderComponent } from './Components/Loader';
import { LoaderProvider } from './context/loader';
import logo from './logo.svg';
import { RouterApp } from './Routes/routes';
import { ApiContext, ApiProvider } from './Services/Api';

export const App = () => {
  return (
    <React.Fragment>
      <LoaderProvider>
        <ApiProvider>
          <div className="appContainer">
            <div className="bg"></div>
            <HeaderComponent>
              <RouterApp />
            </HeaderComponent>
          </div>
        </ApiProvider>
      </LoaderProvider>
    </React.Fragment>
  );
}

export default App;
