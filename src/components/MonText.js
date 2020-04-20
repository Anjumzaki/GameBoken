
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

class MonText extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),

        'Anders': require('../assets/fonts/Anders.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Text
        style={{
          fontFamily: this.state.fontLoaded ? this.props.fontName : null,
          color: this.props.col,
          fontSize: this.props.fonSiz,
          textDecorationLine:this.props.lineThrough && this.props.lineThrough,
          lineHeight:this.props.lineHt && this.props.lineHt,
          textAlign:this.props.txtAlign && this.props.txtAlign,
          textTransform:this.props.txtTrans && this.props.txtTrans
          // textDecoration: this.props.lineThrough ? "line-through" : null
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
export default MonText;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
