import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skill'

export default class Resume extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#f0f0f0"}}>
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
                            <hr style={{borderTop: '3px solid #833fb2',width: '50%'}} />
                            <p>
                                Hi I'm Sakpawarin Chaitanapisit I'm a Programmer which want to find new experience for my occupation. So that I find new job which gives an opportunity for the new generation (fresh graduated student) to learn and improve my programming skill and expect to give the great programming that helpful for your business.
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2',width: '50%'}} />
                            <h5 style={{color: 'gray'}}>Address</h5>
                            <p>
                                200/117 Village No. 2, Phanom Sarakham Subdistrict, Phanom Sarakham District, Chachoengsao 24120
                            </p>
                            <h5 style={{color: 'gray'}}>Phone</h5>
                            <p>090-2207271</p>
                            <hr style={{borderTop: '3px solid #833fb2',width: '50%'}} />
                            <h5 style={{color: 'gray'}}>Hobbies&Likes</h5>
                            <p>Listen to music, play games, learning</p>
                            <hr style={{borderTop: '3px solid #833fb2',width: '50%'}} />
                        
                    </Cell>
                    <Cell col={8}>
                        <div className="resume-right-col">
                            <h2 style={{marginTop: '0px',paddingTop: '20px'}}>Education</h2>
                            <Education 
                                deGree={"Vocational Certificate"}
                                startYear={2011}
                                endYear={2013}
                                schoolName={"EASTERN COLLEGE OF TECHNOLOGY(E.TECH)"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <Education 
                                deGree={"Higher Vocational Certificate"}
                                startYear={2014}
                                endYear={2015}
                                schoolName={"EASTERN COLLEGE OF TECHNOLOGY(E.TECH)"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <Education 
                                deGree={"Bachelor degree"}
                                startYear={2017}
                                endYear={2019}
                                schoolName={"THONBURI University"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <hr style={{borderTop: '3px solid #e22947',width: '96%'}} />
                            <h2 style={{marginTop: '0px',paddingTop: '20px'}}>Experience</h2>
                            <Experience 
                                jobTitle={"National regional skills competition"}
                                startYear={2015}
                                endYear={2015}
                                jobName={"Gold Medal"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <Experience 
                                jobTitle={"National skills competition"}
                                startYear={2016}
                                endYear={2016}
                                jobName={"Silver Medal"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <Experience 
                                jobTitle={"EASTERN COLLEGE OF TECHNOLOGY(E.TECH)"}
                                startYear={2017}
                                endYear={2020}
                                jobName={"Teacher Assistant"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <Experience 
                                jobTitle={"J.I.B. Computer group"}
                                startYear={2020}
                                endYear={"Current"}
                                jobName={"Web Programer"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            />
                            <hr style={{borderTop: '3px solid #e22947',width: '96%'}} />
                            <h2 style={{marginTop: '0px',paddingTop: '20px',transitionDuration: "5s"}}>Skill</h2>
                            <Skills
                                skill={"HTML/CSS"}
                                progress={90}
                            />
                            <Skills
                                skill={"PHP"}
                                progress={60}
                            />
                            <Skills
                                skill={"Javascript"}
                                progress={50}
                            />
                            <Skills
                                skill={"React"}
                                progress={25}
                                indeterminate 
                            />
                            <Skills
                                skill={"Angular"}
                                progress={10}
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
