import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Favorites from './pages/Favorites';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;