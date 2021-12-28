import React from 'react';
import {Text} from 'react-native';
import {styles} from './style';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) return null;

  return <Text style={styles.errortext}>{error}</Text>;
};

export default ErrorMessage;
