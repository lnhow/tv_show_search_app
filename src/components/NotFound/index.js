import { Link } from 'react-router-dom';
import './index.css';

function NotFound() {
  return (
    <div className="Center-Container">
      <div className="CenterBox">
        <div>
          <h2>Not Found</h2>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;