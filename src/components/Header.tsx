import { AppBar, Container, Toolbar, styled } from "@mui/material";

const ToolbarStyled = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <ToolbarStyled>
                    <div>
                        <span>Logo</span>
                    </div>
                    <div>
                        <span>Actions</span>
                    </div>
                </ToolbarStyled>
            </Container>
        </AppBar>
    );
};
