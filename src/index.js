import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Components/Home';

const routing=(
    <div>
        <BrowserRouter>
        <div className="navbar navbar=expand-xl navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">App</Link>
                <Link to="/home" className="navbar-brand">Home</Link>
        </div>
        
        <Route exact path="/" component={App}></Route>
        <Route path="/home" component={Home}></Route>
        </BrowserRouter>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
