import React from 'react';
import {Text} from 'react-native';
export default class DetailsScreen extends React.Component {
    constructor(props) {
       super(props);

       this.state = {
         id:[],
       };
     }

    static navigationOptions = ({ navigation, screenProps }) => ({
      title: navigation.state.params.id
    });


    componentDidMount()
    {
        this.setState({ id: this.props.navigation.state.params.id});
    }

  render() {

    return <Text>{this.state.id}</Text>;
  }
}
