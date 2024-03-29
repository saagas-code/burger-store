import {combineReducers} from 'redux'
import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer, WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Persistor } from 'redux-persist/lib/types';
import thunk from 'redux-thunk';
import Cart from './reducers/Cart';
import Search from './reducers/Search';



type PersistConfigType = {
    key: string;
    storage: WebStorage;
    whitelist: string[];
}

const persistConfig: PersistConfigType = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    cart: Cart,
    search: Search
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: EnhancedStore = configureStore({
    reducer: persistedReducer,    
    middleware : [ thunk ]
});

export const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>