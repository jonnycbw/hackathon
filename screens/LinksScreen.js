import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import getDirections from 'react-native-google-maps-directions'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 53.76683,
        longitude: -2.73466
      },
      destination: {
        latitude: 53.7548565,
        longitude: -2.7021039
      },
      params: [
        {
          key: "dirflg",
          value: "d"
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
