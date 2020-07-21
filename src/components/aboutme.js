import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-grid">
                <h1>About Page</h1>
                <Grid>
                    <Cell col={4}>
                            <div className="resume-left-col" style={{textAlign: 'center'}}>
                                <img 
                                src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_nerd_guy-512.png"
                                alt="avatar"
                                style={{height: '300px'}}
                                className="avatar-img"
                                />
                                </div>
                                <h2 style={{paddingTop: '.5em'}}>Sakpawarin Chaitanapisit</h2>
                                <h4 style={{color: 'gray'}}>Who am I?</h4>
                                <hr style={{borderTop: '3px solid #833fb2',width: '100%'}} />
                                <p>
                                    Hi I'm Sakpawarin Chaitanapisit I'm a Programmer which want to find new experience for my occupation. So that I find new job which gives an opportunity for the new generation (fresh graduated student) to learn and improve my programming skill and expect to give the great programming that helpful for your business.
                                </p>
                                <hr style={{borderTop: '3px solid #833fb2',width: '100%'}} />
                                <h5 style={{color: 'gray'}}>Address</h5>
                                <p>
                                    200/117 Village No. 2, Phanom Sarakham Subdistrict, Phanom Sarakham District, Chachoengsao 24120
                                </p>
                                <h5 style={{color: 'gray'}}>Phone</h5>
                                <p>090-2207271</p>
                                <hr style={{borderTop: '3px solid #833fb2',width: '100%'}} />
                                <h5 style={{color: 'gray'}}>Hobbies&Likes</h5>
                                <p>Listen to music, play games, learning</p>
                                <hr style={{borderTop: '3px solid #833fb2',width: '100%'}} />
                            
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
