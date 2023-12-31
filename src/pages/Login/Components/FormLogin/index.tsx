import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SnackBarComp } from '../../../../components/SnackBar';
import { useAppSelector } from '../../../../store/hooks';
import { selectAll } from '../../../../store/modules/User/usersSlice';
import {
	emailValidator,
	senhaValidator,
} from '../../../../utils/validators/Inputs';
import ModalOpen from '../ModalCadastro';

const FormLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [senha, setSenha] = useState<string>('');

	const [isError, setIsError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [abertoModal, setAbertoModal] = useState<boolean>(false);

	const navigate = useNavigate();

	const users = useAppSelector(selectAll);

	const verifySnack = (emailIsValid: boolean, senhaIsValid: boolean) => {
		if (emailIsValid === false) {
			setMessage('Erro! Verifique seus dados.');
			setIsError(!emailIsValid);
			return;
		}

		if (senhaIsValid === false) {
			setMessage('Erro! Verifique seus dados.');
			setIsError(!senhaIsValid);
			return;
		}
	};

	const handleCloseSnack = (
		event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsError(false);
	};

	const save = () => {
		const emailIsValid = emailValidator(email);
		const senhaIsValid = senhaValidator(senha);

		verifySnack(emailIsValid, senhaIsValid);
		const usuarioEncontrado = users.find((user) => {
			return user.email === email;
		});

		if (!usuarioEncontrado) {
			verifySnack(false, false);
			return;
		}

		if (usuarioEncontrado.senha === senha) {
			navigate('/home');
			sessionStorage.setItem(
				'userLogged',
				JSON.stringify(usuarioEncontrado.email),
			);
		} else {
			verifySnack(false, false);
		}
	};

	const handleClickOpen = () => {
		setAbertoModal(true);
	};

	return (
		<>
			<Box
				component={'form'}
				sx={{ maxWidth: '75%' }}
				onSubmit={(event) => {
					event.preventDefault();
					save();
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							label="E-mail"
							fullWidth
							onChange={(event) => {
								setEmail(event.currentTarget.value);
							}}
							value={email}
						></TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Senha"
							fullWidth
							onChange={(event) => {
								setSenha(event.currentTarget.value);
							}}
							value={senha}
							type="password"
						></TextField>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="contained"
							fullWidth
							type="submit"
							sx={{
								display: 'block',
								margin: '0 auto',
								width: '130px',
							}}
						>
							Entrar
						</Button>
					</Grid>
					<Grid item xs={12} textAlign={'center'}>
						<Typography variant="caption" fontSize={'20px'} color={'white'}>
							Ainda não tem uma conta?{' '}
							<Link
								component={'button'}
								type="button"
								sx={{ textDecoration: 'none' }}
								onClick={handleClickOpen}
							>
								Crie sua conta.
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<SnackBarComp
				message={message}
				isOpen={isError}
				handleClose={handleCloseSnack}
			/>
			<ModalOpen aberto={abertoModal} mudancaEstado={setAbertoModal} />
		</>
	);
};

export default FormLogin;
