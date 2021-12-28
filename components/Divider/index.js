import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';

const Divider = ({text, lineStyle, textStyle, containerStyle}) => {
  return (
    <SafeAreaView>
      <View style={[styles.dividercontainer, containerStyle]}>
        <View style={[styles.divider, lineStyle]}></View>
        <Text style={[styles.dividertext, textStyle]}>{text}</Text>
        <View style={[styles.divider, lineStyle]}></View>
      </View>
    </SafeAreaView>
  );
};

export default Divider;
