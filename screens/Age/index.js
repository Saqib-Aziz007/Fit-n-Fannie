import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppButton from '../../components/AppButton';
import {styles} from './styles';
import AppSlider from '../../components/Slider';
import {GENDER} from '../../navigation/routes';

const AgeScreen = ({navigation, route}) => {
  console.log('AgeScreen::::', route.params);
  const [Age, setAge] = useState(18);
  //   const [AgeUnit, setAgeUnit] = useState('FT');
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          onPress={() => navigation.goBack()}
          //   style={{position: 'absolute'}}
        />
        <View>
          <Text style={styles.screenTitle}>Account Setup</Text>
          <View style={styles.progressBar}></View>
          <Text style={styles.title}>Age</Text>
          <AppSlider
            onValueChange={val => setAge(Math.floor(val))}
            renderValue={Age}
          />
          <Text style={styles.subTitle}>years old</Text>
        </View>
        <View style={styles.next}>
          <AppButton
            title={'NEXT'}
            // onPress={() =>
            //   console.log('AgeScreen on submit::::', {
            //     ...route.params,
            //     Age: {Age},
            //   })
            // }
            onPress={() =>
              navigation.navigate(GENDER, {
                ...route.params,
                Age: Age,
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AgeScreen;
