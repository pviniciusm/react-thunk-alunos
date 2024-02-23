import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    reducers: {
        setLoading: (_, action: PayloadAction<boolean>) => {
            return action.payload;
        },
    },
});

export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions;
