import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../constants/constants';
import {styles} from './styles';

const GenderCard = ({
  iconName = 'gender-male',
  iconSubtitle = 'Male',
  iconStyle,
  iconSubtitleStyle,
  containerStyle,
  iconColor = colors.APP_COLOR_LIGHT3,
  iconSize = 50,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon
        name={iconName}
        color={iconColor}
        size={iconSize}
        style={[styles.icon, iconStyle]}
      />
      <Text style={[styles.iconSubtitle, iconSubtitleStyle]}>
        {iconSubtitle}
      </Text>
    </View>
  );
};

export default GenderCard;
