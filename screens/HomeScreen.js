import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Button
} from 'react-native';

import { WebBrowser } from 'expo';
import { StackNavigator } from "react-navigation";
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Jobs',
    };
  render()
  {
    return (
      <View style={styles.container}>
          <FlatList
            data={[
                {key: 0, type:'Collection'},
                {key: 1, type:'Collection'},
                {key: 2, type:'Delivery'},
                {key: 3, type:'Delivery'},
                {key: 4, type:'Collection'},
                {key: 5, type:'Delivery'},
               ]}
               renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {name: 'Lucy'})}>
                        <Text style={styles.item}>{item.type}</Text>
                    </TouchableOpacity>}
           />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    fontSize: 18,
    borderBottomWidth:1
  },
});
