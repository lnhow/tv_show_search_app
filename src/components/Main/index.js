import {Switch, Route} from 'react-router-dom';

import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import NotFound from '../NotFound';

const Main = (props) => {
  return (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSeries}/>
    <Route component={NotFound}/>
  </Switch>
  );
}

export default Main;