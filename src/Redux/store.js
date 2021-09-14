import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const bindMiddleware = () => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(thunk, logger));
    }
    return applyMiddleware(thunk);
};

export const store = createStore(persistedReducer, bindMiddleware());

export const persistor = persistStore(store);
