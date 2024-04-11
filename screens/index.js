import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Bids from './bidsScreen/Bids';
import History from './historyScreen/history';
import Charge from './chargeScreen/charge';
import Progress from './progressScreen/progress';
import Login from './loginScreen/login';
import Onboarding from './onboardingScreen/onboarding';
import OnboardingCheck from './onboardingCheckScreen/onboardingCheck';

const App = () => {
  const Bidspage = ({navigation}) => {
    return (
      <>
        <Bids />
        <View style={styles.nav_nav_menu}>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('bids')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/bid_bold.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('history')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/hourglass_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('charge')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/cois_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('progress')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/user_light.png')}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const Historypage = ({navigation}) => {
    return (
      <>
        <History />
        <View style={styles.nav_nav_menu}>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('bids')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/bid_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('history')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/hourglass_bold.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('charge')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/cois_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('progress')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/user_light.png')}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const Chargepage = ({navigation}) => {
    return (
      <>
        <Charge />
        <View style={styles.nav_nav_menu}>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('bids')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/bid_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('history')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/hourglass_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('charge')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/cois_bold.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('progress')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/user_light.png')}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const Progresspage = ({navigation}) => {
    return (
      <>
        <Progress />
        <View style={styles.nav_nav_menu}>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('bids')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/bid_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('history')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/hourglass_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('charge')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/cois_light.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nav_nav_menu_item}
            onPress={() => navigation.navigate('progress')}>
            <Image
              style={styles.nav_nav_menu_img}
              source={require('../src/image/user_bold.png')}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="onboardingCheck" component={OnboardingCheck} />
        <Stack.Screen name="bids" component={Bidspage} />
        <Stack.Screen name="history" component={Historypage} />
        <Stack.Screen name="charge" component={Chargepage} />
        <Stack.Screen name="progress" component={Progresspage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
