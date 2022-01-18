import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';
import AppSlider from '../../components/Slider';
import {GENDER_SCREEN} from '../../navigation/routes';

const AgeScreen = ({navigation, route}) => {
  console.log('AgeScreen::::', route?.params);
  const [Age, setAge] = useState(18);
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
        <Text style={styles.title}>Age</Text>
        <AppSlider
          onValueChange={val => setAge(Math.floor(val))}
          renderValue={Age}
        />
        <Text style={styles.subTitle}>years old</Text>
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
            navigation.navigate(GENDER_SCREEN, {
              ...route.params,
              Height: Age,
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default AgeScreen;
