import React from 'react'
const MyContext=React.createContext();
const myContextProvider=MyContext.Provider;
const myContextConsumer=MyContext.Consumer;
export {myContextProvider,myContextConsumer}