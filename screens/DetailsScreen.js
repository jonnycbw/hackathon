import React from 'react';
import {Text} from 'react-native';
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: this.props,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Text>Test</Text>;
  }
}