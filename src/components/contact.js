import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sakpawarin Chaitanapisit</h2>
                        <img 
                            src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/58375134_2294367030654384_1780728333235912704_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeE87Q3DBNOnqSWObHzrHzfIb3r19t5TGzFvevX23lMbMTluMZ8Xkv6XlRPZd04dIOSdnUKLuHbREwRYaZITaGca&_nc_ohc=ceuNdKIkZHsAX9trHA1&_nc_ht=scontent.fbkk5-4.fna&oh=1f81fccec4973a29acf235e7b4f34b62&oe=5F28893C"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Hi I'm Sakpawarin Chaitanapisit I'm a Programmer which want to find new experience for my occupation. So that I find new job which gives an opportunity for the new generation (fresh graduated student) to learn and improve my programming skill and expect to give the great programming that helpful for your business.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    090-2207271
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                    fb.com/the.ziegker
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    sakpawarin85@gmail.com
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
