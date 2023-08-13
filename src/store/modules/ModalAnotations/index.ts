import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalProps {
	open: boolean;
	contexto: 'criar' | 'editar' | 'deletar';
}

const initialState: ModalProps = {
	open: false,
	contexto: 'criar',
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (
			state,
			action: PayloadAction<'criar' | 'editar' | 'deletar'>,
		) => {
			return {
				open: true,
				contexto: action.payload,
			};
		},
		hideModal: (state) => {
			return {
				...state,
				open: false,
			};
		},
	},
});
export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
