import { Avaliacao } from "./avaliacao.model";

export interface CreateModal {
    open: boolean;
    avaliacao?: Avaliacao;
}
