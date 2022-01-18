import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {colors, images} from '../../components/constants/constants';
import {styles} from './styles';
import LineGraph from '../../components/LineGraph';

const data = [
  {date: 11, excercise_hours: 2},
  {date: 12, excercise_hours: 2.5},
  {date: 13, excercise_hours: 3},
  {date: 14, excercise_hours: 2.5},
  {date: 15, excercise_hours: 3},
  {date: 16, excercise_hours: 4},
  {date: 17, excercise_hours: 5},
];

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.prpfileContainer}>
          <Image
            source={images.login1background}
            style={styles.profileImageContainer}
          />
          <Text style={styles.profileName}>Sarah</Text>
        </View>
        <View>
          <LineGraph data={data} xAxis={'date'} yAxis={'excercise_hours'} />
        </View>
        <View style={styles.excerciseContainer}>
          <Text style={styles.excerciselabel}>Exerciese Time</Text>
          <Text style={styles.excerciseDateStyle}>
            {'Mon, Wed | 10-10:30 AM'}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.APP_COLOR_BLACK,
          height: 1,
          width: '100%',
        }}></View>
      <View
        style={{
          ...styles.excerciseContainer,
          paddingHorizontal: 25,
        }}>
        <Text style={styles.excerciselabel}>Goal</Text>
        <Text style={styles.excerciseDateStyle}>{'Legs, Belly'}</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
