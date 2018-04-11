import '../ReactotronConfig';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-native';
import reducers from './reducers';
import env from '../env';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const appReducer = combineReducers({ ...reducers, });
const middleware = applyMiddleware(thunkMiddleware);
const store = Reactotron.createStore(appReducer, compose(middleware));
import { getPhotos } from './unsplash/actions';
import MainStack from './stacks/mainStack';

export default class App extends Component {

  componentWillMount() {
    store.dispatch(getPhotos());
  }

  render() {
    return (
      <Provider store={store}>
        <MainStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
