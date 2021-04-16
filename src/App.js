import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
            </Route>
          <Route></Route>
          <Route></Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
