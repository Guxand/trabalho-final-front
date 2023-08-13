import { Box } from '@mui/material';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const background = '777777';

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Box
			sx={{
				padding: '0px',
				margin: '0px',
				zIndex: '-1',
				height: '100vh',
				background: '#424242',
			}}
		>
			{children}
		</Box>
	);
};

export default Layout;
