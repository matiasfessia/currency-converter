import React from 'react';
import Navigation from './config/Navigation';
import { registerRootComponent } from 'expo';


const App = () => {
  return (
    <Navigation />
  );
};

registerRootComponent(App);
