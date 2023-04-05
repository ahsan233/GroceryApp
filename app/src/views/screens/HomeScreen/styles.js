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
  contentContainer: {
    marginTop: hp('4%'),
    width: wp('100%'),
    height: hp('11%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  imageView: {
    width: wp('16%'),
    height: hp('8%'),
    borderRadius: 8,
    backgroundColor: appColor.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: fontFamily.fontSemiBold,
    color: appColor.black,
    fontSize: hp('1.9%'),
    marginVertical: '1%',
  },
  textStyle2: {
    fontFamily: fontFamily.Bold,
    color: appColor.black,
    fontSize: hp('2.2%'),
  },
  textStyle3: {
    fontFamily: fontFamily.fontLight,
    color: appColor.black,
    fontSize: hp('1.9%'),
    marginLeft: wp('2%'),
  },
  contentContainer2: {
    flexDirection: 'row',
    marginVertical: '2%',
  },
  listView: {
    marginTop: hp('4%'),
    marginBottom: hp('2%'),
    marginLeft: wp('5%'),
  },
  itemView: {
    height: hp('6%'),
    backgroundColor: appColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginRight: wp('3%'),
    marginBottom: hp('2%'),
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle4: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.blackLight,
    fontSize: hp('1.8%'),
    marginHorizontal: 20,
  },
  imageStyle: {
    marginLeft: wp('5%'),
  },
  listView2: {
    marginLeft: wp('5%'),
  },
  contentContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: hp('1%'),
  },
  textStyle5: {
    fontFamily: fontFamily.fontBold,
    color: appColor.black,
    fontSize: hp('2.4%'),
  },
  textStyle6: {
    fontFamily: fontFamily.fontRegular,
    color: appColor.black,
    fontSize: hp('1.6%'),
  },
  itemView2: {
    width: wp('38%'),
    height: hp('22%'),
    backgroundColor: appColor.white,
    //justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginRight: wp('7%'),
    marginVertical: hp('2%'),
  },
  itemImageView: {
    width: wp('26%'),
    height: hp('13%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent2: {
    width: wp('36%'),
    height: hp('4%'),
    padding: '5%',
  },
  contentContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer5: {
    flexDirection: 'row',
  },
  textStyle7: {
    fontFamily: fontFamily.fontSemiBold,
    color: appColor.black,
    fontSize: hp('1.7%'),
  },
  textStyle8: {
    fontFamily: fontFamily.fontLight,
    color: appColor.black,
    fontSize: hp('1.6%'),
  },
  box: {
    width: wp('6%'),
    height: hp('3%'),
    borderRadius: 5,
    backgroundColor: appColor.orange,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: wp('25%'),
    marginTop: hp('3.5%'),
  },
  textStyle9: {
    color: appColor.white,
    fontSize: hp('2%'),
  },
  itemView3: {
    width: wp('55%'),
    height: hp('12%'),
    backgroundColor: appColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    marginRight: wp('7%'),
    marginVertical: hp('2%'),
    flexDirection: 'row',
  },
  itemImageView2: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContent3: {
    width: wp('37%'),
    height: hp('10%'),
    padding: '5%',
  },
  box1: {
    width: wp('7%'),
    height: hp('3.5%'),
    borderRadius: 5,
    backgroundColor: appColor.orange,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: wp('25%'),
    marginTop: hp('6%'),
  },
});

export default STYLES;
