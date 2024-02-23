import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateModal } from "../../models/create-modal.model";
import { Avaliacao } from "../../models/avaliacao.model";

const state: CreateModal = {
    open: false,
};

const createModalSlice = createSlice({
    name: "createModal",
    initialState: state,
    reducers: {
        openCreateModal: () => {
            return {
                open: true,
                avaliacao: undefined,
            };
        },
        closeModal: () => {
            return {
                open: false,
                avaliacao: undefined,
            };
        },
        openUpdateModal: (_, action: PayloadAction<Avaliacao>) => {
            return {
                open: true,
                avaliacao: action.payload,
            };
        },
    },
});

export default createModalSlice.reducer;
export const { openCreateModal, closeModal, openUpdateModal } = createModalSlice.actions;
