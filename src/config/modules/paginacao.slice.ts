import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Paginacao } from "../../models/paginacao.model";

const paginacao: Paginacao = {
    currentPage: 1,
    rowsPerPage: 3,
};

const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState: paginacao,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => {
            console.log(action);

            return {
                ...state,
                currentPage: action.payload,
            };
        },
        changeRowsPerPage: (state, action: PayloadAction<number>) => {
            console.log(action);

            return {
                ...state,
                rowsPerPage: action.payload,
            };
        },
    },
});

export default paginacaoSlice.reducer;
export const { changePage, changeRowsPerPage } = paginacaoSlice.actions;
