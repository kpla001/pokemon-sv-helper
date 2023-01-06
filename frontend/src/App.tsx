import './App.css';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';

type CustomRouteProps = RouteProps & {
  component: React.FunctionComponent<{}>;
	exact: boolean;
};

function App() {
  const homeRouteProps: CustomRouteProps = {
    exact: true,
    path: '/',
    component: Home
  };

  const signUpRouteProps: CustomRouteProps = {
		exact: true,
    path: '/signup',
    component: SignUp
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
