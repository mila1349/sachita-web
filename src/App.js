import './index.scss'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Category from './pages/category/Category'
import Detail from './pages/detail/Detail'
import Contact from './pages/contact/Contact.js'
import Nav from './pages/Nav'
import Profile from './pages/profile/Profile'

import ScrollToTop from './pages/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <Switch>

          <Route path="/category">
            <Nav/>
            <Category/>
          </Route>

          <Route path="/detail">
            <Nav/>
            <Detail/>
          </Route>

          <Route path="/contact">
            <Nav/>
            <Contact/>
          </Route>

          <Route path="/profile">
            <Nav/>
            <Profile/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
