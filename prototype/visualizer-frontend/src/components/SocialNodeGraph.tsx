import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { scaleCategory20 } from 'd3-scale';
import {
    InteractiveForceGraph,
    ForceGraph,
	ForceGraphNode,
	ForceGraphLink,
} from 'react-vis-force';
// data structure definitions for NodeGraph component
interface links {
	source: string;
	target: string;
}
interface nodes {
    id: string;
    income: number;
}
interface nodeGraphDataStruct {
	nodes: nodes[];
	links: links[];
}

function SocialNodeGraph({
	nodeGraphData,
}: {
	nodeGraphData: nodeGraphDataStruct;
    }) {
    const scale = scaleCategory20();
    return (
			<InteractiveForceGraph
				animation="wobbly"
				simulationOptions={{
					height: 500,
					width: 1000,
					alpha: 1,
					animate: true,
				}}
				labelAttr="label"
				onSelectNode={(node) => console.log(node.id)}
				highlightDependencies
			>
				{nodeGraphData.nodes.length == 0 ? (
					<Spinner />
				) : (
					nodeGraphData.nodes.map((node) => (
						<ForceGraphNode
							key={node.id}
							node={{
								id: node.id,
								label: node.id,
								income: node.income,
								radius: Math.ceil((node.income / 1000) % 10),
							}}
							fill={scale(Math.ceil((node.income / 1000) % 10))}
						/>
					))
				)}
				{nodeGraphData.nodes.length == 0 ? (
					<></>
				) : (
					nodeGraphData.links.map((link) => (
						<ForceGraphLink
							key={link.source + link.target}
							link={{ source: link.source, target: link.target }}
							fill="blue"
						/>
					))
				)}
			</InteractiveForceGraph>
		);
}
export default SocialNodeGraph;
