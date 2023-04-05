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

export default function ProductScreen() {
  const navigation = useNavigation();
  const Vegetables = [
    {
      id: 1,
      name: 'Broccoli',
      weigth: '100g',
      price: '$4',
      image: appImages.Broccoli,
    },
    {
      id: 2,
      name: 'Tomatos',
      weigth: '100g',
      price: '$8',
      image: appImages.Tomatos,
    },
    {
      id: 3,
      name: 'Pepper',
      weigth: '100g',
      price: '$10',
      image: appImages.Peppers,
    },
  ];
  const Vegetables2 = [
    {
      id: 1,
      name: 'Carrot',
      weigth: '100g',
      price: '$13',
      image: appImages.Carrots,
    },
    {
      id: 2,
      name: 'Radish',
      weigth: '100g',
      price: '$8',
      image: appImages.Radish,
    },
    {
      id: 3,
      name: 'Corn',
      weigth: '100g',
      price: '$16',
      image: appImages.Corn,
    },
  ];
  const Fruit = [
    {
      id: 1,
      name: 'Avocado',
      weigth: '100g',
      price: '$9',
      image: appImages.Avocado,
    },
    {
      id: 2,
      name: 'Orange',
      weigth: '100g',
      price: '$4',
      image: appImages.Orange,
    },
    {
      id: 3,
      name: 'Gedang',
      weigth: '100g',
      price: '$10',
      image: appImages.Gedang,
    },
  ];
  const renderProducts = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen')}
        style={styles.itemView2}>
        <View style={styles.itemImageView}>
          <Image source={item.image} resizeMode="contain" />
        </View>
        <View style={styles.itemContent2}>
          <Text style={styles.textStyle7}>{item.name}</Text>
          <View style={styles.contentContainer4}>
            <Text style={styles.textStyle8}>weigth </Text>
            <Text style={styles.textStyle7}>{item.weigth}</Text>
          </View>
          <View style={styles.contentContainer5}>
            <Text style={styles.textStyle7}>{item.price}</Text>
            <Text style={styles.textStyle8}>/kg</Text>
          </View>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.textStyle9}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer3}>
          <Text style={styles.textStyle5}>Vegetables</Text>
          <TouchableOpacity>
            <Text style={styles.textStyle6}>SHOW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView2}>
          <FlatList
            data={Vegetables}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listView2}>
          <FlatList
            data={Vegetables2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.contentContainer6}>
          <Text style={styles.textStyle5}>Fruit</Text>
          <TouchableOpacity>
            <Text style={styles.textStyle6}>SHOW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView2}>
          <FlatList
            data={Fruit}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
