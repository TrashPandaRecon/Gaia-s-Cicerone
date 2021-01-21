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
}

class TimeSeriesLineMarkChart extends React.Component<{ dataPipe: string[], height:number,width:number,yLabel:string }, XYDataProps> {
	constructor(props) {
		super(props);
        var itemArray = [];
        var datastore=[]
		for (let i = 0; i < this.props.dataPipe.length; i++) {
            itemArray.push({title: this.props.dataPipe[i].split(' ')[0]});
             datastore.push({
								graphData: [{ x: '0', y: 0 }],
								Label: this.props.dataPipe[i],
							});
        }
        console.log(datastore)
		this.state = {
			graphdataStorage: datastore,
			dataPipe: this.props.dataPipe,
			socketConnection: SingletonSocket.getInstance().getSocket(),
			items: itemArray,
            value: null,
		};
	}

	componentDidMount() {
		const { dataPipe, socketConnection, graphdataStorage } = this.state;
        for (let i = 0; i < dataPipe.length; i++) {
            console.log(dataPipe[i])
			socketConnection.on(dataPipe[i], (data) => {
                graphdataStorage.splice(i, 1, {graphData: data, Label: dataPipe[i]});
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

	render() {
		const { graphdataStorage, value, items, } = this.state;
		return (
			<Flex p="1">
				{graphdataStorage.length == 0 ? (
					<Skeleton
						height={this.props.height.toString() + 'px'}
						width={this.props.width.toString() + 'px'}
					></Skeleton>
				) : (
					<>
						<Grid
							h={this.props.height}
							templateColumns="repeat(8, 1fr)"
							gap={4}
						>
							<GridItem colSpan={7}>
								<XYPlot
									onMouseLeave={() => this.setState({ value: null })}
									xType="time"
									width={(this.props.width / 5) * 4} // 80% of total width
									height={this.props.height}
									animation={true}
									margin={{ bottom: 80, left: 50, right: 10, top: 20 }}
								>
									<VerticalGridLines />
									<HorizontalGridLines />
									<XAxis tickLabelAngle={-45} tickTotal={10} />
									<YAxis
										title={this.props.yLabel}
										tickFormat={(tick) => d3.format('.2s')(tick)}
									/>

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
												fontSize="sm"
											>
												<Box>Visitors: {d3.format('.2s')(value.y)}</Box>
												<Box>
													Date: {new Date(value.x).toLocaleDateString()}
												</Box>
											</Box>
										</Hint>
									)}
								</XYPlot>
							</GridItem>
							<GridItem colSpan={1}>
								<DiscreteColorLegend
									orientation="vertical"
									height={this.props.height}
									width={this.props.width / 5}
									items={items}
									padding={1}
								/>
							</GridItem>
						</Grid>
					</>
				)}
			</Flex>
		);
	}
}

export default TimeSeriesLineMarkChart;
