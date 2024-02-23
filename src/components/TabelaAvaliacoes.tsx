import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hooks";
import { Delete, Edit } from "@mui/icons-material";
import { changePage, changeRowsPerPage } from "../config/modules/paginacao.slice";
import { Avaliacao } from "../models/avaliacao.model";
import { openUpdateModal } from "../config/modules/create-modal.slice";

export const TabelaAvaliacoes = () => {
    const avaliacoes = useAppSelector((state) => state.avaliacoes);
    const paginacao = useAppSelector((state) => state.paginacao);
    const dispatch = useAppDispatch();

    const mudarPagina = (_: any, pagina: number) => {
        dispatch(changePage(pagina + 1));
    };

    const mudarRows = (event: any) => {
        dispatch(changeRowsPerPage(event.target.value));
    };

    const posInicial = paginacao.rowsPerPage * (paginacao.currentPage - 1);

    const abrirModalUpdate = (avaliacao: Avaliacao) => {
        dispatch(openUpdateModal(avaliacao));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Discilpina</TableCell>
                        <TableCell>Nota</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {avaliacoes.slice(posInicial, posInicial + paginacao.rowsPerPage).map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.disciplina}</TableCell>
                            <TableCell>{item.nota}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => abrirModalUpdate(item)}>
                                    <Edit color="primary" />
                                </IconButton>

                                <IconButton>
                                    <Delete color="error" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>
                            <TablePagination
                                component="div"
                                count={avaliacoes.length}
                                page={paginacao.currentPage - 1}
                                onPageChange={mudarPagina}
                                rowsPerPage={paginacao.rowsPerPage}
                                rowsPerPageOptions={[2, 3, 5, 10]}
                                onRowsPerPageChange={mudarRows}
                            />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};
