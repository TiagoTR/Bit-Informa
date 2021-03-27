import React, { useState } from 'react';
import { GlobalStyles } from './globalStyles';
import Header from './components/header-component/header';
import Main from './components/main-component/main';
import StateContext from './components/context';

function App() {
  const [input, setInput] = useState('');

  return (
        <StateContext.Provider value={{ input, setInput }}>
          <GlobalStyles />
          <Header />
          <Main />
        </StateContext.Provider>
  );
}

export default App;
