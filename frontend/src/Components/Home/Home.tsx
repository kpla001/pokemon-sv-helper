import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';



const Home: React.FunctionComponent = () => {
  return (
    <div>
			<Navigation />
      <h1>Welcome to the Pokemon SV Helper</h1>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
