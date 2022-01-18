import React, {useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';
import QuestionCard from '../../components/QuestionCard';
import {Questions} from '../../components/constants/constants';
import {GOAL_SCREEN} from '../../navigation/routes';

const FitnessQuizScreen = ({navigation, route}) => {
  console.log('FitnessQuizScreen::::', route.params);
  const fintnessQuiz = [];
  return (
    <ScrollView style={styles.scrollView}>
      <AppIconButton
        icon={'chevron-left'}
        size={32}
        onPress={() => navigation.goBack()}
      />
      {/* <View style={styles.container}> */}
      {/* <View style={{height: '80%'}}> */}
      <Text style={styles.screenTitle}>Account Setup</Text>
      <View style={styles.progressBar}></View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginHorizontal: 20}}
        data={Questions}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={item => (
          <QuestionCard
            question={item}
            totalQuestion={Questions.length}
            onPress={val => {
              fintnessQuiz.push(val);
            }}
          />
        )}
      />
      <View style={styles.next}>
        <AppButton
          title={'NEXT'}
          // onPress={() =>
          //   console.log('FitnessQuizScreen on submit::::', {
          //     ...route.params,
          //     fitnessQuiz: fintnessQuiz,
          //   })
          // }
          onPress={() =>
            navigation.navigate(GOAL_SCREEN, {
              ...route.params,
              fintnessQuiz: fintnessQuiz,
            })
          }
        />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default FitnessQuizScreen;
