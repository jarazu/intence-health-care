import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Users/Login/Login';
import Register from './Pages/Users/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Users/PrivateRoute/PrivateRoute';
import Consultaion from './Pages/Consultaion/Consultaion';
import Testimonial from './Pages/Testimonial/Testimonial';
import ServiceDetails from './Pages/Details/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/consultaion">
              <Consultaion/>
            </Route>
            <Route path="/testimonial">
              <Testimonial/>
            </Route>
            <PrivateRoute path="/details/:id">
              <ServiceDetails/>
            </PrivateRoute>
            <Route path="*">
                <NotFound/>
              </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
