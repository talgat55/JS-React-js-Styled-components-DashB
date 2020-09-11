import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Search}/>
            </Switch>
        </Router>
    );

}

export default App;
