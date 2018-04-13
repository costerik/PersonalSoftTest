import * as types from './const';
import * as globalStates from '../const';
import LocalStorage from '../utils/localStorage';

export const startedAddPhoto = () => {
    return {
        type: types.STARTED_ADDING_PHOTO,
        payload: globalStates.LOADING,
    }
}

export const finishedAddPhoto = (photos) => {
    return {
        type: types.FINISHED_ADDING_PHOTO,
        payload: {
            state: globalStates.SUCCESS,
            photos,
        }
    }
}

export const startedDeletePhoto = () => {
    return {
        type: types.STARTED_DELETING_PHOTO,
        payload: globalStates.LOADING,
    }
}

export const finishedDeletePhoto = () => {
    return {
        type: types.FINISHED_DELETING_PHOTO,
        payload: globalStates.SUCCESS,
    }
}

export const startedInitialLoading= () => {
    return {
        type: types.STARTED_INITIAL_LOADING,
        payload: globalStates.LOADING,
    }
}

export const finishedInitialLoading = (photos) => {
    return {
        type: types.FINISHED_INITIAL_LOADING,
        payload: {
            state: globalStates.SUCCESS,
            photos,
        }
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
        dispatch(startedAddPhoto());
        try {
            const data = await LocalStorage.get("photos");
            let photos = [];
            if (data && data.length) {
                photos = data;
            }
            photos = [...photos, photo];
            await LocalStorage.save("photos", photos);
            dispatch(finishedAddPhoto(photos));
            //Verify not duplicate photos
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
        dispatch(startedDeletePhoto());
        try {
            //TO DO
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_DELETING_PHOTO,
                `there was a problem deleting photo ${photo}`,
            ));
        }
    }
}

export const initialLoading = () => {
    return async dispatch => {
        dispatch(startedInitialLoading());
        try {
            const data = await LocalStorage.get("photos");
            let photos = [];
            if (data && data.length) {
                photos = data;
            }
            dispatch(finishedInitialLoading(photos));
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_INITIAL_LOADING,
                `there was a problem with initial loading`,
            ));
        }
    }
}