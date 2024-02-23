import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import { useAppSelector } from "../config/hooks";

export const LoadingModal = () => {
    const loading = useAppSelector((state) => state.loading);

    return (
        <Dialog open={loading}>
            <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CircularProgress sx={{ mb: 3 }} />
                <h5>Aguarde! Carregando...</h5>
            </DialogContent>
        </Dialog>
    );
};
