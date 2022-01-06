import React, {useState} from 'react';
import {Text, View, Platform, Alert, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';
import AppToggleButton from '../../components/CustomButton';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {HEIGHT} from '../../navigation/routes';
import {styles} from './styles';
import WeightScreen from '../weight';
import AppSlider from '../../components/Slider';

const AgeScreen = ({navigation, route}) => {
  console.log('AgeScreen::::', route?.params);
  const [Age, setAge] = useState(18);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>Age</Text>
        <AppSlider onValueChange={setAge} renderValue={Age} />
        <Text style={styles.subTitle}>years old</Text>
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
              navigation.navigate(Age, {
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
