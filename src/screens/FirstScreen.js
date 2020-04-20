import * as React from 'react';
import { View, Text ,Image,StatusBar} from 'react-native';

export default class FirstScreen extends React.Component {
    componentDidMount() {
        setTimeout(() => {this.props.navigation.push('AppIntro')}, 2000);
      }
    render(){
        return (
           <View>
               <StatusBar translucent={true} barStyle='dark-content'/>
               <Image style={{width:'100%',height:'100%'}} source={require('../assets/first.png')}/>
           </View>
          );
    }
  
}

