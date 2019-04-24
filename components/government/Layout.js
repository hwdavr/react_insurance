import React from 'react';
import Header from './Header';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import logo from '../../assets/thales@2x.png'; // import images
import '../Layout.css';
import { Router } from '../../routes';

export default (props) => {
    return (
        <Container className='header-container'>
            <Head>
                <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                />
                <script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script>
            </Head>

            <div onClick={() => {
                    console.log('Go to home page.');
                    Router.push('/');
                } } 
                className='app-title-container'>
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

            <Header />
            {props.children}
        </Container>
    );
};

const sytles = {

}
