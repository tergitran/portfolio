import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className='logo'><Link to='/'>Dn</Link></div>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
