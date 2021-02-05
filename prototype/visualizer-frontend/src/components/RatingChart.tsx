import React from 'react';
import 'react-vis/dist/style.css';
import { SingletonSocket } from '../SingletonSocket';
import { RadialChart as RChart, CircularGridLines,DiscreteColorLegend,Hint } from 'react-vis';
import * as d3 from 'd3';
import { Box, Flex, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import theme from '../theme';
import { ENETUNREACH } from 'constants';

// This radial chart is specifically only for showing scores out of 5.
interface ResponseStruct {
	angle: number;
	radius: number;
	label: string;
    subLabel?: string;
    value: number | string;
}

interface DataProps {
	dataStorage: ResponseStruct[];
	dataPipe: string[];
	socketConnection: any;
	value?: any;
	items?: any;
}

class RadialChart extends React.Component<
	{ dataPipe: string[]; height: number; width: number },
	DataProps
> {
	constructor(props) {
		super(props);
        var itemArray = [];
        var datastore =[]
		for (let i = 0; i < this.props.dataPipe.length; i++) {
            itemArray.push({title: this.props.dataPipe[i]});
            datastore.push({
					angle: 1,
					radius: 0.8,
                    label: this.props.dataPipe[i],
                    value: "Fetching Data...",
				})
        }
        
		this.state = {
			dataStorage: datastore,
			dataPipe: this.props.dataPipe,
			socketConnection: SingletonSocket.getInstance().getSocket(),
			items: itemArray,
			value: null,
		};
		
		
	}

	componentDidMount() {
		const { dataPipe, socketConnection, dataStorage } = this.state;

		for (let i = 0; i < dataPipe.length; i++) {
			socketConnection.on(dataPipe[i], (data) => {
				var scaledRadius = +((((1 / 6) * 5) / 5) * data.radius).toFixed(7);
				dataStorage.splice(i, 1, {
					angle: 1,
					radius: scaledRadius,
                    label: data.label,
                    subLabel: data.subLabel,
                    value: data.radius,
				});
				this.setState({ dataStorage: dataStorage });
			});
		}
	}
	componentWillUnmount() {
		const { dataPipe, socketConnection } = this.state;
		for (let i = 0; i < dataPipe.length; i++) {
			socketConnection.off(dataPipe[i], (data) => {});
		}
	}
	
	render() {
		const { dataStorage,value, items } = this.state;

		return (
			<Flex p="1">
				{dataStorage.length != 0 ? (
					<>
						<Grid h={this.props.height} templateRows="repeat(8, 1fr)" gap={1}>
							<GridItem rowSpan={4} justifyContent="center" alignItems="center">
								<RChart
									width={this.props.width / 2}
									height={this.props.height / 2}
									data={dataStorage}
									animation={true}
									radius={this.props.width / 4}
									onNearestXY={(d) => {
										this.setState({ value: d });
									}}
								>
									<CircularGridLines
										tickTotal={5}
										tickValues={[...new Array(6)].map((v, i) => i / 6 - 1)}
										style={{ stroke: '#666262', strokeOpacity: 0.4 }}
									/>
									{value && (
										<Hint value={value}>
											<Box
												maxW="sm"
												borderWidth="1px"
												borderRadius="lg"
												overflow="hidden"
												p="1"
												bg="steelblue"
												color="white"
												fontSize="sm"
											>
												<Box>{value.label}</Box>
												<Box>Rating: {value.value}</Box>
											</Box>
										</Hint>
									)}
								</RChart>
							</GridItem>
							<GridItem rowSpan={4}>
								<DiscreteColorLegend
									orientation="vertical"
									height={this.props.height}
									width={this.props.width} // 20% of width taken as input from parent
									items={items}
									padding={1}
								/>
							</GridItem>
						</Grid>
					</>
				) : (
					<Skeleton
						height={(this.props.height * 2).toString() + 'px'}
						width={(this.props.width * 2).toString() + 'px'}
					></Skeleton>
				)}
			</Flex>
		);
	}
}

export default RadialChart;
