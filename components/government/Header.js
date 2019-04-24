import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
    return (
        <Menu color='blue' 
          inverted 
          stackable
          style={{marginTop: '0px'}} >
            <Link route='/government'>
                <Menu.Item name='gamepad' >
                <Icon inverted name='closed captioning' />
                    Government(CC)
                </Menu.Item>
            </Link>
        </Menu>
    )
}
