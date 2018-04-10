/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import unsplash, {toJson} from 'unsplash-js/native';
import env from './env';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.unsplash = new unsplash({
      applicationId: env.accessKey,
      secret: env.secretKey,
      callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
      bearerToken: env.accessToken,
    });
  }

  componentWillMount() {
    this.unsplash.photos.listPhotos(2, 15, "latest")
    .then(toJson)
    .then(json => {
      // Your code
      console.log("photos",json);
    });
    this.unsplash.currentUser.profile()
    .then(toJson)
    .then(json => {
      // Your code
      console.log("Profile",json);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
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
