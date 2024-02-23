import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { avaliacoes } from "../../data/avaliacoes";
import { Avaliacao, CriarAvaliacaoBodyDTO } from "../../models/avaliacao.model";
import { criarAvaliacao, listarAvaliacoes } from "../../services/api.service";
import { RootState } from "../store";
import { setLoading } from "./loading.slice";
import { closeModal } from "./create-modal.slice";

export const listarAvaliacoesThunk = createAsyncThunk("avaliacoes/listarAvaliacoes", async (_, config) => {
    config.dispatch(setLoading(true));

    // Buscar id e token do state de aluno
    const state = config.getState() as RootState;
    const aluno = state.aluno;

    // Se nao tem aluno logado, retorna uma lista vazia
    if (!aluno) {
        return [];
    }

    const result = await listarAvaliacoes({
        id: aluno.id,
        token: aluno.token,
    });

    config.dispatch(setLoading(false));

    return result;
});

export const criarAvaliacaoThunk = createAsyncThunk(
    "avaliacoes/criarAvaliacao",
    async (payload: CriarAvaliacaoBodyDTO, config) => {
        config.dispatch(setLoading(true));

        // Buscar id e token do state de aluno
        const state = config.getState() as RootState;
        const aluno = state.aluno;

        // Se nao tem aluno logado, retorna uma lista vazia
        if (!aluno) {
            return null;
        }

        const result = await criarAvaliacao({
            id: aluno.id,
            token: aluno.token,
            disciplina: payload.disciplina,
            nota: payload.nota,
        });

        config.dispatch(setLoading(false));
        config.dispatch(closeModal());

        return result;
    }
);

const avaliacoesSlice = createSlice({
    name: "avaliacoes",
    initialState: avaliacoes as Avaliacao[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listarAvaliacoesThunk.pending, () => {
            return [];
        });

        builder.addCase(listarAvaliacoesThunk.fulfilled, (_, action) => {
            return action.payload;
        });

        builder.addCase(criarAvaliacaoThunk.fulfilled, (state, action) => {
            if (!action.payload) {
                return state;
            }

            return [...state, action.payload];
        });

        builder.addCase(criarAvaliacaoThunk.fulfilled, (state, action) => {
            if (action.payload == null) {
                return state;
            }

            return state.map((item) => {
                if (item.id === action.payload!.id) {
                    return action.payload!;
                }

                return item;
            });
        });
        builder.addCase(criarAvaliacaoThunk.fulfilled, (state, action) => {
            if (action.payload == null) {
                return state;
            }

            return state.filter((item) => item.id !== action.payload!.id);
        });
    },
});

export default avaliacoesSlice.reducer;
//export const {  } = avaliacoesSlice.actions;
