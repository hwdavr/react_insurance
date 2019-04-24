import React, { Component } from 'react';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import Layout from '../../components/hospital/Layout';


class HospitalPortalIndex extends Component {

    renderRow(row) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{row.time}</Cell>
                <Cell>{row.name}</Cell>
                <Cell>{row.address}</Cell>
                <Cell>{row.contact}</Cell>
                <Cell>
                    <Button color='green' basic>
                        Review
                    </Button>
                </Cell>
            </Row>
        );
    }

    renderRows() {
        const rows = [
            {
                time: '15:21  23-04-2019',
                name: 'Granny',
                address: '1 Yishun Street 11, Singapore 768642',
                contact: '93837287',
            },
            {
                time: '15:17 23-04-2019',
                name: 'Jenny',
                address: '122 Potong Pasir Ave 1, Singapore 350122',
                contact: '84737285',
            },
        ];

        return rows.map((row)=> {
            return this.renderRow(row);
        });
    }

    render() {
        const { Row, Header, Footer, HeaderCell, Body } = Table;

        return (
        <Layout>
            <h3>Hospital Portal</h3>
            <p>This portal is for hospital to monitor if there is any ambulance request.</p>

            <Table celled>
                <Header>
                    <Row>
                        <HeaderCell>Time</HeaderCell>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Address</HeaderCell>
                        <HeaderCell>Contact No.</HeaderCell>
                        <HeaderCell>Real time data review</HeaderCell>
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

export default HospitalPortalIndex;