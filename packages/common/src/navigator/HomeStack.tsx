import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {Platform, StatusBar, StyleSheet} from 'react-native';
import Home from '../pages/home';
import Result from '../pages/result';
import NavBackImage from '../components/NavBackImage';

type HomeStackParamList = {
  Home: undefined;
  Result: {currentDate: Date; country: string; state?: string; region?: string};
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

const Stack = createStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerStyle: {
          // remove shadow on iOS
          // shadowOpacity: 0,
          ...Platform.select({
            android: {
              // remove shadow on Android
              elevation: 0,
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          }),
        },
        headerBackTitleVisible: false,
        headerBackImage: () => <NavBackImage color="#444" name="arrow-left" />,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          // headerRight: () => <HomeAddButton />,
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerTitle: 'Next Business Day'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
