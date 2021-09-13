import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export const persistor = persistStore(store);
