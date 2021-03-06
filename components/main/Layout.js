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
                    <h1 className='app-title'>S</h1>
                    <h2 className='app-title'>MART </h2>
                    <h1 className='app-title'>A</h1>
                    <h2 className='app-title'>SISTANT </h2>
                    <h1 className='app-title'>F</h1>
                    <h2 className='app-title'>OR </h2>
                    <h1 className='app-title'>E</h1>
                    <h2 className='app-title'>LDERLY</h2>
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
