import { GET_USER_DETAILS_REQUEST,GET_FOLLOWERS_NEXT_DETAILS_REQUEST,GET_FOLLOWERS_NEXT_DETAILS_SUCCESS,GET_FOLLOWERS_NEXT_DETAILS_FAILURE, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, GET_FOLLOWERS_DETAILS_REQUEST, GET_FOLLOWERS_DETAILS_SUCCESS, GET_FOLLOWERS_DETAILS_FAILURE } from './actionTypes';
import {loadData, saveData, removeData } from '../Utilis/localStorage'

const initState = {
    data: loadData('data') || [],
    isLoading: false,
    error: false,
    followers: loadData('followers') ||  [],
    followersRepo: loadData('followersRepo') ||  []
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_USER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                data: []
            };
        case GET_USER_DETAILS_SUCCESS:
            saveData('data', payload.data)
            return {
                ...state,
                isLoading: false,
                error: false,
                data: payload.data
            };
        case GET_USER_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: `Something went wrong: ${payload}`
            };
        case GET_FOLLOWERS_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                followers: []
            };
        case GET_FOLLOWERS_DETAILS_SUCCESS:
            saveData('followers', payload.data)
            return {
                ...state,
                isLoading: false,
                error: false,
                followers: payload.data
            };
        case GET_FOLLOWERS_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: `Something went wrong: ${payload}`
            };
            case GET_FOLLOWERS_NEXT_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                followersRepo: []
            };
        case GET_FOLLOWERS_NEXT_DETAILS_SUCCESS:
            saveData('followersRepo', payload.data)
            return {
                ...state,
                isLoading: false,
                error: false,
                followersRepo: payload.data
            };
        case GET_FOLLOWERS_NEXT_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: `Something went wrong: ${payload}`
            };
        default:
            return state;
    }
};

export default reducer;
