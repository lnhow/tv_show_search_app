import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import './index.css';

const SeriesInfo = (props) => {
  const series = props.series;
  const seriesImgUrl = 
    (series.image !== null) ? series.image.medium : 'https://dummyimage.com/100/fff/0011ff.png&text=Image+Not+Found';
  const seriesRating = (series.rating.average) ? series.rating.average : '0.0';
  const seriesGenres = (series.genres !== null) ? series.genres.join(', ') : '';
  const seriesSummary = (series.summary !== null) ? series.summary : '<p>There is no summary yet</P>'
  console.log(series);

  return (
    <div className="container">
      <img
        id="seriesImage"
        alt="Series banner"
        src={seriesImgUrl}
      />
      <div id="seriesInfo">
        <h2 id="seriesName">{series.name}</h2>
        <p id="seriesGenres"><small>{seriesGenres}</small></p>
        <p id="seriesPremiered">Premiered: <b>{series.premiered}</b></p>
        <p id="seriesRating">Score: <b>{seriesRating}</b></p>
        <div id="seriesSummary">
          {parser(seriesSummary)}
        </div>
        <div className="btnContainer">
          <Link className="btn btn-green" to="/">Back to Home</Link>
          <a className="btn btn-teal" id="seriesMore" href={series.url} target="_blank" rel="noreferrer">More Info</a>
        </div>
      </div>
    </div>
  )
}

export default SeriesInfo;