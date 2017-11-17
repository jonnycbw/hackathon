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
    constructor(props) {
       super(props);

       this.state = {
         jobs: [],
       };
     }


    static navigationOptions = {
      title: 'Jobs',
    };

    componentDidMount()
    {
        var url = 'http://jsonplaceholder.typicode.com/todos'

        fetch(url)
           .then(function(response) {
           if (response.status >= 400) {
              throw new Error("Bad response from server");
           }
           return response.json();
         })
         .then((data) => this.setState({ jobs: data }));

    }

  render()
  {
    return (
      <View style={styles.container}>

          <FlatList
            data={this.state.jobs}
               renderItem={({item}) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {id:item.id})}>
                        <Text style={styles.item}>{item.title}</Text>
                    </TouchableOpacity>}
                keyExtractor={(item, index) => index}
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
