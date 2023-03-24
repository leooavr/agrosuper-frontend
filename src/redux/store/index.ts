import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
    uiReducer,
    authReducer,
    regionReducer,
    provinceReducer,
    communeReducer,
    branchofficeReducer,
    saleReducer,
    clientReducer
} from '../';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        regions: regionReducer,
        provinces: provinceReducer,
        communes: communeReducer,
        branchoffices: branchofficeReducer,
        sales: saleReducer,
        clients: clientReducer
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
