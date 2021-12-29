import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';
import {styles} from './styles';

const HealthDisclaimer2 = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{backgroundColor: colors.APP_COLOR_LIGHT1}}>
        <AppIconButton
          icon={'close'}
          size={60}
          iconColor={colors.APP_COLOR_LIGHT3}
          backgroundColor={colors.APP_COLOR_LIGHT1}
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{'Health & Medical Disclaimer'}</Text>
        <Text style={styles.disclaimer}>
          {
            'The licensed application provided by Fitfannie is not a substitute for, and do not provide, medical advice. The licensed application is provided for personal educational, informational and convenience purposes only and is not to be used for the direction of care of individual patients. The licensed application is general in nature and is not intended in any way to be a substitute for a medical exam or professional medical advice, medical opinion, diagnosis or treatment, symptom assessment, health counseling or medical opinion for end users. Always seek the advice of appropriately qualified and regulated health providers with any questions you may have with regard to a specific medical condition. Never disregard or delay seeking consultative advice because of something you have read or viewed in the licensed application. We will not be liable for, and you waive any claim for, any personal injury, damage, and/or liability arising out of your use of or your reliance on the licensed application made available to you by  Fitfannie. Reliance on any information provided in the licensed application is solely at your own risk and you assume full responsibility for the use of the information.'
          }
        </Text>
      </View>
    </ScrollView>
  );
};

export default HealthDisclaimer2;
