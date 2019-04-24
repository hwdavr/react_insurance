import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
    return (
        <Menu color='blue' 
          inverted 
          stackable
          style={{marginTop: '0px'}} >
            <Link route='/service_provider'>
                <Menu.Item name='gamepad' >
                <Icon inverted name='address book' />
                    Service Provider
                </Menu.Item>
            </Link>
        </Menu>
    )
}
