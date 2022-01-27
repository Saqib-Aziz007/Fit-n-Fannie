import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/constants';

import styles from './styles';

const LabelBox = ({
  label,
  top,
  bottom,
  right,
  left,
  leftPointer = false,
  rightPointer = false,
  pointerWidth = 56,
  onPress = val => alert(val),
  selected,
  style,
  position = 'absolute',
  textStyle,
  containerStyle,
  inActiveBorderColor = colors.APP_PRIMARY_COLOR,
  activeBorderColor = colors.APP_COLOR_WHITE,
}) => {
  leftPointer ? (rightPointer = false) : null;
  rightPointer ? (leftPointer = false) : null;
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      style={{
        ...style,
        ...styles.mainContainer,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        position: position,
      }}>
      {rightPointer ? (
        <>
          <View
            style={{
              ...containerStyle,
              ...styles.labelContainer,
              borderColor: selected ? activeBorderColor : inActiveBorderColor,
            }}>
            <Text style={{...styles.label, ...textStyle}}>{label}</Text>
          </View>
          <View style={{...styles.line, width: pointerWidth}} />
          <View style={styles.pointer} />
        </>
      ) : null}
      {leftPointer ? (
        <>
          <View style={styles.pointer} />
          <View style={{...styles.line, width: pointerWidth}} />
          <View
            style={{
              ...containerStyle,
              ...styles.labelContainer,
              borderColor: selected ? activeBorderColor : inActiveBorderColor,
            }}>
            <Text style={{...styles.label, ...textStyle}}>{label}</Text>
          </View>
        </>
      ) : null}
      {rightPointer === false && leftPointer === false ? (
        <View
          style={{
            ...styles.labelContainer,
            ...containerStyle,
            borderColor: selected ? activeBorderColor : inActiveBorderColor,
          }}>
          <Text style={{...styles.label, ...textStyle}}>{label}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default LabelBox;
