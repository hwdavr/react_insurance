import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
    return (
        <Menu color='blue' 
          inverted 
          stackable
          style={{marginTop: '0px'}} >
            <Link route='/user'>
                <Menu.Item name='gamepad' >
                <Icon inverted name='user' />
                    USER
                </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                {/* <Link route='/user/plan'>
                    <a className='item'>Plan</a>
                </Link>
                <Link route='/'>
                    <a className='item'>Benifits</a>
                </Link> */}
                <Link route='/user/join'>
                    <a className='item'>Join</a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}
