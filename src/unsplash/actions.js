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

export const startedSearchPhotos = () => {
    return {
        type: types.STARTED_SEARCH_PHOTOS,
        payload: globalStates.LOADING,
    }
}

export const finishedSearchPhotos = (data) => {
    return {
        type: types.FINISHED_SEARCH_PHOTOS,
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
            await createUnsplash().photos.listPhotos()
                .then(toJson)
                .then(json => {
                    dispatch(finishedLoadingPhotos(json));
                });
        } catch (ex) {
            dispatch(notifyError("There was an error loading photos"));
        }
    }
}

export const searchPhotos = (keyword) => {
    return async dispatch => {
        dispatch(startedSearchPhotos());
        try {
            await createUnsplash().search.photos(keyword)
                .then(toJson)
                .then(json => {
                    dispatch(finishedSearchPhotos(json.results));
                });
        } catch (ex) {
            dispatch(notifyError("There was an error searching photos"));
        }
    }
}