import { configureStore } from "@reduxjs/toolkit";
import { persistedReducers } from "./rootReducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistedStore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
