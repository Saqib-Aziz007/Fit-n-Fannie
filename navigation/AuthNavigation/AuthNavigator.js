import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login1 from '../../screens/Login1/index';
import SignUp from '../../screens/Sign_Up/index';
import SignIn from '../../screens/SignIn/index';
import {
  START,
  HOME,
  SIGNIN,
  SIGNUP,
  HEALTHAPPROVAL,
  HEALTHDISCLAIMER,
  APP_HOME,
} from '../routes';
import TabNavigator from '../TabNavigator/BottomTabNavigator';
import HealthDisclaimer from '../../screens/HealthDisclaimer';
import HealthDisclaimer2 from '../../screens/HealthDisclaimer2';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={START} component={Login1} />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
      <Stack.Screen name={APP_HOME} component={TabNavigator} />
      <Stack.Screen name={HEALTHAPPROVAL} component={HealthDisclaimer} />
      <Stack.Screen name={HEALTHDISCLAIMER} component={HealthDisclaimer2} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
