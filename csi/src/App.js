import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './Components/FormComponent';
import SuccessComponent from './Components/SuccessComponent'; // Assuming you have a SuccessComponent defined

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormComponent} />
        {/* <Route path="/success" component={SuccessComponent} /> */}
        {/* Other routes if any */}
      </Switch>
    </Router>
  );
};

export default App;
