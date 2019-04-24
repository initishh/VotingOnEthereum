import React, { Component } from 'react';
import { Table, Image } from 'semantic-ui-react';

class RequestVotes extends Component {
   
    render() {

        const { Row, Cell } = Table;
        const {id, request, approversCount } = this.props;

        return (
                     <Table.Row>
                        <Table.Cell><Image size = 'small' src = {request.imageLink}/></Table.Cell>
                        <Table.Cell>{request.name}</Table.Cell>
                        <Table.Cell>{request.partyName}</Table.Cell>
                        <Table.Cell>{request.voteCount}</Table.Cell>
                    </Table.Row>
        );
    }
}

export default RequestVotes;