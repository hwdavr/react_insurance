import React, { Component } from 'react';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import Layout from '../../components/admin/Layout';
import web3 from '../../ethereum/web3';
import medisharing from '../../ethereum/medisharing';

class AdminPortalIndex extends Component {

    static async getInitialProps() {
        const clientCount = await medisharing.methods.getClientCount().call();
        const claimCount = await medisharing.methods.getClaimCount().call();

        return {clientCount, claimCount}
    }

    renderRow(row) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{row.period}</Cell>
                <Cell>{row.joinedNo}</Cell>
                <Cell>{row.claims}</Cell>
            </Row>
        );
    }

    renderRows() {
        const rows = [
            {
                period: 'W13',
                joinedNo: this.props.clientCount,
                claims: this.props.claimCount
            }
        ];

        return rows.map((row)=> {
            return this.renderRow(row);
        });
    }

    render() {
        const { Row, Header, Footer, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Admin Portal</h3>
                <p>This portal is for administrator to make claim for client, review the claim for every week and make payout.</p>

                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>Period</HeaderCell>
                            <HeaderCell>No. of People Joined</HeaderCell>
                            <HeaderCell>No. of Claims</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
            </Layout>
        );
    }
}

export default AdminPortalIndex;
