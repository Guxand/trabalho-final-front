import { Add } from '@mui/icons-material';
import { Fab, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

import ColumnAnotation from '../ColumnAnotations';
import ModalAnotations from '../ModalAnotations';

const CardAnotations: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<Paper
						square
						sx={{
							
						}}
					>
						<Grid container xs={12}>
							<ColumnAnotation />
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Fab
				variant="extended"
				sx={{ position: 'fixed', bottom: '20px', right: '20px' }}
				onClick={() => setOpen(true)}
			>
				<Add />
				Criar Recado
			</Fab>
			<ModalAnotations contexto={'criar'} open={open} setOpen={setOpen} />
		</>
	);
};

export default CardAnotations;
