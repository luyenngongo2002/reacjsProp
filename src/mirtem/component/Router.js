import React from 'react';
import List from '../Admin';
import App from './App';


const Routes = [{
    path: '/',
    exact: true,
    main: () => <App />
},
{
    path: '/Admin',
    exact: true,
    main: ({ history }) => <List history={history} />
},
{
    path: "*",
    main: () => <div>Error</div>
}
];
export default Routes;