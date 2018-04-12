import * as types from './const';
import * as globalStates from '../const';

export const startedAddPhoto = () => {
    return {
        types: types.STARTED_ADDING_PHOTO,
        payload: globalStates.LOADING,
    }
}

export const finishedAddPhoto = () => {
    return {
        types: types.FINISHED_ADDING_PHOTO,
        payload: globalStates.SUCCESS,
    }
}

export const startedDeletePhoto = () => {
    return {
        types: types.STARTED_DELETING_PHOTO,
        payload: globalStates.LOADING,
    }
}

export const finishedDeletePhoto = () => {
    return {
        types: types.FINISHED_DELETING_PHOTO,
        payload: globalStates.SUCCESS,
    }
}

export const notifyError = (type, err) => {
    return {
        type,
        payload: {
            state: globalStates.ERROR,
            message: err,
        },
    }
}

export const addPhoto = (photo) => {
    return async dispatch => {
        try {
            dispatch(startedAddPhoto());
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_ADDING_PHOTO,
                `there was a problem adding photo ${photo}`
            ));
        }
    }
}


export const deletePhoto = (photo) => {
    return async dispatch => {
        try {
            dispatch(startedDeletePhoto());
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_DELETING_PHOTO,
                `there was a problem deleting photo ${photo}`
            ));
        }
    }
}