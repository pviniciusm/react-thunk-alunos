import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Aluno } from "../../models/aluno.model";
import { realizarLogin } from "../../services/api.service";
import { LoginDTO } from "../../models/login.model";
import { setLoading } from "./loading.slice";

export const realizarLoginThunk = createAsyncThunk("aluno/realizarLogin", async (data: LoginDTO, config) => {
    // set loading true
    config.dispatch(setLoading(true));

    // chamar o login na API
    const result = await realizarLogin(data);

    // set loading false
    config.dispatch(setLoading(false));

    return result;
});

const alunoSlice = createSlice({
    name: "aluno",
    initialState: null as Aluno | null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(realizarLoginThunk.pending, (state, action) => {
            console.log(action);
            return null;
        });

        builder.addCase(realizarLoginThunk.fulfilled, (state, action) => {
            console.log(action);
            return action.payload;
        });

        builder.addCase(realizarLoginThunk.rejected, (state, action) => {
            console.log(action);
            return null;
        });
    },
});

export default alunoSlice.reducer;

// 3 actions
// aluno/realizarLogin/pending      => começou o async thunk
// aluno/realizarLogin/fulfilled    => o async thunk deu OK
// aluno/realizarLogin/rejected     => o async thunk deu erro
