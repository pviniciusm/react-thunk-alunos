export interface Avaliacao {
    id: string;
    nota: number;
    disciplina: string;
}

export interface ListarAvaliacoesDTO {
    id: string;
    token: string;
}

export interface CriarAvaliacaoBodyDTO {
    disciplina: string;
    nota: number;
}

export interface CriarAvaliacaoDTO extends CriarAvaliacaoBodyDTO {
    id: string;
    token: string;
}

export interface AtualizarAvaliacaoDTO {
    id: string;
    token: string;
    disciplina?: string;
    nota?: number;
}
