import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from '../pages/login';
import Posts from '../pages/posts';
import Register from '../pages/register';
import Modal from '../pages/modal';

import { Route } from './Route';

export const Routes: FC = () => {
	return <BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route exact path='/register' component={Register} />
			<Route exact path='/posts' component={Posts} isPrivate />
			<Route exact path='/modal' component={Modal} isPrivate />
		</Switch>
	</BrowserRouter>;
};