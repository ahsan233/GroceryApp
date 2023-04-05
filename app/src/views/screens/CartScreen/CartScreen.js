import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  requireNativeComponent,
  ScrollView,
  Alert
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {appImages} from '../../../assets/utilities';
import CustomButton from '../../../components/CustomButton';

export default function CartScreen() {
  const navigation = useNavigation();

  const Cart = [
    {
      id: 1,
      name: 'Brocolli',
      weigth: '100g',
      price: '$4',
      price2: '$240',
      image: appImages.Broccoli,
    },
    {
      id: 2,
      name: 'Banana',
      weigth: '100g',
      price: '$6',
      price2: '$1200',
      image: appImages.Gedang,
    },
    {
      id: 2,
      name: 'Orange',
      weigth: '100g',
      price: '$4',
      price2: '$200',
      image: appImages.Orange,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <View style={styles.imageView}>
          <Image source={appImages.Minus} resizeMode="contain" />
        </View>
        <View>
          <View style={styles.imageView2}>
            <Image source={item.image} resizeMode="contain" />
          </View>
          <View style={styles.contentView}>
            <Text style={styles.textStyle2}>{item.price}</Text>
            <Text style={styles.textStyle3}>/kg</Text>
          </View>
        </View>
        <View style={styles.contentcontainer2}>
          <Text style={styles.textStyle4}>{item.name}</Text>
          <Text style={styles.textStyle5}>
            Total is {item.price2} by weight
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
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
        <Text style={styles.textStyle}>Cart</Text>
      </View>

      <View style={styles.listView2}>
        <FlatList
          data={Cart}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.contentView2}>
      <CustomButton
          title="Checkout"
           customClick={()=>{Alert.alert('Success','Order placed'),navigation.navigate('UserDashboard')}}
        />
        </View>
    </View>
  );
}
