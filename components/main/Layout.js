import React from 'react';
import {Container, Divider} from 'semantic-ui-react';
import Head from 'next/head';
import logo from '../../assets/thales@2x.png'; // import images
import '../Layout.css';

export default (props) => {
    return (
        <Container className='main-header-container'>
            <Head>
                <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                />
            </Head>

            <div className='app-title-container'>
                <div style={{display:'inline'}}>
                    <h1 className='app-title'>M</h1>
                    <h2 className='app-title'>EDI-</h2>
                    <h1 className='app-title'>S</h1>
                    <h2 className='app-title'>HARING</h2>
                </div>

                <img src={logo} style={{height:'44px'}}/>
            </div>

            <Divider fitted></Divider>
            
            {props.children}
        </Container>
    );
};

const sytles = {

}
