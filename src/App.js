import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';

import { CCProvider } from './components/CustomContext';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

import Colors from './constants/Colors';
import { DEFAULT_CONTEXT_VALUE } from './constants/Const';
import { hookMemo } from './hook';

const App = hookMemo(() => {
  const [contextValue, setContextValue] = useState(DEFAULT_CONTEXT_VALUE);

  const updateContextValue = value => {
    setContextValue(value);
  };

  useEffect(() => {
    console.log(contextValue);
  }, [contextValue]);
  return (
    <CCProvider
      value={{
        updateContextValue,
      }}
    >
      <div
        className="root"
        style={{
          position: 'absolute',
          width: '100%',
          height: contextValue?.dHeight,
          backgroundImage: `center / contain no-repeat url("./assets/images/background.png")`,
        }}
      >
        <Snowfall color={Colors.blue_snow} snowflakeCount={600} />
      </div>
      <Header />
      <Body />
      <Footer />
    </CCProvider>
  );
});
export default App;
