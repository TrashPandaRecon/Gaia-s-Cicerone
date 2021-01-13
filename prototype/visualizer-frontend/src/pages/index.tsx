import {
	Box, Flex, 
} from '@chakra-ui/react';
import React, {  } from 'react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import BarChart from '../components/LineChart';
import SocialNodeGraph from '../components/SocialNodeGraph';
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
					<Flex>
                        <BarChart dataPipe={[dataPipes.MDCSiteVisitorPerDay,dataPipes.CamoKakisVisitorsPerDay,dataPipes.MinDefSiteVisitorsPerDay,dataPipes.SDEVisitorsPerDay,dataPipes.WonderWallVisitorsPerDay]} yAxisName={dataPipes.MDCSiteVisitorPerDay}></BarChart>
					</Flex>
                    <Flex>
                        <p>{dataPipes.ListenerRelationshipMapByIncome}</p>
						<SocialNodeGraph dataPipe={dataPipes.ListenerRelationshipMapByIncome}></SocialNodeGraph>
					</Flex>
				</Main>
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App