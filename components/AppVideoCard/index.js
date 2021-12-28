import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/constants';
import {styles} from './styles';
import AppIconButton from '../AppIconButton';

const AppVideoCard = ({video, onPressIcon, onPressCard}) => {
  const video1 = video?.item;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={video1?.video?.thumbnail}
              style={styles.image}>
              {video1?.video?.locked ? (
                <AppIconButton
                  icon={'lock'}
                  size={50}
                  backgroundColor={colors.APP_PRIMARY_COLOR}
                  onPress={onPressIcon}
                />
              ) : (
                <AppIconButton
                  icon={'play'}
                  backgroundColor={colors.APP_PRIMARY_COLOR}
                  onPress={onPressIcon}
                />
              )}
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.detailsContainer}>
            <Text style={styles.heading}>{video1?.step}</Text>
            <Text numberOfLines={1} style={styles.title}>
              {video1?.title}
            </Text>
            <Text numberOfLines={2} style={styles.subTitle}>
              {video1.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppVideoCard;
