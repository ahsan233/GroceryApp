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
export default function HomeScreen() {
  const navigation = useNavigation();
  const Categories = [
    {
      id: 1,
      name: 'All',
      image: 'null',
    },
    {
      id: 2,
      name: 'Vegetables',
      image: appImages.vegetables,
    },
    {
      id: 3,
      name: 'Fish',
      image: appImages.fish,
    },
    {
      id: 4,
      name: 'Vegetables',
      image: appImages.vegetables,
    },
    {
      id: 5,
      name: 'Fish',
      image: appImages.fish,
    },
  ];
  const TopProducts = [
    {
      id: 1,
      name: 'Broccoli',
      weigth: '100g',
      price: '$4',
      image: appImages.Broccoli,
    },
    {
      id: 2,
      name: 'Gedang',
      weigth: '100g',
      price: '$10',
      image: appImages.Gedang,
    },
    {
      id: 3,
      name: 'Broccoli',
      weigth: '100g',
      price: '$4',
      image: appImages.Gedang,
    },
  ];
  const Recomendation = [
    {
      id: 1,
      name: 'Avocado',
      weigth: '220g',
      price: '$9',
      image: appImages.Avocado,
    },
    {
      id: 2,
      name: 'Orange',
      weigth: '160g',
      price: '$4',
      image: appImages.Orange,
    },
  ];
  const renderCategories = ({item}) => {
    return (
      <View style={styles.itemView}>
        <View style={styles.itemContent}>
          {item.image !== 'null' ? (
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          ) : null}
          <Text style={styles.textStyle4}>{item.name}</Text>
        </View>
      </View>
    );
  };
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
  const renderRecomendation = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen')}
        style={styles.itemView3}>
        <View style={styles.itemImageView2}>
          <Image source={item.image} resizeMode="contain" />
        </View>
        <View style={styles.itemContent3}>
          <Text style={styles.textStyle7}>{item.name}</Text>
          <View style={styles.contentContainer4}>
            <Text style={styles.textStyle8}>weigth </Text>
            <Text style={styles.textStyle7}>{item.weigth}</Text>
          </View>
          <View style={styles.contentContainer5}>
            <Text style={styles.textStyle7}>{item.price}</Text>
            <Text style={styles.textStyle8}>/kg</Text>
          </View>
          <TouchableOpacity style={styles.box1}>
            <Text style={styles.textStyle9}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.textStyle}>Good Morning</Text>
            <Text style={styles.textStyle2}>Ghazi</Text>
            <View style={styles.contentContainer2}>
              <Image source={appImages.location} resizeMode="contain" />
              <Text style={styles.textStyle3}>Tlogomas,Malang</Text>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image source={appImages.useravatar} resizeMode="contain" />
          </View>
        </View>
        <View style={styles.listView}>
          <FlatList
            data={Categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.contentContainer3}>
          <Text style={styles.textStyle5}>Top Products</Text>
          <TouchableOpacity>
            <Text style={styles.textStyle6}>SHOW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView2}>
          <FlatList
            data={TopProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderProducts}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.contentContainer3}>
          <Text style={styles.textStyle5}>Recomendation</Text>
          <TouchableOpacity>
            <Text style={styles.textStyle6}>SHOW ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listView2}>
          <FlatList
            data={Recomendation}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderRecomendation}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
