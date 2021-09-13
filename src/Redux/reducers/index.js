import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { userInfoReducer } from "./userInfoReducer";

const rootReducer = combineReducers({
    userInfo: userInfoReducer,
});

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["userInfoReducer"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
