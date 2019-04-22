import React, { Component } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
} from 'semantic-ui-react';
import Layout from '../../../components/user/Layout';
import { Router } from '../../../routes';
import medisharing from '../../../ethereum/medisharing';
import web3 from '../../../ethereum/web3';
// import faker from 'faker'

class JoinPlan extends Component {
    state = {
        name: '',
        nric: '',
        birthday: '',
        nationality: '',
        address: '',
        loading: false,
    }

    onSubmitPlan = async (event) => {
        event.preventDefault();
        this.setState({loading: true});
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[1]);
            await medisharing.methods.joinPlan(
                this.state.name,
                this.state.nric,
                this.state.birthday,
                this.state.nationality,
                this.state.address
            ).send({
                from: accounts[1],
                value: web3.utils.toWei('0.3', 'ether'),
                gas: '1000000'
            });

            console.log(this.state.name + ' successfully joined the plan.');
            Router.pushRoute('/user');
        } catch(err) {
            console.log(err.message);
        }
        this.setState({loading: false});
    }

    render() {
        // const countryOptions = _.map(faker.definitions.address.country, country => ({
        //     key: country,
        //     text: country,
        //     value: country,
        //   }))
        return (
            <Layout>
                <Form onSubmit={this.onSubmitPlan}>
                    <Form.Field>
                        <label>Full Name</label>
                        <Input
                          value={this.state.name}
                          onChange={event=>this.setState({name: event.target.value})}
                          />
                    </Form.Field>
                    <Form.Field>
                        <label>NRIC</label>
                        <Input
                          value={this.state.nric}
                          onChange={event=>this.setState({nric: event.target.value})}
                          />
                    </Form.Field>
                    <Form.Field>
                        <label>Birthday</label>
                        <Input
                          value={this.state.birthday}
                          onChange={event=>this.setState({birthday: event.target.value})}
                          type='date'/>
                    </Form.Field>
                    <Form.Field>
                        {/* TODO: Use Dropdown and faker for conntry selection */}
                        <label>Nationality</label>
                        <Input
                          value={this.state.nationality}
                          onChange={event=>this.setState({nationality: event.target.value})}
                          />
                        {/* <Select placeholder='Select your country' 
                          options={countryOptions} 
                          value={this.state.nationality}
                          onChange={event=>this.setState({nationality: event.target.value})/> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <Input
                          value={this.state.address}
                          onChange={event=>this.setState({address: event.target.value})}
                          />
                    </Form.Field>

                    <Button primary loading={this.state.loading}>Join</Button>
                </Form>
            </Layout>
        );
    }
}

export default JoinPlan;
