import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {colors} from '../constants/constants';
import {styles} from './styles';

const QuestionCard = ({question, totalQuestion, onPress}) => {
  const [isSelected, setIsSelected] = useState();
  question = question?.item;
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
        <RadioForm animation={true}>
          {question?.options?.map((obj, i) => (
            <RadioButton key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={isSelected === obj.value}
                onPress={val => (
                  setIsSelected(val),
                  onPress({question: question?.id, answer: val})
                )}
                borderWidth={1}
                buttonSize={20}
                buttonInnerColor={'#000'}
                buttonOuterColor={'#000'}
                buttonStyle={{marginVertical: 20}}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                onPress={val => (
                  setIsSelected(val),
                  onPress({question: question?.id, answer: val})
                )}
                labelStyle={{
                  // fontFamily: 'Roboto',
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 18,
                  color: colors.APP_COLOR_BLACK,
                  marginLeft: 20,
                }}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
    </View>
  );
};

export default QuestionCard;
