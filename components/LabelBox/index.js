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
  onPress,
  selected,
}) => {
  leftPointer ? (rightPointer = false) : null;
  rightPointer ? (leftPointer = false) : null;
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      style={{
        ...styles.mainContainer,
        top: top,
        bottom: bottom,
        right: right,
        left: left,
      }}>
      {rightPointer ? (
        <>
          <View
            style={{
              ...styles.labelContainer,
              borderColor: selected
                ? colors.APP_PRIMARY_COLOR
                : colors.APP_COLOR_WHITE,
            }}>
            <Text style={styles.label}>{label}</Text>
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
              ...styles.labelContainer,
              borderColor: selected
                ? colors.APP_PRIMARY_COLOR
                : colors.APP_COLOR_WHITE,
            }}>
            <Text style={styles.label}>{label}</Text>
          </View>
        </>
      ) : null}
      {rightPointer === false && leftPointer === false ? (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default LabelBox;
