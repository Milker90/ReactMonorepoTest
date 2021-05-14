import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

interface IProps {
  title: string;
}

const PageHeader = (props: IProps) => {
  const {title} = props;

  return <Text style={styles.header}>{title}</Text>;
};

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: '#141414',
  },
});
