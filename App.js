import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  LogBox,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appImages} from './app/src/assets/utilities';
import {Provider} from 'react-redux';
import {Store} from './app/src/redux/Store';
//Screens-----
import HomeScreen from './app/src/views/screens/HomeScreen/HomeScreen';
import ProductScreen from './app/src/views/screens/ProductScreen/ProductScreen';
import CartScreen from './app/src/views/screens/CartScreen/CartScreen';
import ProfileScreen from './app/src/views/screens/ProfileScreen/ProfileScreen';
import DetailScreen from './app/src/views/screens/DetailScreen/DetailScreen';
const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: hp('8%'),
            width: wp('90%'),
            borderRadius: 20,
            marginLeft: wp('5%'),
            marginBottom:hp('2%'),
            zIndex:0
          },
          tabBarBackground: () => <View style={styles.tabBarBackground} />,
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.HomeActive} resizeMode="contain" />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Home} resizeMode="contain" />
                </View>
              ),
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image
                    source={appImages.CategoryActive}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Category} resizeMode="contain" />
                </View>
              ),
          }}
          name="ProductScreen"
          component={ProductScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Cart} resizeMode="contain" />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Cart} resizeMode="contain" />
                </View>
              ),
          }}
          name="CartScreen"
          component={CartScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Profile} resizeMode="contain" />
                </View>
              ) : (
                <View style={{alignItems: 'center', marginTop: hp('1%')}}>
                  <Image source={appImages.Profile} resizeMode="contain" />
                </View>
              ),
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled: false}}>
        <Stack.Screen
          name="UserDashboard"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  tabBarBackground: {
    backgroundColor: '#F5F5F5',
  },
});

export default App;
