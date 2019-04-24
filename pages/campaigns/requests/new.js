import React , { Component } from 'react';
import { Form, Button, Message, Label,Table, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link , Router } from '../../../routes';
import Layout from '../../../components/Layout';
import ReactVotes from '../../../components/ReactVotes';

class RequestNew extends Component {

    static async getInitialProps(props) {
        const { address } = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
          
        const requests = await Promise.all (
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call();
            })
        );
        return { address , requests, requestCount };
    }

    renderVotes() {

        console.log('It reached here');

        return this.props.requests.map((request, index) => {
            return (
            <ReactVotes 
                request = {request}
                key = {index}
                id = {index} 
                address = {this.props.address}
            />
            );
        });
    }

    render() {
        
    const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Table>
                  <Header>
                    <Row>
                        <HeaderCell>Party Logo</HeaderCell>
                        <HeaderCell>Name</HeaderCell>
                        <HeaderCell>Party Name</HeaderCell>
                        <HeaderCell>Votes Received</HeaderCell>
                    </Row>
                  </Header>
                <Body>{this.renderVotes()}</Body>
                </Table>
                
            </Layout>

        );
    }
}

export default RequestNew;