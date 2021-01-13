import { Flex, Skeleton} from '@chakra-ui/react';
import React from 'react';
import { scaleCategory20 } from 'd3-scale';
import {
	InteractiveForceGraph,
	ForceGraphNode,
	ForceGraphLink,
} from 'react-vis-force';
import {SingletonSocket} from '../SingletonSocket';
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
	socialdataresponse: nodeGraphDataStruct;
    socketConnection: any;
    dataPipe: string;
}

class SocialNodeGraph extends React.Component<{dataPipe:string}, nodeGraphDataProps> {
	constructor(props) {
		super(props);
		this.state = {
			socialdataresponse: { nodes: [], links: [] },
            dataPipe: this.props.dataPipe,
            socketConnection: SingletonSocket.getInstance().getSocket()
		};
	}
	
	scale = scaleCategory20();
	componentDidMount() {
		const { socketConnection,dataPipe } = this.state;
		socketConnection.on(dataPipe, (data) =>
			this.setState({ socialdataresponse: data })
		);
	}
	render() {
		const { socialdataresponse } = this.state;
		return (
			<>{socialdataresponse.nodes.length == 0 ? (
							<Skeleton height="500px"></Skeleton>
						) : (
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
                            {socialdataresponse.nodes.map((node) => (
                                <ForceGraphNode
                                    key={node.id}
                                    node={{
                                        id: node.id,
                                        label: JSON.stringify(node),
                                        radius: Math.ceil((node.income / 1000) % 10),
                                    }}
                                    fill={this.scale(Math.ceil((node.income / 1000) % 10))}
                                />
                            )
                            )}
						
                            {socialdataresponse.links.map((link) => (
                                <ForceGraphLink
                                    key={link.source + link.target}
                                    link={{
                                        source: link.source,
                                        target: link.target,
                                        value: 5, // this value is just to fix a bug in the library that prevents the node graph from being centered in the frame.
                                    }}
                                    fill="blue"
                                />
                            ))}
						
					</InteractiveForceGraph>
				</Flex>)}
			</>
		);
	}
}
export default SocialNodeGraph;
