import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistStorage = {
  key: "persist-store",
  storage,
};

const persistReducers = persistReducer(persistStorage, rootReducer);
const store = createStore(
  persistReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
