import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Checkbox, Text, useTheme} from 'react-native-paper';

interface IProps {
  checked: boolean;
  title: string;
  country: string;
  onChecked: (key: string) => void;
}

const LocationCheckBox = (props: IProps) => {
  const {checked, country, title, onChecked} = props;
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, {color: checked ? colors.primary : '#141414'}]}>
        {title}
      </Text>
      <Checkbox
        color={colors.primary}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          onChecked && onChecked(country);
        }}
      />
    </View>
  );
};

export default LocationCheckBox;

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
  },
});
