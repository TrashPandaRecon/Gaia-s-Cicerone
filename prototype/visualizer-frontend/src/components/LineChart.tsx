import React from 'react';
import 'react-vis/dist/style.css';
import { SingletonSocket } from '../SingletonSocket';
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	LabelSeries,
	LineMarkSeries,
	Crosshair,
	DiscreteColorLegend,
	Hint,
} from 'react-vis';
import * as d3 from 'd3';
import { Box, Flex, Grid, GridItem, Skeleton, Spinner } from '@chakra-ui/react';
import { dataPipes } from '../config/dataPipeEnum';
import { delay } from '../Util/delay';
interface XYResponseStruct {
	x: string;
	y: number;
}
interface XYResponseGraphData {
	graphData: XYResponseStruct[];
	Label: string;
}
interface XYDataProps {
	graphdataStorage: XYResponseGraphData[];
	dataPipe: string[];
	socketConnection: any;
	value?: any;
	items?: any;
	searchText?: any;
}

class BarChart extends React.Component<{ dataPipe: string[] }, XYDataProps> {
	constructor(props) {
		super(props);
		var itemArray = [];
		for (let i = 0; i < this.props.dataPipe.length; i++) {
			itemArray.push({ title: this.props.dataPipe[i].split(' ')[0] });
		}
		this.state = {
			graphdataStorage: [],
			dataPipe: this.props.dataPipe,
			socketConnection: SingletonSocket.getInstance().getSocket(),
			items: itemArray,
			searchText: '',
			value: null,
		};
	}

	componentDidMount() {
		const { dataPipe, socketConnection, graphdataStorage } = this.state;
		for (let i = 0; i < dataPipe.length; i++) {
			socketConnection.on(dataPipe[i], (data) => {
				graphdataStorage.splice(i, 1, { graphData: data, Label: dataPipe[i] });
				this.setState({ graphdataStorage: graphdataStorage });
			});
		}
	}
	componentWillUnmount() {
		const { dataPipe, socketConnection } = this.state;
		for (let i = 0; i < dataPipe.length; i++) {
			socketConnection.off(dataPipe[i], (data) => {});
		}
	}
	_clickHandler = (item) => {
		const { items } = this.state;
		item.disabled = !item.disabled;
		this.setState({ items });
	};

	render() {
		const { graphdataStorage, value, items, searchText } = this.state;
		return (
			<Flex p="1">
				{graphdataStorage.length == 0 ? (
					<Skeleton height="500px"></Skeleton>
				) : (
					<>
						<Grid h="450px" templateColumns="repeat(8, 1fr)" gap={4}>
							<GridItem colSpan={7}>
								<XYPlot
									onMouseLeave={() => this.setState({ value: null })}
									xType="time"
									width={630}
									height={450}
									animation={true}
									margin={{ bottom: 80, left: 50, right: 10, top: 20 }}
								>
									<VerticalGridLines />
									<HorizontalGridLines />
									<XAxis tickLabelAngle={-45} tickTotal={10} />
                                        <YAxis title='Visitors' tickFormat={(tick) => d3.format('.2s')(tick)} />

									{graphdataStorage.map((graphdata) => (
										<LineMarkSeries
											curve={'curveMonotoneX'}
											//className={graphdata.Label}
											key={graphdata.Label}
											data={graphdata.graphData}
											opacity={1}
											strokeStyle="solid"
											style={{}}
											onValueMouseOver={(d) => {
												this.setState({ value: d });
											}}
										/>
									))}
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
											>
                                                <Box>Visitors: {d3.format('.2s')(value.y)}</Box>
                                                    <Box>Date: {new Date(value.x).toLocaleDateString()}</Box>
											</Box>
										</Hint>
									)}
								</XYPlot>
							</GridItem>
							<GridItem colSpan={1}>
								<DiscreteColorLegend
									orientation="vertical"
									height={650}
									width={120}
									// onItemClick={this._clickHandler}
									items={items}
								/>
							</GridItem>
						</Grid>
					</>
				)}
			</Flex>
		);
	}
}

export default BarChart;
