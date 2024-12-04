import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';

function Home() {
  return <h2>Welcome to my Portfolio!</h2>;
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;

