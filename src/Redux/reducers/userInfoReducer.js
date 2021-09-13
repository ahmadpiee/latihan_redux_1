import * as actions from "../actionTypes";

const initialState = {
    userInfos: [],
};

export const userInfoReducer = (state = { initialState }, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.GET_USERINFO:
            return {
                ...state,
                userInfos: payload,
            };
        default:
            return state;
    }
};
