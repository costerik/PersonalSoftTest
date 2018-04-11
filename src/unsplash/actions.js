import unsplash, { toJson } from 'unsplash-js/native';
import { createUnsplash } from '../utils/unsplashUtil';
import * as types from './const';
import * as globalStates from '../const';

export const startedLoadingPhotos = () => {
    return {
        type: types.STARTED_LOADING_PHOTOS,
        payload: globalStates.LOADING,
    }
}

export const finishedLoadingPhotos = (data) => {
    return {
        type: types.FINISHED_LOADING_PHOTOS,
        payload: {
            state: globalStates.SUCCESS,
            data
        }
    }
}

export const startedLoadingPhotoByID = () => {
    return {
        type: types.STARTED_LOADING_PHOTO_BY_ID,
        payload: globalStates.LOADING,
    }
}

export const finishedLoadingPhotoByID = (data) => {
    return {
        type: types.FINISHED_LOADING_PHOTO_BY_ID,
        payload: {
            state: globalStates.SUCCESS,
            data
        }
    }
}

export const notifyError = (err) => {
    return {
        type: types.ERROR_LOADING_PHOTOS,
        payload: {
            state: globalStates.ERROR,
            message: err,
        },
    }
}

export const getPhotos = () => {
    return async dispatch => {
        dispatch(startedLoadingPhotos());
        try {
            await createUnsplash().photos.listPhotos(2, 15, "latest")
                .then(toJson)
                .then(json => {
                    dispatch(finishedLoadingPhotos(json));
                });
        } catch (ex) {
            dispatch(notifyError("There was an error loading photos"));
        }
    }
}