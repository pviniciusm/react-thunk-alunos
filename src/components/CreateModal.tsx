import { Button, Dialog, DialogContent, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { closeModal } from "../config/modules/create-modal.slice";
import { CriarAvaliacaoBodyDTO, CriarAvaliacaoDTO } from "../models/avaliacao.model";
import { criarAvaliacaoThunk } from "../config/modules/avaliacoes.slice";

export const CreateModal = () => {
    const createModal = useAppSelector((state) => state.createModal);
    const dispatch = useAppDispatch();

    const atualizarAvaliacao = !!createModal.avaliacao;

    const titulo = createModal.avaliacao
        ? `Editar a avaliação ${createModal.avaliacao.disciplina} (${createModal.avaliacao.nota})`
        : "Criar uma nova avaliação";

    const submeterFormulario = (event: any) => {
        event.preventDefault();

        return atualizarAvaliacao ? submterAtualizacao(event) : submeterCriacao(event);
    };

    const submeterCriacao = (event: any) => {
        const body: CriarAvaliacaoBodyDTO = {
            disciplina: event.target.disciplina.value,
            nota: event.target.nota.value,
        };

        dispatch(criarAvaliacaoThunk(body));
    };

    const submterAtualizacao = (event: any) => {
        // ...
    };

    return (
        <Dialog open={createModal.open} onClose={() => dispatch(closeModal())}>
            <DialogContent>
                <h2>{titulo}</h2>
                <form onSubmit={submeterFormulario}>
                    <TextField label="Discilpina" name="disciplina" required fullWidth />

                    <TextField label="Nota" name="nota" required fullWidth type="number" sx={{ mb: 1, mt: 1 }} />

                    <Button type="submit" variant="contained" fullWidth>
                        {atualizarAvaliacao ? "Salvar" : "Criar"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};
