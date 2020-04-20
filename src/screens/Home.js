import * as React from 'react';
import { View, Text, Image, StatusBar, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MonText from '../components/MonText'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false

        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#33313B', paddingTop: getStatusBarHeight() + 10 }} contentContainerStyle={{ paddingHorizontal: 20 }} >
                <Dialog
                    visible={this.state.visible}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'top',
                    })}
                >
                    <DialogContent>
                        <View style={{ justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 20, width: Dimensions.get('window').width - 100 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <TouchableOpacity style={{ borderRadius: 50, borderWidth: 1, borderColor: 'gray', padding: 10 }} onPress={() => this.setState({ visible: false })}>
                                    <Image style={{ width: 40, height: 40 }} source={require('../assets/close.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ marginBottom: 20 }}>
                                    <Image style={{ width: 82, height: 82 }} source={require('../assets/delay.png')} />

                                </View>
                                <MonText txtTrans={'uppercase'} txtAlign={'center'} fontName={"Montserrat-Medium"} col={'#744679'} fonSiz={17} text={"Cette histoire ne sera disponible qu’à partir du 20 mai 2020. En attendant, essaie de jouer « Le Casting » à 100%"} />
                                <TouchableOpacity onPress={()=> this.setState({visible:false},this.props.navigation.push('CoWebView'))}  style={{ marginTop: 30, paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#884A8A', borderRadius: 50, width: 165 }}>
                                    <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={17} text={"LE CASTING"} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </DialogContent>
                </Dialog>
                <MonText fontName={"Montserrat-SemiBold"} col={'white'} fonSiz={30} text={"Bōken"} />
                <TouchableOpacity onPress={() => this.props.navigation.push('Details')}>
                    <MonText fontName={"Anders"} col={'#C95DC8'} fonSiz={18} text={"Interactive Stories"} />
                    <ImageBackground source={require('../assets/laCasting.png')} style={{
                        width: Dimensions.get('window').width - 40,
                        height: Dimensions.get('window').width - 90,
                        borderRadius: 20,
                        marginTop: 22,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        padding: 10,
                        marginBottom: 30
                    }}
                        imageStyle={{ borderRadius: 20 }}>

                        <Image source={require('../assets/play.png')} style={{ width: 40, height: 40 }} />

                    </ImageBackground>
                </TouchableOpacity>

                <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={18} text={"TOP TENDANCES"} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Details')}>
                        <Image source={require('../assets/laCasting.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>
                        <Image source={require('../assets/01i.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>
                        <Image source={require('../assets/02i.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 20 }} />
                <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={18} text={"NOUVEAUTés"} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>

                        <Image source={require('../assets/02i.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>

                        <Image source={require('../assets/03i.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20

                        }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ visible: true })}>

                        <Image source={require('../assets/04i.png')} style={{
                            width: Dimensions.get('window').width / 3 - 22,
                            height: Dimensions.get('window').width / 2.5,
                            borderRadius: 20
                        }} />
                    </TouchableOpacity>


                </View>
            </ScrollView>
        );
    }

}

