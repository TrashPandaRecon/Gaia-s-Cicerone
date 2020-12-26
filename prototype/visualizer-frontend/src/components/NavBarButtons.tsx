import { Button } from '@chakra-ui/react';
import React from 'react';

interface NavBarButtonsProps {}

export const NavBarButtons: React.FC<NavBarButtonsProps> = ({ children }) => {
	const mlmd = 3;
	const mtbase = 4;
	const mtmd = 0;
	return (
		<Button display="block" mt={{ base: mtbase, md: mtmd }} ml={{ md: mlmd }}>
			{children}
		</Button>
	);
};
