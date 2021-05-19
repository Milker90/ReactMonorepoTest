import React from 'react';
import {StyleSheet, Platform, Alert} from 'react-native';
import {List} from 'react-native-paper';
import {HomeStackNavProps} from '../navigator/types';

const Home = ({navigation}: HomeStackNavProps<'Home'>) => {
  return (
    <List.Section>
      <List.Subheader>Test</List.Subheader>
      <List.Item
        title="Test Business Day"
        onPress={() => {
          navigation.navigate('TestBusinessDay');
        }}
      />
      <List.Item
        title="Test TextField"
        onPress={() => {
          if (Platform.OS === 'web') {
            navigation.navigate('TestTextField');
          } else {
            Alert.alert('Not Support Page');
          }
        }}
      />
    </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({native: {flex: 1}, web: {height: '100vh'}}),
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 15,
  },
  locationBox: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox: {
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectDateBt: {
    marginTop: 50,
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
