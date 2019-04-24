import React, { Component } from 'react';
import {
    Button,
    Card,
    Grid,
    Container,
    Menu,
    Icon,
} from 'semantic-ui-react';
import Head from 'next/head';
import {Link} from  '../routes';
import Layout from '../components/main/Layout';

class MediCostSharing extends Component {

    renderCards() {
        const items = [];

        return <Card.Group items={items}/>;
    }

    render() {
        return (
            <Layout>
                <Container style={{marginTop:'50px', marginBottom:'100px'}}>
                <div style={{marginBottom:'40px'}}>
                    <h2>Welcome to Smart Assistant Administration System</h2>
                    <h4>This is only a demo page for different group of people</h4>
                </div>

                <div>
                    <Link route={'/user'}>
                        <a>
                            <Button 
                                content="Medi-Sharing Plan"
                                icon = "blind"
                                size='huge'
                                primary
                                style={{width:'30%', height:'100px', marginRight:'20px'}}
                                />
                        </a>
                    </Link>

                    <Link route={'/hospital'}>
                        <a>
                            <Button 
                                content="Hospital"
                                icon = "hospital"
                                size='huge'
                                primary 
                                style={{width:'30%', height:'100px', marginLeft:'20px'}}
                                />
                        </a>
                    </Link>
                </div>

                <div style={{marginTop:'40px'}}>
                    <Link route={'/service_provider'}>
                        <a>
                            <Button 
                                content="Service Provider"
                                icon = "address card"
                                size='huge'
                                primary 
                                style={{width:'30%', height:'100px', marginRight:'20px'}}
                                />
                        </a>
                    </Link>
                    
                    <Link route={'/government'}>
                        <a>
                            <Button 
                                content="Government(CC)"
                                icon = "closed captioning"
                                size='huge'
                                primary 
                                style={{width:'30%', height:'100px', marginLeft:'20px'}}
                                />
                        </a>
                    </Link>
                </div>

                <div style={{marginTop:'40px'}}>
                    <Link route={'/admin'}>
                        <a>
                            <Button 
                                content="Administrator"
                                icon = "user"
                                size='huge'
                                primary 
                                style={{width:'30%', height:'100px'}}
                                />
                        </a>
                    </Link>
                </div>
                </Container>
            </Layout>
        );
    }
}

export default MediCostSharing;
