import React , { Component } from 'react';
import { Form, Button, Message, Label, Input, Grid, Image, Card } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link , Router } from '../../routes';
import Layout from '../../components/Layout';

class RequestNew extends Component {

    static async getInitialProps(props) {
        const { address} = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        
        const requests = await Promise.all(
            Array(parseInt(requestCount))
              .fill()
              .map((element, index) => {
                return campaign.methods.requests(index).call();
              })
          );

        return { requests, address };
    }

    state = {
        name: '',
        imageLink: '',
        partyName:'',
        flag: false
    }

    onFinalize = async event=> {
        event.preventDefault();
        Router.pushRoute(`/campaigns/${this.props.address}/vote`);
    }

    onShowResult = async event => {
        event.preventDefault();
        Router.pushRoute(`/campaigns/${this.props.address}/results`);
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { name, imageLink,partyName }= this.state;
            
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(name, partyName, imageLink).send({
                from: accounts[0]
            });

            this.setState({name: '', imageLink: '', partyName: ''});

            Router.pushRoute(`/campaigns/${this.props.address}/dashboard`);    
        } catch(err){
            console.log(err.message);
        }
    }

    renderRows() {

        const items = this.props.requests.map((request, index) => {
           return {
            image : request.imageLink,
            header : request.partyName,
            meta : request.name }
           });
       return <Card.Group itemsPerRow={3} items = {items} style = {{ marginRight : '30px'}}/>;
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={11}>
                    { this.renderRows() }
                    </Grid.Column>
               
                    <Grid.Column width={5}>
                    <h3>Add a Candidate.</h3>           
                        <Form onSubmit={this.onSubmit} >
                        <Form.Field>
                            <label>Name of the Candidate.</label>
                            <Input 
                                value = {this.state.name}
                                onChange = {event => this.setState({ name: event.target.value })}
                            />
                        </Form.Field>
                        
                        <Form.Field>
                            <label>Party Name of the Candidate.</label>
                            <Input 
                                value= {this.state.partyName}
                                onChange = {event => this.setState({ partyName: event.target.value })}
                            />
                        </Form.Field>
                        
                        <Form.Field>
                            <label>Image URL of the party.</label>
                            <Input 
                                value = {this.state.imageLink}
                                onChange = {event => this.setState({ imageLink: event.target.value})}
                            />
                        </Form.Field>

                        <Button primary>Add Candidate.</Button>
                       </Form>
                       <Form onSubmit = {this.onFinalize}>
                       <Button inverted color='blue' style={{marginTop: '25px'}} >Start Election!</Button> 
                       </Form>
                       <Form onSubmit = {this.onShowResult}>
                       <Button inverted color='blue' style={{marginTop: '25px'}} >Show Result</Button> 
                       </Form>
                       
                    </Grid.Column> 
                </Grid>       
            </Layout>
        );
    }
}

export default RequestNew;