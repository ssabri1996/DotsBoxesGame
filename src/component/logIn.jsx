import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import '../App.css'
import Game from "./dotsGrid"
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { db } from '../services/firebase'
class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: '' ,
            password:'',
           playerList:[],
           signIn:'Hello Player 1',
           counter:1
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        db.collection('players')
            .get()
            .then(snapshot => {
                const player = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    player.push(data)
                })
                this.setState({
                    playerList:player
                })
                console.log(this.state.playerList)
            })
            .catch(error => console.log(error))

       

        db.collection('players')
            .add({
                name: this.state.user,
                pass:this.state.password,
                score: 0})
                this.state.signIn="Hello Player 2"
                console.log("player adedd !!")
this.setState({
    counter:2
})
if(this.state.counter===2){
    this.refs.btn.setAttribute("disabled", "true");
    this.refs.btn.setAttribute("display", "");
}
    }
    render() {
        return (
            <Container className="App">
                <h2>{this.state.signIn}</h2>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="user"
                                id="idUser"
                                placeholder="Enter Username"
                                value={this.state.value} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="******"
                                value={this.state.password.value}
                                onChange={this.handleChange}
                            
                            />
                        </FormGroup>
                    </Col>
                    <button ref="btn">Submit </button>
                    <Route path="/game" component={Game}></Route>
                    <NavLink to="/Game">play</NavLink>
                </Form>
            </Container>
        );
    }
}

export default LogIn;