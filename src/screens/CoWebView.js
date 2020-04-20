import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View ,TouchableOpacity,Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={{ marginTop: getStatusBarHeight(), marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                    <Image source={require('../assets/back.png')} style={{ width: 32, height: 32 }} />
                </TouchableOpacity>
                <View style={{position:'relative',top:-40 - getStatusBarHeight(),flex:1,zIndex:-1}}>
                
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: 'https://www.gardelapeche.org/storyGame' }}
                />
                </View>
                
            </View>

        );
    }
}