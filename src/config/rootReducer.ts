import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alunoSlice from "./modules/aluno.slice";
import loadingSlice from "./modules/loading.slice";
import avaliacoesSlice from "./modules/avaliacoes.slice";
import paginacaoSlice from "./modules/paginacao.slice";
import createModalSlice from "./modules/create-modal.slice";

const combinedReducers = combineReducers({
    aluno: alunoSlice,
    avaliacoes: avaliacoesSlice,
    loading: loadingSlice,
    paginacao: paginacaoSlice,
    createModal: createModalSlice,
});

export const persistedReducers = persistReducer(
    {
        key: "root",
        storage,
    },
    combinedReducers
);
