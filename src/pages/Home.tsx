import { Button, Container } from "@mui/material";
import { Header } from "../components/Header";

import { TabelaAvaliacoes } from "../components/TabelaAvaliacoes";
import { useAppDispatch } from "../config/hooks";
import { listarAvaliacoesThunk } from "../config/modules/avaliacoes.slice";
import { CreateModal } from "../components/CreateModal";
import { openCreateModal } from "../config/modules/create-modal.slice";

export const Home = () => {
    const dispatch = useAppDispatch();

    dispatch(listarAvaliacoesThunk());

    const abrirModal = () => {
        dispatch(openCreateModal());
    };

    return (
        <>
            <CreateModal />
            <Header />
            <Container>
                <h1>Lista de avaliações</h1>
                <h5>Esta é a lista</h5>

                <br />

                <Button variant="contained" onClick={abrirModal}>
                    Adicionar
                </Button>

                <br />

                <TabelaAvaliacoes />
            </Container>
        </>
    );
};
