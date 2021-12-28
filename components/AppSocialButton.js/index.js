import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/constants';
import {styles} from './styles';
const AppSocialButton = ({
  title,
  icon,
  onPress,
  style,
  iconStyle,
  titleStyle,
  size = 50,
  color = colors.APP_PRIMARY_COLOR,
  iconColor = color,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            ...styles.socialbutton,
            borderRadius: size / 2,
            height: size,
            width: size * 3,
            borderColor: colors.APP_PRIMARY_COLOR,
          },
          style,
        ]}>
        {icon && (
          <Icon
            name={icon}
            size={size / 2}
            color={iconColor ? iconColor : color}
            style={[styles.icon, iconStyle]}
          />
        )}
        {title && (
          <Text
            style={[{...styles.socialbuttontitle, color: color}, titleStyle]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppSocialButton;
