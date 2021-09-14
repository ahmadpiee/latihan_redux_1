import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const bindMiddleware = () => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(thunk, logger));
    }
    return applyMiddleware(thunk);
};

export const store = createStore(persistedReducer, bindMiddleware());

export const persistor = persistStore(store);
