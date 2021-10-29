import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Partner from "./pages/Partner";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/destination" exact component={Destination} />
                    <Route path="/partner" exact component={Partner} />
                    {/* <Route path="/beers" exact component={BeerList} />
                <Route path="/beers/:beerId" component={BeerDetails} />
                <Route path="/beers/random" component={BeerDetails} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
