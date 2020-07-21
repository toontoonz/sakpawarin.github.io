import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage'
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Project from './project';
import Slider from './slider';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/slider" component={Slider} />
    </Switch>
)

export default Main;