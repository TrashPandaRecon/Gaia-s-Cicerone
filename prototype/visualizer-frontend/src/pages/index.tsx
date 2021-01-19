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
import {DarkModeSwitch} from '../components/DarkModeSwitch';



interface indexProps {
} 

class App extends React.Component<{},indexProps> {
	render() {
		return (
			<Container>
				<Hero title="DEMO" />
				<Main>
					<Flex justifyContent="center" alignItems="center" width="100%">
						<BarChart dataPipe={[dataPipes.MDCSiteVisitorPerDay]}></BarChart>
					</Flex>
					<Flex justifyContent="center" alignItems="center" width='100%'>
						<SocialNodeGraph
							dataPipe={dataPipes.ListenerRelationshipMapByIncome}
						></SocialNodeGraph>
					</Flex>
                </Main>
                <DarkModeSwitch/>
				<Footer>Fancy Footer Information</Footer>
			</Container>
		);
	}
}
export default App