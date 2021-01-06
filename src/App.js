import React from 'react';
import {HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import routes from './router';

import MusicAppHeader from '@/components/app-header/index.js';
import MusicAppFooter from '@/components/app-footer/index.js';

function App() {
  return (
    <HashRouter>
		<MusicAppHeader />
		{renderRoutes(routes)}
		<MusicAppFooter />
    </HashRouter>
  );
}

export default App;
