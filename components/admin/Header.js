import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
    return (
        <Menu color='blue' 
          inverted 
          stackable
          style={{marginTop: '0px'}} >
            <Link route='/admin'>
                <Menu.Item name='gamepad' >
                <Icon inverted name='user' />
                    ADMIN
                </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                <Link route='/admin/claim'>
                    <a className='item'>Claim</a>
                </Link>
                <Link route='/admin/review'>
                    <a className='item'>Review</a>
                </Link>
            </Menu.Menu>
        </Menu>
    )
}
