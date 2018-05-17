import Home from './pages/Home';
import Grid from './pages/Grid';

const routes = [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/test',
      component: Grid,
    }
]

export default routes;
