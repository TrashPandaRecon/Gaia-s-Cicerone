import {
	Box, Flex, 
} from '@chakra-ui/react';
import React, {  } from 'react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import BarChart from '../components/TimeSeriesLineMarkChart';
import SocialNodeGraph from '../components/SocialNodeGraph';
import {dataPipes} from '../config/dataPipeEnum';
import {DarkModeSwitch} from '../components/DarkModeSwitch';

import TimeSeriesLineMarkChart from '../components/TimeSeriesLineMarkChart';
import TimeSeriesLineChart from '../components/TimeSeriesLineChart';
import RadialChart from '../components/RatingChart';



interface indexProps {
} 

class App extends React.Component<{},indexProps> {
	render() {
		return (
			<Container>
				<Hero title="DEMO" />
				<Main>
					<Flex justifyContent="center" alignItems="center" width="100%">
						<TimeSeriesLineMarkChart
							dataPipe={[
								dataPipes.MDCSiteVisitorPerDay,
								dataPipes.CamoKakisVisitorsPerDay,
								dataPipes.SDEVisitorsPerDay,
                                dataPipes.WonderWallVisitorsPerDay,
                                
							]}
							height={500}
							width={750}
							yLabel={'Visitors'}
						></TimeSeriesLineMarkChart>
					</Flex>
					<Flex justifyContent="center" alignItems="center" width="100%">
						<Flex justifyContent="center" alignItems="center" width="100%">
                        
                    
						<TimeSeriesLineChart
							dataPipe={[dataPipes.OverallPerformanceMindef]}
							height={300}
							width={400}
							yLabel={'Overall Performance'}
                        ></TimeSeriesLineChart></Flex>
                        <RadialChart
							dataPipe={[
								dataPipes.SupportiveOfNS,
								dataPipes.ConfidenceInMindef,
								dataPipes.CommitedToDefendingSingapore,
							]}
							height={350}
							width={350}
						></RadialChart>
                        
                    </Flex>
                    
				</Main>
				<DarkModeSwitch />
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App