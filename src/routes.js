import React from 'react';
import { Route } from 'react-router'

import Home from './components/Home';
import Media from './components/Media';

const routes = (
	<Route path='/' component={Home}>
	    <Route path='data/:id' component={Media} />
	</Route>
)

export default routes;
