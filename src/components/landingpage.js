import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl';
export default class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                   <Cell col={12}>
                        <img 
                         src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_nerd_guy-512.png"
                         alt="avatar"
                         className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | <strike>React Native</strike> | NodeJS | <strike>Express</strike> | <strike>MongoDB</strike> | SQL</p>.

                            <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Youtube */}
                            <a href="https://youtube.com/channel/UCsWeP9t7nZrUbXekncyMhjQ" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                            {/* Favebook */}
                            <a href="https://facebook.com/the.ziegker" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                            </div>
                        </div>
                        
                    </Cell> 
                </Grid>
            </div>
        )
    }
}
