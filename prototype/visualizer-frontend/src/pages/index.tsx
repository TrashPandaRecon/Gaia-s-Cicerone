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
import SocialNodeGraph from '../components/SocialNodeGraph';
import {SOCIALNODEDATA, SOCIALNODEDATA1} from '../data';
const socketIOClient = require('socket.io-client');
const ENDPOINT = 'http://localhost:3456';
interface socialdatastruct{
    nodes: {id: string}[]
    links: {source: string, target:string}[]
}
interface indexProps {
    endpoint: string
    salesresponse: any
    timeresponse: number
    socialdataresponse: socialdatastruct
}

class App extends React.Component<{},indexProps> {
	constructor(props) {
        super(props);
        this.state = {
            salesresponse: [],
            timeresponse: 0,
            socialdataresponse: {nodes: [], links: []},
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
        socket.on('FromSocialNodeData', (data) =>
					this.setState({ socialdataresponse: data })
				);
	}

	render() {
        const {timeresponse, salesresponse, socialdataresponse} = this.state;
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
						
                        <SocialNodeGraph nodeGraphData={socialdataresponse}></SocialNodeGraph>
						
					</Box>
				</Main>
				<DarkModeSwitch></DarkModeSwitch>
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App