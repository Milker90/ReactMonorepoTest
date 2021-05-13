import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

interface IProps {
  title: string;
  value: string;
}

const TimeLabel = (props: IProps) => {
  const {title, value} = props;
  const {colors} = useTheme();

  return (
    <View style={styles.dateBox}>
      <Text style={[styles.dateTitle, {color: colors.backdrop}]}>{title}</Text>
      <Text style={[styles.dateValue, {color: colors.text}]}>{value}</Text>
    </View>
  );
};

export default TimeLabel;

const styles = StyleSheet.create({
  dateBox: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTitle: {
    color: '#888',
    fontSize: 16,
    lineHeight: 25,
  },
  dateValue: {
    lineHeight: 25,
    fontSize: 16,
  },
});
