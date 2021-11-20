import { Link } from 'react-router-dom';
import "./index.css"; // Tell webpack that series list use this style

const SeriesListItem = ({series}) => {
  const seriesImgUrl = (series.show.image !== null) ? series.show.image.medium : 'https://dummyimage.com/100/fff/0011ff.png&text=Image+Not+Found';
  const seriesRating = (series.show.rating.average) ? series.show.rating.average : '0.0';
  const seriesGenres = (series.show.genres !== null) ? series.show.genres.join(', ') : '';

  return (
  <li className="column">
    <Link className="Series-Link" to={`/series/${series.show.id}`}>
      <div className="Series-Wrapper">
        <img
          className = "Series-Image"
          alt = {series.show.name}
          src = {seriesImgUrl}
        />
        <div className="Series-Info">
          <h5 className="Series-Name">{series.show.name}</h5>
          <p className="Extra-Info"><small><i>{seriesGenres}</i></small></p>
          <p className="Extra-Info">{`Score: ${seriesRating}`}</p>
          <p className="Extra-Info">{`Status: ${series.show.status}`}</p>
        </div>
      </div>
    </Link>
  </li>
  );
}

const SeriesList = (props) => {
  return (
  <div className="ListWrapper">
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