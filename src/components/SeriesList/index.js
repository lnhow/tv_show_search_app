//import React from 'react';
import "./index.css"; // Tell webpack that series list use this style

const SeriesList = (props) => {
  return (
    <div>
      <ul className="Series-list">
        {props.list.map(series => 
          <li key={series.show.id}>
            {/* React list have to get have a unique key */}
            {series.show.name}
          </li>
        )}
      </ul>
    </div>
  );
}

export default SeriesList;