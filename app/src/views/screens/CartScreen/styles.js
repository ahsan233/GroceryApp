import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fontFamily} from '../../../consts/fonts';
import {appColor} from '../../../consts/colors';
const STYLES = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.whiteLight,
  },
  header: {
    width: wp('100%'),
    height: hp('11%'),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },

  textStyle: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('2.7%'),
    marginLeft: wp('36%'),
  },
  imageStyle: {
    height: hp('3%'),
    width: wp('3%'),
  },
  itemView: {
    width: wp('85%'),
    height: hp('15%'),
    borderRadius: 8,
    backgroundColor: appColor.white,
    margin: 10,
    flexDirection: 'row',
  },
  listView2: {
    alignItems: 'center',
  },
  imageView: {
    marginTop: hp('1.5%'),
    marginLeft: wp('78%'),
    position: 'absolute',
  },
  imageView2: {
    width: wp('18%'),
    height: hp('9%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
  },
  contentView: {
    flexDirection: 'row',
    marginLeft: wp('6%'),
    marginTop: hp('2%'),
  },
  contentcontainer: {
    flexDirection: 'row',
  },
  textStyle2: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('1.7%'),
    marginTop: hp('-1%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.7%'),
    marginTop: hp('-1%'),
  },
  contentcontainer2: {
    width: wp('50%'),
    height: hp('12%'),
    marginLeft: wp('5%'),
  },
  textStyle4: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('1.9%'),
    marginTop: hp('2%'),
  },
  textStyle5: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.9%'),
    marginTop: hp('1%'),
  },
  button: {
    position: 'absolute',
    width: wp('17%'),
    height: hp('3.5%'),
    backgroundColor: appColor.orange,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('65%'),
    marginTop: hp('10%'),
  },
  buttonText: {
    fontFamily: fontFamily.fontMedium,
    color: appColor.white,
    fontSize: hp('1.6%'),
  },
  contentView2: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: hp('78%'),
    marginLeft: wp('10%'),
  },
});

export default STYLES;
