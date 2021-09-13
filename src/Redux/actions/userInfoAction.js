import API from "Proxy";
import * as actions from "../actionTypes";

export const userInfoAction = () => async (dispatch) => {
    try {
        await API.get().then(({ data }) => {
            dispatch({
                type: actions.GET_USERINFO,
                payload: data,
            });
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: actions.GET_USERINFO_FAIL,
            payload: error,
        });
    }
};
