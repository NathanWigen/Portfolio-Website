import './App.css';
import Layout from './Layout/Layout';
import { Switch, Route} from 'react-router-dom';
import AboutMe from './Screens/AboutMe/AboutMe';
import Projects from './Screens/Projects/Projects';
import Contact from './Screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        {/* Keep as the last Route  */}
        <Route path="/">
          <AboutMe />
        </Route>


      </Switch>
    </div>
  );
}

export default App;