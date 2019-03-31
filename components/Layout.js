import React from 'react';
import Header from './Header';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import logo from '../assets/thales@2x.png'; // import images
import './Layout.css';

export default (props) => {
    return (
        <Container style={{marginTop:'20px'}}>
            <Head>
                <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                />
            </Head>

            <div style={{display:'flex', 
                alignItems:'center', 
                justifyContent:'space-between'}}>
                <div style={{display:'inline'}}>
                    <h1 className='app-title'>I</h1>
                    <h2 className='app-title'>NSURANCE </h2>
                    <h1 className='app-title'>S</h1>
                    <h2 className='app-title'>HARING</h2>
                </div>

                <img src={logo} 
                    style={{height:'44px'}}/>
            </div>
            <Header />
            {props.children}
        </Container>
    );
};

const sytles = {

}
