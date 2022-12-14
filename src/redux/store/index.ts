import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { uiReducer, authReducer } from '../';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
