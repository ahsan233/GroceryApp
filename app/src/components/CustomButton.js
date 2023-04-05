import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '../consts/colors';
import {fontFamily} from '../consts/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: appColor.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: hp('2%'),
    flexDirection: 'row',
  },
  text: {
    color: appColor.white,
    fontFamily: fontFamily.fontSemiBold,
    fontSize: hp('2.2%'),
  },
});