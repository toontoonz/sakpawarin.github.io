import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none',color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume" className="link">Resume</Link>
                <Link to="/aboutme" className="link">About Me</Link>
                <Link to="/project" className="link">project</Link>
                <Link to="/contact" className="link">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="MyPortfolio">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/project">project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
