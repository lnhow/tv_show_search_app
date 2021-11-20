import { Switch, Route } from 'react-router-dom';

import Series from '../../containers/series';
import SingleSeries from '../../containers/singleSeries';
import NotFound from '../notFound';

const Main = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Series} />
      <Route path='/series/:id' component={SingleSeries} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Main;
