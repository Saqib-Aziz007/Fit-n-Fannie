import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/constants';
import {styles} from './styles';

const AppIconButton = ({
  icon,
  onPress,
  size = 50,
  iconColor = colors.APP_COLOR_WHITE,
  backgroundColor = colors.APP_COLOR_LIGHT3,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{zIndex: 100}}>
      <View
        style={{
          ...styles.AppIconButton,
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
          // zIndex: 100,
          ...style,
        }}>
        <Icon name={icon} size={size / 2} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default AppIconButton;
