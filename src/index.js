import React from 'react';
import Navigation from './config/Navigation';
import { registerRootComponent } from 'expo';
import { ConversionContextProvider } from './util/ConversionContext';

const App = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

registerRootComponent(App);
