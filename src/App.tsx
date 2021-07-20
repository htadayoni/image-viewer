import { useEffect } from 'react';
import { categoryServices } from './services/api/category';
import './index.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import routes from './routes';

const fetchCategoryData = async () => {
  await categoryServices.getCategoryList();
}

const App = () => {
  useEffect(() => {
    fetchCategoryData();
  }, []);

  return <Switch>
    {routes.map(({path, Component}, i) => (
      <Route
        key={i}
        exact
        path={path}
        component={() => <Component /> }
      />
    ))}
  </Switch>
};

export default App;