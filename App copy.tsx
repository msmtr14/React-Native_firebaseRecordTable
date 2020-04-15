import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  navigator?: any;
}
export default class App extends Component<Props> {
  state: any = {
    location: {},
  };

  componentDidMount() {
    Geolocation.getCurrentPosition((info) => {
      this.setState({location: info.coords});
      console.warn(info);
    });
  }

  render() {
    return this.state.location ? (
      <View style={styles.container}>
        <Text style={styles.welcome}>Find My Coords?</Text>
        <Text>longitude: {this.state.location.longitude}</Text>
        <Text>latitude: {this.state.location.latitude}</Text>
      </View>
    ) : null;
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
