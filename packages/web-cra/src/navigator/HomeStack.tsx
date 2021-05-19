import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack'

import { Platform, StyleSheet } from 'react-native'
import Home from '@universal/common/src/pages/home'
import Result from '@universal/common/src/pages/result'
import TestBusinessDay from '@universal/common/src/pages/testBusinessDay'
import TestTextField from '../pages/testTextField'
import NavBackImage from '@universal/common/src/components/NavBackImage'
import { HomeStackParamList } from '@universal/common/src/navigator/types'

const Stack = createStackNavigator<HomeStackParamList>()

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
      }}
    >
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
        options={{ headerTitle: 'Next Business Day' }}
      />
      <Stack.Screen
        name="TestBusinessDay"
        component={TestBusinessDay}
        options={{ headerTitle: 'Next Business Day' }}
      />
      <Stack.Screen
        name="TestTextField"
        component={TestTextField}
        options={{ headerTitle: 'Next Business Day' }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
