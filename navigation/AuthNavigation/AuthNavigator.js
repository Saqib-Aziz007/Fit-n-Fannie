import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login1 from '../../screens/Login1/index';
import SignUp from '../../screens/Sign_Up/index';
import SignIn from '../../screens/SignIn/index';
import {
  AGE_SCREEN,
  APP_HOME,
  FITNESS_QUIZ_SCREEN,
  GENDER_SCREEN,
  GOAL_SCREEN,
  HEALTH_APPROVAL,
  HEALTH_DISCLAIMER,
  HEIGHT_SCREEN,
  SIGN_IN,
  SIGN_UP_SCREEN,
  START,
  WEIGHT_SCREEN,
} from '../routes';
import TabNavigator from '../TabNavigator/BottomTabNavigator';
import HealthDisclaimer from '../../screens/HealthDisclaimer';
import HealthDisclaimer2 from '../../screens/HealthDisclaimer2';
import WeightScreen from '../../screens/weight';
import HeightScreen from '../../screens/Height';
import AgeScreen from '../../screens/Age';
import GenderScreen from '../../screens/GenderScreen';
import FitnessQuizScreen from '../../screens/FitnessQuizScreen';
import GoalScreen from '../../screens/GoalScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={START} component={Login1} />
      <Stack.Screen name={SIGN_IN} component={SignIn} />
      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={APP_HOME} component={TabNavigator} />
      <Stack.Screen name={HEALTH_APPROVAL} component={HealthDisclaimer} />
      <Stack.Screen name={HEALTH_DISCLAIMER} component={HealthDisclaimer2} />
      <Stack.Screen name={WEIGHT_SCREEN} component={WeightScreen} />
      <Stack.Screen name={HEIGHT_SCREEN} component={HeightScreen} />
      <Stack.Screen name={AGE_SCREEN} component={AgeScreen} />
      <Stack.Screen name={GENDER_SCREEN} component={GenderScreen} />
      <Stack.Screen name={FITNESS_QUIZ_SCREEN} component={FitnessQuizScreen} />
      <Stack.Screen name={GOAL_SCREEN} component={GoalScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
