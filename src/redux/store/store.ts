import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import movieReducer from "../reducer/movieReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    movieReducer
})
const persistConfig = {
    key: 'root',
    storage: storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: [sagaMiddleware]
    });
}
export const stores = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
export const persister = persistStore(stores)
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
sagaMiddleware.run(rootWatcher);
