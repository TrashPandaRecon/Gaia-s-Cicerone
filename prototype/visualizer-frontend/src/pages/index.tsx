import {
	Box, Spinner,
} from '@chakra-ui/react';
import React, {  } from 'react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import BarChart from '../components/LineChart';
import SocialNodeGraph from '../components/SocialNodeGraph';
import {ENDPOINT} from '../config/config';
import FancyBarChart from '../components/FancyBarChart';
import {dataPipes} from '../config/dataPipeEnum';
const socketIOClient = require('socket.io-client');


interface indexProps {
} 

class App extends React.Component<{},indexProps> {
	render() {
		return (
			<Container>
				<Hero title="DEMO" />
				<Main>
					<Box width="100%">
                        <BarChart dataPipe={[dataPipes.MDCSiteVisitorPerDay,dataPipes.CamoKakisVisitorsPerDay,dataPipes.MinDefSiteVisitorsPerDay,dataPipes.SDEVisitorsPerDay,dataPipes.WonderWallVisitorsPerDay]} yAxisName={dataPipes.MDCSiteVisitorPerDay}></BarChart>
					</Box>
                    <Box>
                        <p>{dataPipes.ListenerRelationshipMapByIncome}</p>
						<SocialNodeGraph dataPipe={dataPipes.ListenerRelationshipMapByIncome}></SocialNodeGraph>
					</Box>
				</Main>
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App