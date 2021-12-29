import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {colors, images} from '../../components/constants/constants';
import AppButton from '../../components/AppButton';
import Divider from '../../components/Divider';
import {styles} from './styles';
import SignUp from '../Sign_Up';
import SignIn from '../SignIn';
import {APP_HOME} from '../../navigation/routes';

const Login1 = ({navigation}) => {
  return (
    <ImageBackground source={images.login1background} style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginTop: '40%',
              width: '80%',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.APP_LOGO} />
            </View>
            <Text style={styles.text1}>Welcome to Fitfannie</Text>
            <Text style={styles.text2}>An Entry-Level Exercise</Text>
            <Text style={{...styles.text2, marginBottom: 20}}>
              Platform That Works!
            </Text>
            <AppButton
              style={{
                backgroundColor: colors.APP_COLOR_LIGHT3,
                marginBottom: 20,
              }}
              title="SIGN UP"
              onPress={() => {
                // Alert.alert('Alert!', 'SIGNUP Button Pressed!');
                navigation.navigate(SignUp);
              }}
            />
            <AppButton
              title="LOGIN"
              onPress={() => {
                // Alert.alert('Alert!', 'LOGIN Button Pressed!'),
                navigation.navigate(SignIn);
              }}
            />
          </View>
          <View style={{width: '100%', marginVertical: 40}}>
            <Divider
              text="or"
              lineStyle={{backgroundColor: colors.APP_COLOR_WHITE}}
              textStyle={{color: 'white'}}
            />
          </View>
          <View style={{width: '80%'}}>
            <AppButton
              title="SKIP TO DASHBOARD"
              onPress={() => {
                // Alert.alert('Alert!', 'SKIP TO DASHBOARD Button Pressed!');
                navigation.navigate(APP_HOME);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login1;
