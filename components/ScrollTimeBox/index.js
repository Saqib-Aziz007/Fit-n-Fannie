import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const ScrollTimeBox = ({
  data = ['01', '02', '03', '00'],
  initialSelectedIndex = 0,
  onValueChange,
  containerHeight = 56,
  containerWidth = 56,
  containerBackgroundColor = 'white',
  itemHeight = 56,
  dividerColor = 'transparent',
  dividerWidth = 0,
  activeItemColor = 'black',
}) => {
  return (
    // <View
    //   style={{
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     height: containerHeight,
    //     width: containerWidth,
    //     borderRadius: 15,
    //     elevation: 10,
    //     overflow: 'hidden',
    //     backgroundColor: 'red',
    //   }}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
        renderItem={(data, index) => {
          //
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={100}
        wrapperWidth={100}
        wrapperColor="black"
        itemHeight={54}
        highlightColor="transparent"
        highlightBorderWidth={2}
        itemTextStyle={{color: 'red'}}
      />
    </View>
  );
};

export default ScrollTimeBox;
