import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import LottieView from 'lottie-react-native';

const DoneScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../../assets/lottie/done_animation.json')}
          style={styles.animation}
          autoPlay
          loop={false}
        />
        <Text style={styles.text}>You're all set!</Text>
      </View>
    </View>
  );
};

export default DoneScreen;
