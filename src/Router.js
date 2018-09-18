import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';

let NavBar = () => {
    return <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink> 
        <NavLink to='/profile'>Profile</NavLink> 
    </nav> 
}

const Home = () => {
    return <HomePageContainer/>
}

const About = () => {
    return <h1>This is about me</h1>;
};

const Profile = () => {
    return <h1>This is my profile</h1>
};

let NotFound = () => {
    return <h1>Not Found</h1>
};


let Router = () => {
    return <HashRouter>
            <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
            </div>
            
    </HashRouter>;
}
            

export default Router;