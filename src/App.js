import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./components/Home";
import Movie from "./components/Movie";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/movie" component={Movie} />
                        <Route
                            render={() => (
                                <h1>404</h1>
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
