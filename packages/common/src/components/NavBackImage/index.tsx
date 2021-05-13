import React from 'react';
import {StyleSheet, Animated, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  headerBackImage: {
    marginHorizontal: Platform.OS === 'ios' ? 8 : 0,
    marginVertical: 12,
    color: '#000',
  },
});

class BackIcon extends React.Component<IProps> {
  render() {
    const {name = 'back'} = this.props;
    return (
      <MaterialCommunityIcons
        name={name}
        size={25}
        color={this.props.color}
        style={styles.headerBackImage}
      />
    );
  }
}

const AnimatedIcon = Animated.createAnimatedComponent(BackIcon);

interface IProps {
  name?: string;
  color: string;
}

class NavBackImage extends React.PureComponent<IProps> {
  render() {
    return <AnimatedIcon {...this.props} />;
  }
}

export default NavBackImage;
