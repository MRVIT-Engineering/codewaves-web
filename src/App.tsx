import React from 'react';
import { observer } from 'mobx-react-lite';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <AppRoutes />
    </div>
  );
}

export default observer(App);
