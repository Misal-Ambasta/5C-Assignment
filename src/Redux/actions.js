import { GET_USER_DETAILS_REQUEST,GET_FOLLOWERS_NEXT_DETAILS_REQUEST,GET_FOLLOWERS_NEXT_DETAILS_SUCCESS,GET_FOLLOWERS_NEXT_DETAILS_FAILURE, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, GET_FOLLOWERS_DETAILS_REQUEST, GET_FOLLOWERS_DETAILS_SUCCESS, GET_FOLLOWERS_DETAILS_FAILURE } from './actionTypes';
import axios from 'axios';

export const getUserDetailsRequest = () => ({
    type: GET_USER_DETAILS_REQUEST
});

export const getUserDetailsSuccess = (payload) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload
});

export const getUserDetailsFailure = (payload) => ({
    type: GET_USER_DETAILS_FAILURE,
    payload
});

export const searchRepos = (payload, page) => async (dispatch) => {
    dispatch(getUserDetailsRequest());
    try {
        const data = await axios.get(`https://api.github.com/users/${payload}/repos`);
        dispatch(getUserDetailsSuccess(data));
    } catch (error) {
        dispatch(getUserDetailsFailure(error));
    }
};


export const getFollowersDetailsRequest = () => ({
    type: GET_FOLLOWERS_DETAILS_REQUEST
});

export const getFollowersDetailsSuccess = (payload) => ({
    type: GET_FOLLOWERS_DETAILS_SUCCESS,
    payload
});

export const getFollowersDetailsFailure = (payload) => ({
    type: GET_FOLLOWERS_DETAILS_FAILURE,
    payload
});

export const getFollowers = (payload, page) => async (dispatch) => {
    dispatch(getFollowersDetailsRequest());
    try {
        const data = await axios.get(`https://api.github.com/users/${payload}/followers`);
        dispatch(getFollowersDetailsSuccess(data));
    } catch (error) {
        dispatch(getFollowersDetailsFailure(error));
    }
};

export const getFollowersNextDetailsRequest = () => ({
    type: GET_FOLLOWERS_NEXT_DETAILS_REQUEST
});

export const getFollowersNextDetailsSuccess = (payload) => ({
    type: GET_FOLLOWERS_NEXT_DETAILS_SUCCESS,
    payload
});

export const getFollowersNextDetailsFailure = (payload) => ({
    type: GET_FOLLOWERS_NEXT_DETAILS_FAILURE,
    payload
});

export const searchFollowersRepos = (payload, page) => async (dispatch) => {
    dispatch(getFollowersNextDetailsRequest());
    try {
        const data = await axios.get(`https://api.github.com/users/${payload}/repos`);
        dispatch(getFollowersNextDetailsSuccess(data));
    } catch (error) {
        dispatch(getFollowersNextDetailsFailure(error));
    }
};