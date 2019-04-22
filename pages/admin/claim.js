import React, { Component } from 'react';
import {
    Button,
    Form,
    Input,
    Confirm,
    Modal,
    Icon,
} from 'semantic-ui-react';
import Layout from '../../components/admin/Layout';
import medisharing from '../../ethereum/medisharing';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class AdminClaim extends Component {
    state = {
        nric: '',
        description: '',
        amount: '',
        alertOpened: false,
        loading: false,
    }

    onSubmitClaim = async (event) => {
        event.preventDefault();
        
        this.setState({loading: true});
        try {
            const accounts = await web3.eth.getAccounts();
            await medisharing.methods.createClaim(
                this.state.nric,
                this.state.description,
                parseInt(this.state.amount)
            ).send({
                from: accounts[0],
                gas: '1000000'
            });
            console.log("Submitted a Claim");
            this.setState({
                nric: '',
                description: '',
                amount: '',
                alertOpened: true,
            });
        } catch(err) {
            console.log(err);
        }
        this.setState({loading: false});
    }

    alertClose = () => {
        this.setState({alertOpened: false});
    }

    gotoAdminHome = () => {
        this.setState({alertOpened: false});
        Router.pushRoute('/admin/index');
    }

    render() {
        return (
            <Layout>
                <h3>Claim for Patient</h3>

                <Form onSubmit={this.onSubmitClaim}>
                    <Form.Field>
                        <label>NRIC</label>
                        <Input
                          value={this.state.nric}
                          onChange={event=>this.setState({nric: event.target.value})}
                          />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                          value={this.state.description}
                          onChange={event=>this.setState({description: event.target.value})}
                          />
                    </Form.Field>
                    <Form.Field>
                        <label>Claim Amount</label>
                        <Input
                          value={this.state.amount}
                          onChange={event=>this.setState({amount: event.target.value})}
                          label='SGD' labelPosition='right'/>
                    </Form.Field>

                    <Button primary loading={this.state.loading}>Submit</Button>
                </Form>
                <Confirm open={this.state.alertOpened} 
                    content='Claim Summitted! Continue to another one?'
                    onConfirm={this.alertClose}
                    onCancel={this.gotoAdminHome}/>
            </Layout>
        );
    }
}

export default AdminClaim;
