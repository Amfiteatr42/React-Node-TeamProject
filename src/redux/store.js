import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { petsReducer } from './petsData/petsSlice';
import { noticesReducer } from './notices/notice-slice';

const persistConfig = {
  key: 'auth-token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedNoticesReducer = persistReducer(persistConfig, noticesReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    pets: petsReducer,
    notices: persistedNoticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
