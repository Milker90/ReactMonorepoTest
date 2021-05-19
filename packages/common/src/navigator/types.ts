import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  TestBusinessDay: undefined;
  TestTextField: undefined;
  Result: {currentDate: Date; country: string; state?: string; region?: string};
};

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};
