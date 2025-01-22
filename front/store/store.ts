import { configureStore } from "@reduxjs/toolkit";

import { favoriteReducer, FavoriteState } from "./favorite/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const favoritePersistConfig = {
  key: "favorite",
  storage,
};

export const store = configureStore({
  reducer: {
    favorite:
      persistReducer<FavoriteState>(favoritePersistConfig, favoriteReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
