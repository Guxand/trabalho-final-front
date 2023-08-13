import { Container, Grid } from '@mui/material';

import FormLogin from './Components/FormLogin';
import LoginText from './Components/LoginText';
import { TextProps } from './types/TextProps';

const Login = () => {
	const phrases: TextProps[] = [
		{
			phrase: 'Lista de Recados!',
		},
		{
			phrase: 'Crie seus Recados.',
		},
		
	];
	return (
		<Container
			sx={{
				height: '100vh',
			}}
		>
			<Grid container>
				<Grid
					xs={6}
					item
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						
					}}
					gap={3}
				>
					<LoginText phrases={phrases} />
				
				</Grid>
				<Grid
					xs={6}
					item
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<FormLogin />
				</Grid>
			</Grid>
		</Container>
		
	);
};

export default Login;
