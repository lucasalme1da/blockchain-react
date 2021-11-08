import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from 'react-router-dom';

import Blockchain from '../pages/Blockchain';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Blockchain />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
