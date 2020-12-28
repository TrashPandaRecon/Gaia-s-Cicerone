import { Alert, Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react';
import React from 'react';
import { scaleCategory20 } from 'd3-scale';
import {
	InteractiveForceGraph,
	ForceGraphNode,
	ForceGraphLink,
	// Hint as forceHint,
} from 'react-vis-force';
import { Hin as visHint } from 'react-vis';
import { ENDPOINT } from '../config';
const socketIOClient = require('socket.io-client');
// data structure definitions for NodeGraph component
interface links {
	source: string;
	target: string;
}
interface nodes {
	id: string;
	income: number;
}
export interface nodeGraphDataStruct {
	nodes: nodes[];
	links: links[];
}
interface nodeGraphDataProps {
	value?: any;
	socialdataresponse: nodeGraphDataStruct;
	endpoint: string;
}

class SocialNodeGraph extends React.Component<{}, nodeGraphDataProps> {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
			socialdataresponse: { nodes: [], links: [] },
			endpoint: ENDPOINT,
		};
	}
	
	scale = scaleCategory20();
	componentDidMount() {
		const { endpoint } = this.state;
		//Very simply connect to the socket
		const socket = socketIOClient(endpoint);
		//Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
		socket.on('FromSocialNodeData', (data) =>
			this.setState({ socialdataresponse: data })
		);
	}
	render() {
		const { socialdataresponse, value } = this.state;
		return (
			<>
				<Flex p="4">
					<InteractiveForceGraph
						animation="wobbly"
						simulationOptions={{
							height: 500,
							width: 1000,
							alpha: 1,
							animate: true,
						}}
						labelAttr="label"
						highlightDependencies
					>
						{socialdataresponse.nodes.length == 0 ? (
							<></>
						) : (
							socialdataresponse.nodes.map((node) => (
								<ForceGraphNode
									key={node.id}
									node={{
										id: node.id,
										label: JSON.stringify(node),
										radius: Math.ceil((node.income / 1000) % 10),
									}}
									fill={this.scale(Math.ceil((node.income / 1000) % 10))}
								/>
							))
						)}
						{socialdataresponse.nodes.length == 0 ? (
							<></>
						) : (
							socialdataresponse.links.map((link) => (
								<ForceGraphLink
									key={link.source + link.target}
									link={{
										source: link.source,
										target: link.target,
										value: 5,
									}}
									fill="blue"
								/>
							))
						)}
					</InteractiveForceGraph>
				</Flex>
			</>
		);
	}
}
export default SocialNodeGraph;
