import React, { Component } from 'react';
import { Table, Button, Image, Form, Header, Tab,Grid } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
   
   onApprove = async () => {
        const accounts = await web3.eth.getAccounts(); 
        const campaign = Campaign(this.props.address);
        
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
   }
   
    render() {
        
        const {id, request } = this.props;

        return (
                <Form onSubmit = {this.onApprove }>

                <Table >
                    <Table.Row>
                        <Table.Cell textAlign='left'>
                                <Image size='small' src={request.imageLink} />          
                        </Table.Cell>
                        <Table.Cell>
                            <Header as='h2' textAlign='center'>
                                {request.partyName}
                            </Header>
                        </Table.Cell>
                        <Table.Cell textAlign='center'>
                        <Button size = 'huge' fluid inverted color='green'>VOTE</Button>
                        </Table.Cell>    
                    </Table.Row>
                </Table>
                
                </Form>             
        );
    }
}

export default RequestRow;