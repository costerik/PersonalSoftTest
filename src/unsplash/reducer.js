import * as types from "./const";

const initialState = {
    photos: [],
    reducerState: '',
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.STARTED_LOADING_PHOTOS:
            return { ...state, reducerState: action.payload };
            break;
        case types.FINISHED_LOADING_PHOTOS:
            return { ...state, reducerState: action.payload.state, photos: action.payload.data };
            break;
        case types.STARTED_SEARCH_PHOTOS:
            return { ...state, reducerState: action.payload };
            break;
        case types.FINISHED_SEARCH_PHOTOS:
            return { ...state, reducerState: action.payload.state, photos: action.payload.data };
            break;
        case types.ERROR_LOADING_PHOTOS:
            return { ...state, reducerState: action.payload.state, errorMessage: action.payload.message };
            break;
        default:
            return state;
            break;
    }
}