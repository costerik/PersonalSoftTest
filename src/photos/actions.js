import * as types from './const';
import * as globalTypes from '../const';
import LocalStorage from '../utils/localStorage';
import { findPhotoByID, deletePhotoByID, showAlertDialog } from '../utils/photosUtils';

export const startedAddPhoto = () => {
    return {
        type: types.STARTED_ADDING_PHOTO,
        payload: globalTypes.LOADING,
    }
}

export const finishedAddPhoto = (photos) => {
    return {
        type: types.FINISHED_ADDING_PHOTO,
        payload: {
            state: globalTypes.SUCCESS,
            photos,
        }
    }
}

export const startedDeletePhoto = () => {
    return {
        type: types.STARTED_DELETING_PHOTO,
        payload: globalTypes.LOADING,
    }
}

export const finishedDeletePhoto = (photos) => {
    return {
        type: types.FINISHED_DELETING_PHOTO,
        payload: {
            state: globalTypes.SUCCESS,
            photos,
        }
    }
}

export const startedInitialLoading = () => {
    return {
        type: types.STARTED_INITIAL_LOADING,
        payload: globalTypes.LOADING,
    }
}

export const finishedInitialLoading = (photos) => {
    return {
        type: types.FINISHED_INITIAL_LOADING,
        payload: {
            state: globalTypes.SUCCESS,
            photos,
        }
    }
}

export const notifyError = (type, err) => {
    return {
        type,
        payload: {
            state: globalTypes.ERROR,
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

            if (findPhotoByID(photo.id, photos)) {
                showAlertDialog();
                dispatch(notifyError(
                    types.ERROR_DUPLICATED_PHOTO,
                    globalTypes.DUPLICATED_MSG,
                ));
            } else {
                photos = [...photos, photo];
                await LocalStorage.save("photos", photos);
                dispatch(finishedAddPhoto(photos));
            }
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_ADDING_PHOTO,
                `there was a problem adding photo ${photo}`,
            ));
        }
    }
}


export const deletePhoto = (photo) => {
    return async dispatch => {
        dispatch(startedDeletePhoto());
        try {
            const data = await LocalStorage.get("photos");
            let photos = [];
            if (data && data.length) {
                photos = data;
            }

            photos = deletePhotoByID(photo.id, photos);
            await LocalStorage.save("photos", photos);
            dispatch(finishedDeletePhoto(photos));

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