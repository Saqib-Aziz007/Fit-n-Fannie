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

const WeightScreen = ({navigation, route}) => {
  console.log('WightScreen', route.params);
  const [WeightUnit, setWeightUnit] = useState('LBS');
  const [weight, setWeight] = useState();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          onPress={() => navigation.goBack()}
          //   style={{position: 'absolute'}}
        />
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>Weight</Text>
        <TextInput
          onChangeText={setWeight}
          keyboardType="numeric"
          //   selectionColor={colors.APP_COLOR_LIGHT2}
          style={styles.input}
        />
        <AppToggleButton
          state1="LBS"
          state2="KG"
          onPress={setWeightUnit}
          style={{alignSelf: 'center', marginTop: 25}}
        />
        <View style={styles.next}>
          <AppButton
            title={'NEXT'}
            onPress={() =>
              navigation.navigate(HEIGHT, {
                ...route.params,
                weight: {weight, WeightUnit},
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default WeightScreen;
