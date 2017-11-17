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
                {key: 0, type:'Collection', id:1},
                {key: 1, type:'Collection', id:3},
                {key: 2, type:'Delivery', id:5},
                {key: 3, type:'Delivery', id:9},
                {key: 4, type:'Collection', id:7},
                {key: 5, type:'Delivery', id:29},
               ]}
               renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {id:item.id})}>
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
