import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CourseList} />
        <Route path="/course/:id" component={CourseDetail} />
        <Route path="/video/:id" component={VideoPlayer} />
      </Switch>
    </Router>
  );
}

export default App;
