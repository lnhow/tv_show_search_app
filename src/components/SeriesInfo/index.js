import parser from 'html-react-parser';

const SeriesInfo = (props) => {
  const series = props.series;

  return (
    <div>
      <img
      style = {{
        marginTop: 20,
      }}
        alt="Series banner"
        src={series.image.medium}
      />
      <h2>{series.name}</h2>
      <p>Premiered: {series.premiered}</p>
      <p>Rating: {series.rating.average}</p>
      <div>
        {parser(series.summary)}
      </div>
    </div>
  )
}

export default SeriesInfo;