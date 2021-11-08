import React from 'react';
import { Route, HashRouter, Routes as Switch } from 'react-router-dom';

import Blockchain from '../pages/Blockchain';

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={<Blockchain />} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
