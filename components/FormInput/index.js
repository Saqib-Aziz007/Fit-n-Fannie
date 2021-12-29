// import {useFormikContext} from 'formik';
import {useFormikContext} from 'formik';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants/constants';

import ErrorMessage from '../FormErrorMessage';
import {styles} from './styles';

const FormInput = ({label, ...otherProps}) => {
  const {errors, touched, values, handleChange} = useFormikContext();

  useEffect(() => {
    // console.log(touched[label?.toLowerCase()]);
    touched[label?.toLowerCase()]
      ? colors.APP_PRIMARY_COLOR
      : colors.APP_COLOR_LIGHT1;
  }, [touched]);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        on
        style={styles.input}
        value={values[label?.toLowerCase()]}
        onChangeText={handleChange(label?.toLowerCase())}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[label?.toLowerCase()]}
        visible={touched[label?.toLowerCase()]}
      />
    </View>
  );
};

export default FormInput;
