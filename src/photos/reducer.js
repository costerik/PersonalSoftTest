import * as types from './const';

const initialState = {
    myPhotos: [],
    reducerState: '',
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.STARTED_ADDING_PHOTO:
        case types.STARTED_DELETING_PHOTO:
        case types.STARTED_INITIAL_LOADING:
            return { ...state, reducerState: action.payload,};
            break;
        case types.FINISHED_ADDING_PHOTO:
        case types.FINISHED_DELETING_PHOTO:
        case types.FINISHED_INITIAL_LOADING:
            return {
                ...state,
                reducerState: action.payload.state,
                myPhotos: [...action.payload.photos],
            };
            break;
        case types.ERROR_ADDING_PHOTO:
        case types.ERROR_DELETING_PHOTO:
        case types.ERROR_INITIAL_LOADING:
        case types.ERROR_DUPLICATED_PHOTO:
            return {
                ...state,
                reducerState: action.payload.state,
                errorMessage: action.payload.message,
            };
            break;
        default:
            return state;
            break;
    }
}