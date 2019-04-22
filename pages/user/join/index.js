import React, { Component } from 'react';
import {
    Button,
} from 'semantic-ui-react';
import Layout from '../../../components/user/Layout';
import {Link} from '../../../routes';

class JoiningIndex extends Component {

    render() {
        return (
            <Layout>
                <h3>Medi-Sharing Plan</h3>
                <p>Medi-Sharing plan is a medical cost sharing plan.</p>
                <p>All the people joined the plan will share the cost. </p>
                <p>We will payout every week, within the week, we will review how many patients claim from us.
                    And sum up the total cost, all the cost plus SGD10 per case will charge from the people joined the plan. </p>
                <Link route={'join/joinme'}>
                    <a>
                        <Button
                        content='Add Your Family Member'
                        primary
                        />
                    </a>
                </Link>
            </Layout>
        );
    }
}

export default JoiningIndex;
