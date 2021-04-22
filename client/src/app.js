import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllLogs from './components/pages/allLogs';
import About from './components/pages/about';
import Navbar from './components/layouts/navbar';
import AddLog from './components/pages/addLog';
import AddTech from './components/pages/addTech';

const App = () => {

    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={AllLogs} />
                <Route exact path="/addLog" component={AddLog} />
                <Route exact path="/addTech" component={AddTech} />
                <Route exact path="/about" component={About} />
            </Switch>
        </Router>
    )
}

export default App;