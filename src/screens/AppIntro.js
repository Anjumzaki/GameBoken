/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image, ImageBackground,Dimensions } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
import MonText from '../components/MonText'
//import AppIntroSlider to use it
const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Jouez à une multitude de jeux interactifs.',
        image: require('../assets/A1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'De nombreuses possibilités… Le résultat ne dépend que de vous.',
        image: require('../assets/A2.png'),
        backgroundColor: '#febe29',

    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'Plusieurs thématiques disponibles dans notre bibliothèque. Vous trouverez une aventure à votre goût !',
        image: require('../assets/A3.png'),
        backgroundColor: '#22bcb5',
    }
];
export default class AppIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
            //To show the main page of the app
        };
    }
    _onDone = () => {
        this.props.navigation.push('Home')
    };
    _onSkip = () => {
        this.setState({ showRealApp: true });
    };


    _renderItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent:'flex-end'
                }}>
                    <View style={styles.text}>

                   

                <MonText col={'white'} fonSiz={13} fontName="Montserrat-Bold" text={item.text}/>
                </View>
            </ImageBackground>
        );
    };
    render() {


        return (
            <AppIntroSlider
                data={slides}
                renderItem={this._renderItem}
                onDone={this._onDone}
                onSkip={this._onSkip}
                dotStyle={{ backgroundColor: 'white', width: 10, height: 10, borderRadius: 100, marginLeft: 16,marginBottom:Dimensions.get('window').height/3 +100 }}
                activeDotStyle={{ backgroundColor: 'white', width: 15, height: 15, borderRadius: 100, marginLeft: 16 ,marginBottom:Dimensions.get('window').height/3 +100}}
                showNextButton={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
        paddingBottom:Dimensions.get('window').height / 6,
        paddingHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    title: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
});
