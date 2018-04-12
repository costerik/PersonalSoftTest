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

        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_DELETING_PHOTO,
                `there was a problem deleting photo ${photo}`
            ));
        }
    }
}