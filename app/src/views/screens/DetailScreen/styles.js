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
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  imageStyle: {
    height: hp('3%'),
    width: wp('3%'),
  },
  imageStyle1: {
    height: hp('5%'),
    width: wp('5%'),
  },
  contentContainer: {
    width: wp('100%'),
    height: hp('30%'),
  },
  imageStyle2: {
    width: wp('100%'),
    height: hp('30%'),
  },
  containerView: {
    alignItems: 'center',
  },
  contentContainer2: {
    width: wp('100%'),
    height: hp('10%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle3: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('2.7%'),
  },
  textStyle4: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('2.5%'),
  },
  contentContainer3: {
    width: wp('100%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle5: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('2%'),
  },
  box: {
    width: wp('10%'),
    height: hp('5%'),
    backgroundColor: appColor.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle6: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('2.7%'),
    marginHorizontal: 10,
  },
  contentContainer4: {
    width: wp('100%'),
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle7: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('2.5%'),
    marginTop: hp('2%'),
  },
  listView2: {
    marginLeft: wp('5%'),
    alignItems: 'center',
  },
  itemView: {
    width: wp('16%'),
    height: hp('8%'),
    borderRadius: 8,
    backgroundColor: appColor.grey,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  containerView1: {
    alignItems: 'center',
    marginTop: hp('2.5%'),
  },
});

export default STYLES;
