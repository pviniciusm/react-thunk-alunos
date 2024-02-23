import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { Header } from "../components/Header";
import { LoginDTO } from "../models/login.model";
import { useAppDispatch } from "../config/hooks";
import { realizarLoginThunk } from "../config/modules/aluno.slice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const disptach = useAppDispatch();
    const navigate = useNavigate();

    const submterLogin = async (event: any) => {
        event.preventDefault();

        const data: LoginDTO = {
            email: event.target.email.value,
            senha: event.target.senha.value,
        };

        const aluno = await disptach(realizarLoginThunk(data)).unwrap();

        if (aluno) {
            navigate("/");
        }
    };

    return (
        <>
            <Header />
            <Container>
                <h1>Faça o seu login</h1>

                <Card>
                    <form onSubmit={submterLogin}>
                        <Grid container spacing={2} padding={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth name="email" label="E-mail" type="email" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth name="senha" label="Senha" type="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained">
                                    Realizar login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </>
    );
};
