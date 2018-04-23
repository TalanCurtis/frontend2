import React, {Component} from 'react';
// import Home from './home/Home';
import {Switch, Route} from 'react-router';
import {Link} from 'react-router-dom'
import './styles/main.css';
import Home from './views/Home/Home';
import Details from './views/Details/Details';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <nav>
                        <Link to='/' >home</Link>
                        <Link to='/Details' >Details</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Details" component={Details} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
