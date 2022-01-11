import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import * as Yup from 'yup';
import {colors, images} from '../../components/constants/constants';
import AppIconButton from '../../components/AppIconButton/index';
import Divider from '../../components/Divider';
import AppSocialButton from '../../components/AppSocialButton.js';
import FormInput from '../../components/FormInput';
import AppButton from '../../components/AppButton';
import {POPPINS_EXTRA_BOLD, POPPINS_REGULAR} from '../../assets/fonts/fonts.js';
import {APP_HOME, HOME, SIGNUP} from '../../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required()
    .label('Name'),
  email: Yup.string().email().required().label('Email'),
  password: Yup.string()
    .required()
    .min(8, 'Password must be 8 characters long!')
    .label('Password'),
});

const SignIn = ({navigation}) => {
  // const checkUser = async () => {
  //   const user = await AsyncStorage.getItem('user');
  //   if (user) {
  //     navigation.navigate(APP_HOME);
  //   }
  // };

  useEffect(() => {
    // checkUser();
  }, []);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.APP_COLOR_LIGHT1,
        // marginBottom: 50,
      }}>
      <View style={{flex: 1}}>
        <View style={styles.logocontainer}>
          <AppIconButton
            icon={'chevron-left'}
            size={32}
            style={{position: 'absolute', left: 20, top: -10}}
            onPress={
              // () => Alert.alert('Baack', 'Alert!')
              // () => console.log('back!!!!!')
              () => navigation.goBack()
            }
          />
          <View>
            <View style={styles.logo}>
              <Image source={images.APP_LOGO} />
            </View>
            <View>
              <Text style={styles.tagline}>
                A habit-building exercise app designed
              </Text>
              <Text style={styles.tagline}>for beginners to become pros</Text>
            </View>
          </View>
        </View>
        <View style={styles.formcontainer}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={ValidationSchema}
            onSubmit={values => Alert.alert('Alert!', JSON.stringify(values))}>
            {({values, handleChange, handleSubmit, errors, touched}) => {
              return (
                <View style={{marginTop: 40}}>
                  <FormInput
                    label="EMAIL"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                  />
                  <FormInput
                    label="PASSWORD"
                    secureTextEntry
                    textContentType="password"
                  />
                  <AppButton
                    title="SIGN UP"
                    onPress={handleSubmit}
                    style={{marginTop: 15, marginBottom: 15}}
                  />
                  <View style={{alignSelf: 'center', marginBottom: 30}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                        // fontFamily: POPPINS_REGULAR,
                      }}>
                      {"Don't have an account? "}
                      <Text
                        onPress={() => navigation.navigate(SIGNUP)}
                        style={{
                          // fontFamily: POPPINS_EXTRA_BOLD,
                          fontWeight: '700',
                          fontSize: 18,
                        }}>
                        Sign Up
                      </Text>
                    </Text>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
        <Divider text="or join with" />
        <View style={styles.socialbuttoncontainer}>
          <AppSocialButton
            icon={'facebook'}
            size={40}
            onPress={() =>
              Alert.alert('Alert!', 'Facebook Social Button Pressed!')
            }
          />
          <AppSocialButton
            icon={'google'}
            size={40}
            onPress={() =>
              Alert.alert('Alert!', 'Google Social Button Pressed!')
            }
          />
        </View>
        <View style={styles.lastlinecontainer}>
          <Text style={styles.lastline}>
            We will never post anything without your permission
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
