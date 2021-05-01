import { Link } from 'react-router-dom';
import "./index.css"; // Tell webpack that series list use this style

const SeriesListItem = ({series}) => {
  return (
  <li>
    <Link to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
  </li>
  );
}

const SeriesList = (props) => {
  return (
  <div>
    <ul className="Series-list">
      {/* React components inside list have to have a unique key */}
      {props.list.map(series => 
        <SeriesListItem key={series.show.id} series={series} />
      )}
    </ul>
  </div>
  );
}

export default SeriesList;