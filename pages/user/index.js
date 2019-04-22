import React, { Component } from 'react';
import {
    Button,
    Table,
    Card,
    Modal,
    Icon,
} from 'semantic-ui-react';
import Layout from '../../components/user/Layout';
import web3 from '../../ethereum/web3';
import medisharing from '../../ethereum/medisharing';

class UserPortalIndex extends Component {
    state = {
        modalOpen: false,
    }

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

    renderSummaryRow() {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>1,041,405</Cell>
                <Cell>$1.23</Cell>
                <Cell>223 Days</Cell>
            </Row>
        );
    }

    renderClaimedRow(claim) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{claim.nric}</Cell>
                <Cell>{claim.description}</Cell>
                <Cell>{claim.amount}</Cell>
            </Row>
        );
    }

    renderClaimedRows() {
        return this.props.claims.map((row, index) => {
            row.key = index;
            return this.renderClaimedRow(row);
        });
    }

    renderHistoryRow(history) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{history.period}</Cell>
                <Cell>{history.amount}</Cell>
                <Cell>{history.joinedNo}</Cell>
                <Cell>{history.claimedNo}</Cell>
            </Row>
        );
    }

    renderHistoryRows() {
        const histories = [
            {
                period: 'W12',
                amount: '$0.13',
                joinedNo: '1,039,223',
                claimedNo: '3'
            },
            {
                period: 'W11',
                amount: '$0.17',
                joinedNo: '1,038,103',
                claimedNo: '4'
            }
        ];

        return histories.map((history)=> {
            return this.renderHistoryRow(history);
        });
    }

    onRuquestClaim = async (event) => {
        const accounts = await web3.eth.getAccounts();
        console.log("Request claim for account: ", accounts[0]);
        this.setState({ modalOpen: true });
    }

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        const { Row, Header, Footer, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Your Summarize</h3>
                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>No. of People</HeaderCell>
                            <HeaderCell>Amount Shared</HeaderCell>
                            <HeaderCell>Joined Period</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderSummaryRow()}
                    </Body>
                </Table>

                <h3>W13 Claim</h3>
                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>NRIC</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Claimed Amount</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderClaimedRows()}
                    </Body>
                </Table>

                <h3>History Record</h3>
                <Table celled definition>
                    <Header>
                        <Row>
                            <HeaderCell></HeaderCell>
                            <HeaderCell>Amount Paid</HeaderCell>
                            <HeaderCell>No. of People Joined</HeaderCell>
                            <HeaderCell>No. of People Claimed</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderHistoryRows()}
                    </Body>
                    <Footer>
                        <Row>
                            <HeaderCell colSpan='4'>
                                <Button basic style={{width:'100%'}}>Check More</Button>
                            </HeaderCell>
                        </Row>
                    </Footer>
                </Table>                

                <Modal
                    trigger={<Button primary onClick={this.onRuquestClaim}>Request a Claim</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                    {/* <Header icon='browser' content='Cookies policy' /> */}
                    <Modal.Content>
                    <h3>We have sent a request to your hospital.</h3>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                    </Modal.Actions>
                </Modal>
            </Layout>
        );
    }
}

export default UserPortalIndex;
