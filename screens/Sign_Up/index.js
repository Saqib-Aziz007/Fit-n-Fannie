import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import * as Yup from 'yup';
import {colors, images} from '../../components/constants/constants';
import Divider from '../../components/Divider';
import AppIconButton from '../../components/AppIconButton/index.js';
import AppSocialButton from '../../components/AppSocialButton.js';
import FormInput from '../../components/FormInput';
import AppButton from '../../components/AppButton';
import {HEALTH_APPROVAL} from '../../navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GoogleSignIn from '../../utils/Social_Login/GoogleSignIn';
import onFaceBookLogin from '../../utils/Social_Login/FacebookLogin';

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

const SignUp = ({navigation}) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const handleSignUp = async values => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.setItem('user', JSON.stringify(values));
    } catch (error) {
      console.log(error, 'error on storing userData');
    }
    navigation.navigate(HEALTH_APPROVAL, values);
  };

  console.log(user, 'user state');

  const checkUser = async () => {
    setLoading(true);
    let user = await AsyncStorage.getItem('user');

    console.log(user, 'user from cache');

    user = JSON.parse(user);
    if (user !== null) {
      setUser(user);
      console.log(user?.email, 'user from cache after parsing');
      // navigation.navigate(HOME);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.APP_COLOR_LIGHT1,
        // marginBottom: 50,
      }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.logocontainer}>
            <AppIconButton
              icon={'chevron-left'}
              size={32}
              style={{paddingTop: 0}}
              onPress={
                () => navigation.goBack()
                // console.log('back!!!!!')
                //  navigation.goBack();
              }
            />
            {/* <View> */}
            {/* <View style={styles.logo}> */}
            <Image
              source={images.APP_LOGO}
              style={{alignSelf: 'center', marginBottom: 20}}
            />
            {/* </View> */}
            <View style={{marginBottom: 50}}>
              <Text style={styles.tagline}>
                A habit-building exercise app designed
              </Text>
              <Text style={styles.tagline}>for beginners to become pros</Text>
            </View>
            {/* </View> */}
          </View>
          <View style={styles.formcontainer}>
            <Formik
              initialValues={{
                name: user?.name ? user?.name : '',
                email: user?.email ? user?.email : '',
                password: user?.password ? user?.password : '',
              }}
              validationSchema={ValidationSchema}
              onSubmit={handleSignUp}>
              {({values, handleChange, handleSubmit}) => {
                return (
                  <View>
                    <FormInput
                      label="NAME"
                      value={values.name}
                      textContentType="name"
                      onChangeText={handleChange('name')}
                      // style={{height: 40}}
                    />
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
                      style={{marginTop: 15, marginBottom: 25}}
                    />
                  </View>
                );
              }}
            </Formik>
          </View>
          <Divider text="or join with" />
          <View style={styles.socialbuttoncontainer}>
            <AppSocialButton
              size={40}
              icon={'facebook'}
              onPress={() => alert('alert')}
            />
            <AppSocialButton size={40} icon={'google'} onPress={GoogleSignIn} />
          </View>
          <View style={styles.lastlinecontainer}>
            <Text style={styles.lastline}>
              We will never post anything without your permission
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default SignUp;
