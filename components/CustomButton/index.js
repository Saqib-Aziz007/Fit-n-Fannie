import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const initialState = {
  pressed: false,
  button1: {
    buttonStyle: styles.buttonContainer,
    titleStyle: styles.text,
  },
  button2: {
    buttonStyle: styles.buttonconditionContainer2,
    titleStyle: styles.textcondition2,
  },
};

const AppCustomButton = ({onPress}) => {
  const [pressed, setPressed] = useState(initialState);

  const handleButton1Color = () => {
    setPressed({
      pressed: true,
      button1: {
        buttonStyle: styles.buttonContainer,
        titleStyle: styles.text,
      },
      button2: {
        buttonStyle: styles.buttonconditionContainer2,
        titleStyle: styles.textcondition2,
      },
    });
  };
  const handleButton2Color = () => {
    setPressed({
      pressed: false,
      button1: {
        buttonStyle: styles.buttonconditionContainer2,
        titleStyle: styles.textcondition2,
      },
      button2: {
        buttonStyle: styles.buttonContainer,
        titleStyle: styles.text,
      },
    });
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPressIn={handleButton1Color}
        onPress={() => onPress('PM')}>
        <View style={pressed.button1.buttonStyle}>
          <Text style={pressed.button1.titleStyle}>PM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={handleButton2Color}
        onPress={() => onPress('AM')}>
        <View style={pressed.button2.buttonStyle}>
          <Text style={pressed.button2.titleStyle}>AM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppCustomButton;
