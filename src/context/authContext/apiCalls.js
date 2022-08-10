import { axiosReq } from "../../utils/apiCalls";
import {loginFailure, loginStart, loginSuccess} from './actions'

export const login = async (user,dispatch) =>{
    dispatch(loginStart());
    try {
        const res = await axiosReq.post("auth/login/", {
            email: user.email,
            password: user.password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async ({username, email, password}, dispatch) =>{
    dispatch(loginStart());
    try {
        const res = await axiosReq.post("auth/register/", {
            username,
            email,
            password
        });
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}