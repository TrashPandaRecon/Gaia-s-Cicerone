import {
	Code,
	List,
	ListItem,
	ListIcon,
	Link as ChakraLink,
	Text,
    Box,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import BarChart from '../components/BarChart';
import {SALESDATA} from '../data';
const socketIOClient = require('socket.io-client');
const ENDPOINT = 'http://localhost:30002';
interface indexProps {
    endpoint: string
    salesresponse: any
    timeresponse: number
}

class App extends React.Component<{},indexProps> {
	constructor() {
        super({});
        this.state = {
            salesresponse: [],
			timeresponse: 0,
			endpoint: ENDPOINT,
		};
	}

	componentDidMount() {
		const { endpoint } = this.state;
		//Very simply connect to the socket
		const socket = socketIOClient(endpoint);
		//Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
        socket.on('FromAPI', (data) => this.setState({timeresponse: data}));
        socket.on('FromSalesData', (data) => this.setState({salesresponse: data}))
        
	}

	render() {
        const {timeresponse, salesresponse} = this.state;
        console.log(salesresponse)
		return (
            <Container>
                <Hero title="DEMO"/>
                <Main>
                    <Box>The date is {timeresponse}</Box>
                    <Box width="100%">
                        {!salesresponse ? (<BarChart data={{}}></BarChart>):(<BarChart data={salesresponse}></BarChart> )}
                    </Box>
                </Main>
                <DarkModeSwitch></DarkModeSwitch>
                <Footer>Fancy</Footer>
            </Container>
		);
	}
}
export default App