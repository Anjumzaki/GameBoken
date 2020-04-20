import * as React from 'react';
import { View, Text, Image, StatusBar, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MonText from '../components/MonText'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
export default class Details extends React.Component {
    state = {
        progress: 20,
        progressWithOnComplete: 0,
        progressCustomized: 0,
    }
    render() {
        const barWidth = Dimensions.get('screen').width - 30;
        const progressCustomStyles = {
            backgroundColor: 'red',
            borderRadius: 0,
            borderColor: 'orange',
        };
        return (
                

            <HeaderImageScrollView
                maxHeight={380}
                minHeight={100}
                headerImage={require("../assets/laCasting.png")}
                renderForeground={() => (
                    <>
                        <TouchableOpacity style={{ marginTop: getStatusBarHeight(), marginLeft: 20 }} onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../assets/back.png')} style={{ width: 32, height: 32 }} />
                        </TouchableOpacity>
                        <View style={{ marginTop: 100, alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.push('CoWebView')} style={{ paddingHorizontal: 30, paddingVertical: 8, backgroundColor: 'rgba(136, 74, 139, 0.5)', borderRadius: 50 }}>
                                <MonText fontName={"Montserrat-Bold"} col={'white'} fonSiz={25} text={"Jouer"} />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            >
                <View style={{ paddingBottom:50 , backgroundColor: '#33313B', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'relative', top: -30, paddingHorizontal: 20, paddingTop: 35 }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        <MonText fontName={"Montserrat-Bold"} col={'white'} fonSiz={24} text={"Le Casting"} />
                        <View style={{ marginTop: 20 }}>
                            <MonText fontName={"Montserrat-Medium"} lineHt={30} col={'white'} fonSiz={13} text={"Tu viens passer une semaine de vacances dans magnifique ville étrangère où tu feras une superbe rencontre, pourras-tu conclure ?"} />
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: 30 }}>
                            <TouchableOpacity style={{ paddingHorizontal: 13, paddingVertical: 11, backgroundColor: '#884A8A', borderRadius: 10 }}>
                                <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={17} text={"Séduction"} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingHorizontal: 13, paddingVertical: 11, backgroundColor: '#884A8A', borderRadius: 10 }}>
                                <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={17} text={"Séduction"} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"PROGRESSION"} />
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"10%"} />

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                            <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={13} text={"0%"} />
                            <ProgressBarAnimated
                                width={Dimensions.get('window').width / 1.4}
                                value={10}
                                backgroundColor="#82ACFF"
                            />
                            <MonText fontName={"Montserrat-Medium"} col={'white'} fonSiz={13} text={"100%"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"BADGES"} />
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"0/15"} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{width:28,marginRight:22}} resizeMode="contain" source={require('../assets/wheel.png')}/>
                            <Image style={{width:28,marginRight:22}} resizeMode="contain" source={require('../assets/speedometer.png')}/>
                            <Image style={{width:28,marginRight:22}} resizeMode="contain" source={require('../assets/seat.png')}/>
                            <Image style={{width:28,marginRight:22}} resizeMode="contain" source={require('../assets/steering-wheel.png')}/>
                            <Image style={{width:28,marginRight:22}} resizeMode="contain" source={require('../assets/turbo-engine.png')}/>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"AMIS QUI Y ONT JOUé"} />
                            <MonText fontName={"Montserrat-Medium"} col={'#FFFFFF4D'} fonSiz={13} text={"0/+"} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{width:28,marginRight:15}} resizeMode="contain" source={require('../assets/1.png')}/>
                            <Image style={{width:28,marginRight:15}} resizeMode="contain" source={require('../assets/3.png')}/>
                            <Image style={{width:28,marginRight:15}} resizeMode="contain" source={require('../assets/4.png')}/>
                            <Image style={{width:28,marginRight:15}} resizeMode="contain" source={require('../assets/5.png')}/>
                            <Image style={{width:28,marginRight:15}} resizeMode="contain" source={require('../assets/6.png')}/>

                        </View>

                    </TriggeringView>
                </View>
            </HeaderImageScrollView>

        );
    }

}

