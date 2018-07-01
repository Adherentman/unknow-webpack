import React from 'react';
import Loadable from 'react-loadable';

export const LoadDashBoard = Loadable({
	loader: () => import('../../backstage/views/dashboard/DashBoard'),
	loading: () => <div>Loading</div>
});
