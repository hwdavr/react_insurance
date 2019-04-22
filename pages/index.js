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

    gotoUserEntry() {
        console.log("Open User Portal");
    }

    gotoAdminEntry() {
        console.log("Open Admin Portal");
    }

    render() {
        return (
            <Layout>
                <Container style={{marginTop:'50px'}}>
                <div style={{marginBottom:'40px'}}>
                    <h2>Welcome to Medi-Sharing System</h2>
                </div>

                <Link route={'/user'}>
                    <a>
                        <Button 
                            content="User"
                            icon = "user"
                            size='huge'
                            primary
                            style={{width:'30%', height:'100px', marginRight:'20px'}}
                            />
                    </a>
                </Link>
                <Link route={'/admin'}>
                    <a>
                        <Button 
                            content="Admin"
                            icon = "user"
                            size='huge'
                            primary
                            style={{width:'30%', height:'100px', marginLeft:'20px'}}
                            />
                    </a>
                </Link>
                </Container>
            </Layout>
        );
    }
}

export default MediCostSharing;
