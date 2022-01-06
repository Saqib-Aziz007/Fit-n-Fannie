import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/constants';
import {styles} from './styles';

const GenderCard = ({
  iconSubtitle = 'Male',
  iconSubtitleStyle,
  containerStyle,
  onPress,
  image,
  imageHeight = 60,
  imageWidth = 60,
  changeColor,
}) => {
  // const [changeColor, setChangeColor] = useState(false);

  return (
    <TouchableOpacity
      // onPressIn={() => setPressed(true)}
      onPress={() => {
        onPress(iconSubtitle);
        // setChangeColor(!changeColor);
      }}
      style={[
        styles.container,
        {
          borderColor: changeColor
            ? colors.APP_PRIMARY_COLOR
            : colors.APP_COLOR_WHITE,
        },
        containerStyle,
      ]}>
      <Image
        // resizeMode="center"
        source={image}
        // height={55}
        // width={55}
        style={{height: imageHeight, width: imageWidth, marginVertical: 5}}
      />
      <Text style={[styles.iconSubtitle, iconSubtitleStyle]}>
        {iconSubtitle}
      </Text>
    </TouchableOpacity>
  );
};

export default GenderCard;
