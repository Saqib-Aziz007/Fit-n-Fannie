import React, {useState} from 'react';
import {Text, View, Platform, Alert, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';

import AppIconButton from '../../components/AppIconButton';
import {AGE_SCREEN} from '../../navigation/routes';
import AppToggleButton from '../../components/CustomButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';

const HeightScreen = ({navigation, route}) => {
  console.log('WightScreen', route?.params);
  const [HeightUnit, setHeightUnit] = useState('LBS');
  const [Height, setHeight] = useState();
  return (
    <ScrollView style={styles.scrollView}>
      <AppIconButton
        icon={'chevron-left'}
        size={32}
        onPress={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 40, marginBottom: 100}}>
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>Height</Text>
        <TextInput
          onChangeText={setHeight}
          keyboardType="numeric"
          style={styles.input}
        />
        <AppToggleButton
          state1="CM"
          state2="FT"
          onPress={setHeightUnit}
          style={{alignSelf: 'center', marginTop: 25}}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          marginVertical: Platform.OS === 'ios' ? 100 : 50,
        }}>
        <AppButton
          title={'NEXT'}
          style={{paddingHorizontal: 40}}
          onPress={() =>
            navigation.navigate(AGE_SCREEN, {
              ...route.params,
              Height: {Height, HeightUnit},
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default HeightScreen;
