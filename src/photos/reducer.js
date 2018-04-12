import * as types from './const';

const initialState = {
    myPhotos: [],
    reducerState: '',
}

export default (state = initialState, actions) => {
    switch (actions.TYPE) {
        case types.STARTED_ADDING_PHOTO:
            return state;
            break;
        case types.FINISHED_ADDING_PHOTO:
            return state;
            break;
        case types.STARTED_DELETING_PHOTO:
            return state;
            break;
        case types.FINISHED_DELEING_PHOTO:
            return state;
            break;
        case types.ERROR_ADDING_PHOTO:
            return {
                ...state,
                reducerState: action.payload.state,
                errorMessage: action.payload.message
            };
            break;
        case types.ERROR_DELETING_PHOTO:
            return {
                ...state,
                reducerState: action.payload.state,
                errorMessage: action.payload.message
            };
            break;
        default:
            return state;
            break;
    }
}