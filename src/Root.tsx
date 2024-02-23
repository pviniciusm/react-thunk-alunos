import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./config/themes/default.theme";
import { LoadingModal } from "./components/LoadingModal";
// import { darkTheme } from "./config/themes/dark.theme";

export const Root = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <LoadingModal />
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
};
