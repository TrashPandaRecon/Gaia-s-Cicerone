import {
	Box, Spinner,
} from '@chakra-ui/react';
import React, {  } from 'react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import BarChart from '../components/BarChart';
import SocialNodeGraph, {nodeGraphDataStruct} from '../components/SocialNodeGraph';
import {SOCIALNODEDATA, SOCIALNODEDATA1} from '../data';
import {ENDPOINT} from '../config';
import FancyBarChart from '../components/FancyBarChart';
const socketIOClient = require('socket.io-client');


interface indexProps {
    endpoint: string
    salesresponse: any
    timeresponse: number
}

class App extends React.Component<{},indexProps> {
	constructor(props) {
        super(props);
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
		return (
			<Container>
				<Hero title="DEMO" />
				<Main>
					<Box>The date is {timeresponse}</Box>
					<Box width="100%">
						{!salesresponse ? (
							<BarChart data={{}}></BarChart>
						) : (
							<BarChart data={salesresponse}></BarChart>
						)}
					</Box>
                    <Box>
                        <SocialNodeGraph></SocialNodeGraph>
                    </Box>
                    {/* <Box> i hate this library i really do
                        <FancyBarChart data={salesresponse}></FancyBarChart>
                    </Box> */}
				</Main>
				<DarkModeSwitch></DarkModeSwitch>
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App