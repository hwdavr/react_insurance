import React, { Component } from 'react';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import Layout from '../../components/service_provider/Layout';


class HospitalPortalIndex extends Component {

    renderRow(row) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{row.name}</Cell>
                <Cell>{row.time}</Cell>
                <Cell>{row.service}</Cell>
                <Cell>{row.address}</Cell>
                <Cell>
                    <Button color='green' basic>
                        Confirm
                    </Button>
                </Cell>
            </Row>
        );
    }

    renderRows() {
        const rows = [
            {
                name: 'Granny',
                time: '15:00 14-05-2019',
                service: 'Dishwashing',
                address: '1 Yishun Street 11, Singapore 768642'
            },
            {
                name: 'Lily',
                time: '18:00 14-05-2019',
                service: 'Companionship',
                address: '03-01, HDB Hub,, 530 Lor 6 Toa Payoh'
            },
            {
                name: 'Jenny',
                time: '09:00 15-05-2019',
                service: 'Wound Care',
                address: '122 Potong Pasir Ave 1, Singapore 350122'
            },
            {
                name: 'Henry',
                time: '12:00 15-05-2019',
                service: 'Tube Care',
                address: '45 MacPherson Rd, Singapore 348469'
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
            <h3>Caregiver ASIA</h3>
            <p>The Caregiver Group is a global online aggregator of health and caregiving services for businesses and individuals, covering both the insured and the self-funded. By motivating and empowering freelance professionals, The Group transforms the way care is delivered to people and communities.</p>

            <Table celled>
                <Header>
                    <Row>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Booking Time</HeaderCell>
                        <HeaderCell>Requested Service</HeaderCell>
                        <HeaderCell>Address</HeaderCell>
                        <HeaderCell>Confirm</HeaderCell>
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