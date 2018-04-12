import '../ReactotronConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-native';
import reducers from './reducers';
import env from '../env';
const appReducer = combineReducers({ ...reducers, });
const middleware = applyMiddleware(thunkMiddleware);
const store = Reactotron.createStore(appReducer, compose(middleware));
import { getPhotos } from './unsplash/actions';
import TabsStack from './stacks/tabsStack';

export default class App extends Component {

  componentWillMount() {
    store.dispatch(getPhotos());
  }

  render() {
    return (
      <Provider store={store}>
        <TabsStack />
      </Provider>
    );
  }
}
