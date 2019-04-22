import React, { Component } from 'react';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import Layout from '../../components/admin/Layout';
import medisharing from '../../ethereum/medisharing';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class AdminReviewAndPayout extends Component {

    static async getInitialProps() {
        const claimCount = await medisharing.methods.getClaimCount().call();
        const claims = await Promise.all(
            Array(parseInt(claimCount)).fill().map((element, index) => {
                return medisharing.methods.claims(index).call()
            })
        );
        console.log(claims);
        return { claims };
    }

    toReviewClaim() {
        console.log("Start to review client's claim!");
    }

    renderClaimedRow(claim) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{claim.nric}</Cell>
                <Cell>{claim.description}</Cell>
                <Cell>{claim.amount}</Cell>
                <Cell>
                    <Button color='green' basic onClick={this.toReviewClaim}>
                        Review
                    </Button>
                </Cell>
            </Row>
        );
    }

    renderClaimedRows() {
        return this.props.claims.map((row, index) => {
            row.key = index;
            return this.renderClaimedRow(row);
        });
    }

    onPayout = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            await medisharing.methods.payout().send({
                from: accounts[0],
                gas: '1000000'
            });
            console.log('Payout Successfully');
            Router.pushRoute('/admin/review');
        } catch(err) {

        }
    }

    render() {
        const { Row, Header, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Review for W13</h3>

                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>NRIC</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Claimed Amount</HeaderCell>
                            <HeaderCell>Review</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderClaimedRows()}
                    </Body>
                </Table>
                <Button primary={this.props.claims.length > 0} content='Payout' onClick={this.onPayout}/>
            </Layout>
        );
    }
}

export default AdminReviewAndPayout;
