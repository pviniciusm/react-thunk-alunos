import axios from "axios";
import { LoginDTO } from "../models/login.model";
import { Aluno } from "../models/aluno.model";
import { Avaliacao, CriarAvaliacaoDTO, ListarAvaliacoesDTO } from "../models/avaliacao.model";

const api = axios.create({
    baseURL: "http://localhost:3335",
});

export async function realizarLogin(data: LoginDTO) {
    try {
        // 1 - Entrada
        // 2 - Processamento
        const result = await api.post("/login", data);

        // 3 - Saída // { ok: true, message: "", data: {} }
        return result.data.data as Aluno;
    } catch (error: any) {
        console.log(error);
        alert(error.toString());
        return null;
    }
}

// /aluno/:id/avaliacoes GET
// id (params), token (header authorization)
export async function listarAvaliacoes(data: ListarAvaliacoesDTO) {
    try {
        // 1 - Entrada ok
        // 2 - Processamento
        const result = await api.get(`/aluno/${data.id}/avaliacao`, {
            headers: {
                Authorization: data.token,
            },
        });

        // 3 - Saída // { ok: true, message: "", data: {} }
        return result.data.data as Avaliacao[];
    } catch (error: any) {
        console.log(error);
        alert(error.toString());
        return [];
    }
}

export async function criarAvaliacao(data: CriarAvaliacaoDTO) {
    try {
        // 1 - Entrada ok

        // 2 - Processamento
        const result = await api.post(
            `/aluno/${data.id}/avaliacao`,
            {
                disciplina: data.disciplina,
                nota: data.nota,
            },
            {
                headers: {
                    Authorization: data.token,
                },
            }
        );

        // 3 - Saída // { ok: true, message: "", data: {} }
        return result.data.data as Avaliacao;
    } catch (error: any) {
        console.log(error);
        alert(error.toString());
        return null;
    }
}
