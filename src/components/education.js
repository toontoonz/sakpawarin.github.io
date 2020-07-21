import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class Education extends Component { 
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h4 style={{marginTop: '0px'}}>{this.props.deGree}</h4>
                    <p style={{fontSize: '22px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.description}</p>
                </Cell>
            </Grid>
            
        )
    }
}