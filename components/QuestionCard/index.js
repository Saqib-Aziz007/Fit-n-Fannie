import React from 'react';
import {Text, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {Questions} from '../constants/constants';
import {styles} from './styles';

const QuestionCard = ({question, totalQuestion, onPress}) => {
  // console.log('index:::::::', question?.options);
  // console.log(question, 'bbbbbbbb');
  question = question.item;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.questionMainContainer}>
        <Text style={styles.noText}>
          Question {question?.id} of {totalQuestion}
        </Text>
        <View style={styles.questionContainer}>
          <Text numberOfLines={2} style={styles.question}>
            {question?.question}
          </Text>
        </View>
      </View>
      <View style={styles.optionCard}>
        <RadioForm
          radio_props={question?.options}
          initial={0}
          onPress={onPress}
          buttonColor="black"
          selectedButtonColor="black"
          animation={true}
          labelStyle={{
            fontSize: 16,
          }}></RadioForm>
      </View>
    </View>
  );
};

export default QuestionCard;
