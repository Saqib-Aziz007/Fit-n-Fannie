import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Slider from 'react-native-slider';
import {colors} from '../constants/constants';
import {styles} from './styles';

const AppSlider = ({
  minimumValue = 18,
  maximumValue = 100,
  thumbStyle = styles.trackThumbComponent,
  trackstyle = styles.trackstyle,
  minimumTrackTintColor = colors.APP_COLOR_LIGHT3,
  maximumTrackTintColor,
  onValueChange,
  renderValue,
}) => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <Slider
        value={minimumValue}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        onValueChange={onValueChange}
        trackStyle={trackstyle}
        thumbStyle={thumbStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.thumbText}>{Math.floor(renderValue)}</Text>
      </View>
    </View>
  );
};

export default AppSlider;
