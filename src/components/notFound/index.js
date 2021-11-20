import { Link } from 'react-router-dom';
import './index.css';

function NotFound() {
  return (
    <div className='Center-Container'>
      <div className='CenterBox'>
        <div>
          <h1 className='errorCode'>404</h1>
          <h2>Not Found</h2>
          <Link to='/'>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
