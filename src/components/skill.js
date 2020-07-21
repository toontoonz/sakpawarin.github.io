import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl'
// import "./ProgressBar.css"

export default class Skill extends Component { 
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '20%'}}>{this.props.skill}</div>
                        <ProgressBar style={{margin: 'auto', width: '75%',transitionDuration: ".5s"}} progress={this.props.progress}/>
                    </div>
                </Cell>
            </Grid>
            
        )
    }
}