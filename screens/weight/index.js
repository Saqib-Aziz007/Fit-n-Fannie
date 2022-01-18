import React, {useState} from 'react';
import {Text, View, Platform, Alert, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';
import AppToggleButton from '../../components/CustomButton';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {HEIGHT, HEIGHT_SCREEN} from '../../navigation/routes';
import {styles} from './styles';

const WeightScreen = ({navigation, route}) => {
  console.log('WightScreen', route?.params);
  const [WeightUnit, setWeightUnit] = useState('LBS');
  const [weight, setWeight] = useState();
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
        <Text style={styles.title}>Weight</Text>
        <TextInput
          onChangeText={setWeight}
          keyboardType="numeric"
          style={styles.input}
        />
        <AppToggleButton
          state1="LBS"
          state2="KG"
          onPress={setWeightUnit}
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
            navigation.navigate(HEIGHT_SCREEN, {
              ...route.params,
              weight: {weight, WeightUnit},
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default WeightScreen;
