import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  requireNativeComponent,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {appImages} from '../../../assets/utilities';
import CustomButton from '../../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtraction} from '../../../redux/Actions';

export default function DetailScreen() {
  const navigation = useNavigation();
  const {counter} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const Showcases = [
    {
      id: 1,
      image: appImages.Broccoli,
    },
    {
      id: 2,
      image: appImages.show2,
    },
    {
      id: 3,
      image: appImages.show3,
    },
    {
      id: 4,
      image: appImages.show4,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Image source={item.image} resizeMode="contain" />
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={appImages.Back}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <Image
          source={appImages.Heart}
          resizeMode="contain"
          style={styles.imageStyle1}
        />
      </View>
      <View style={styles.containerView}>
        <View style={styles.contentContainer3}>
          <Text style={styles.textStyle3}>Broccoli</Text>
          <Text style={styles.textStyle5}>Vegetables</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={appImages.detailImage}
          resizeMode="cover"
          style={styles.imageStyle2}
        />
      </View>
      <View style={styles.containerView}>
        <View style={styles.contentContainer2}>
          <Text style={styles.textStyle3}>$4</Text>
          <Text style={styles.textStyle4}>/kg</Text>
        </View>
      </View>
      <View style={styles.contentContainer4}>
        <TouchableOpacity
          onPress={() => dispatch(subtraction())}
          style={styles.box}>
          <Image source={appImages.Minus} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.textStyle6}>{counter}</Text>
        <TouchableOpacity
          onPress={() => dispatch(addition())}
          style={styles.box}>
          <Image source={appImages.Plus} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.textStyle7}>Showcases</Text>
      </View>
      <View style={styles.listView2}>
        <FlatList
          data={Showcases}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.containerView1}>
        <CustomButton
          title="Add to Cart"
          customClick={() => navigation.navigate('CartScreen')}
        />
      </View>
    </View>
  );
}
