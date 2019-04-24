import React, { Component } from 'react';
import {
    Button,
    Table,
} from 'semantic-ui-react';
import Layout from '../../components/government/Layout';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class HospitalPortalIndex extends Component {
    static defaultProps = {
        center: {
          lat: 1.355413,
          lng: 103.837844
        },
        zoom: 11
      };
    
    renderRow(row) {
        const { Row, Cell } = Table;
        return (
            <Row>
                <Cell>{row.name}</Cell>
                <Cell>{row.time}</Cell>
                <Cell>{row.address}</Cell>
            </Row>
        );
    }

    renderRows() {
        const rows = [
            {
                name: 'Granny',
                time: '15:00 14-05-2019',
                address: '1 Yishun Street 11, Singapore 768642'
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
            <h3>Government Portal</h3>
            <p>This portal is for CC to monitor if there is any emergency request in this area.</p>

            <Table celled>
                <Header>
                    <Row>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Activated Time</HeaderCell>
                        <HeaderCell>Address</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>

            {/* Important! Always set the container height explicitly */}
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{
                    key:'my key',
                    language: 'en',
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={1.3413}
                    lng={103.77844}
                    text="Granny"
                />
                </GoogleMapReact>
            </div>
        </Layout>
        );
    }
}

export default HospitalPortalIndex;