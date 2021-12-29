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

const AppToggleButton = ({onPress, state1 = 'PM', state2 = 'AM', style}) => {
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
    <View style={[styles.mainContainer, style]}>
      <TouchableOpacity
        style={{elevation: 5}}
        onPressIn={handleButton1Color}
        onPress={() => onPress(state1)}>
        <View style={pressed.button1.buttonStyle}>
          <Text style={pressed.button1.titleStyle}>{state1}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{elevation: 5}}
        onPressIn={handleButton2Color}
        onPress={() => onPress(state2)}>
        <View style={pressed.button2.buttonStyle}>
          <Text style={pressed.button2.titleStyle}>{state2}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppToggleButton;
