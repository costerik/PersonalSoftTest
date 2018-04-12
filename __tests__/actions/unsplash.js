jest.mock('../../src/unsplash/actions', () => ({
    getPhotos: jest.fn(),
    searchPhotos: jest.fn(),
    startedLoadingPhotos: jest.fn(),
    finishedLoadingPhotos: jest.fn(),
    startedSearchPhotos: jest.fn(),
    finishedSearchPhotos: jest.fn(),
}));

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as unsplashTypes from '../../src/unsplash/const';
import * as globalTypes from '../../src/const';
import * as actions from '../../src/unsplash/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('startedLoadingPhotos', () => {
    actions.startedLoadingPhotos.mockReturnValue({
        type: unsplashTypes.STARTED_LOADING_PHOTOS,
        payload: globalTypes.LOADING,
    });
    test('dispatched started loading photos', () => {
        expect(actions.startedLoadingPhotos()).toEqual({
            type: unsplashTypes.STARTED_LOADING_PHOTOS,
            payload: globalTypes.LOADING,
        });
    });
});

import { data } from '../../fakeData';

describe('finishedLoadingPhotos', () => {
    actions.finishedLoadingPhotos.mockReturnValue({
        type: unsplashTypes.FINISHED_LOADING_PHOTOS,
        payload: {
            state: globalTypes.SUCCESS,
            data,
        },
    });

    test('dispatched finished loading photos', () => {
        expect(actions.finishedLoadingPhotos(data)).toEqual({
            type: unsplashTypes.FINISHED_LOADING_PHOTOS,
            payload: {
                state: globalTypes.SUCCESS,
                data,
            },
        });
    });
});

describe('startedSearchPhotos', () => {
    actions.startedSearchPhotos.mockReturnValue({
        type: unsplashTypes.STARTED_SEARCH_PHOTOS,
        payload: globalTypes.LOADING,
    });

    test('dispatched started search photos', () => {
        expect(actions.startedSearchPhotos()).toEqual({
            type: unsplashTypes.STARTED_SEARCH_PHOTOS,
            payload: globalTypes.LOADING,
        });
    });
});

describe('finishedSearchPhotos', () => {
    actions.finishedSearchPhotos.mockReturnValue({
        type: unsplashTypes.FINISHED_SEARCH_PHOTOS,
        payload: {
            state: globalTypes.SUCCESS,
            data,
        },
    });

    test('dispatched finished search photos', () => {
        expect(actions.finishedSearchPhotos(data)).toEqual({
            type: unsplashTypes.FINISHED_SEARCH_PHOTOS,
            payload: {
                state: globalTypes.SUCCESS,
                data,
            },
        });
    });
});

// describe('unsplash', () => {
//     let store = null;
//     beforeEach(() => {
//         const INITIAL_STATE = {
//             photos: [],
//             reducerState: '',
//             errorMessage: '',
//         }
//         store = mockStore({ ...INITIAL_STATE });
//     });

//     test('dispatched getPhotos', () => {
//         return store.dispatch(actions.getPhotos()).then(() => {
//             const calledActions = store.getActions();
//             expect(calledActions[0]).toEqual({
//                 type: unsplashTypes.STARTED_LOADING_PHOTOS,
//                 payload: globalTypes.LOADING
//             });
//         });
//     });

//     test('gathers the required parameters', () => {
//         return store.dispatch(actions.sayChai()).then(() => {
//             expect(user.get).toHaveBeenCalled();
//             expect(getMatchKey).toHaveBeenCalled();
//         });
//     });

//     test('saves the new match', () => {
//         return store.dispatch(actions.sayChai()).then(() => {
//             expect(saveMatch).toHaveBeenCalledWith('username', 'matchKey', true, '');
//         });
//     });

//     test('updates the state', () => {
//         return store.dispatch(actions.sayChai()).then(() => {
//             expect(user.remove).toHaveBeenCalled();
//             expect(user.save).toHaveBeenCalled();
//             expect(setCachedUser).toHaveBeenCalled();
//         });
//     });
// });





