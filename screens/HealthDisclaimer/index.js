import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import {Checkbox} from 'react-native-paper';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';
import {styles} from './styles';
import AppButton from '../../components/AppButton';
// import Home from '../Home';
import {HEALTH_DISCLAIMER, WEIGHT_SCREEN} from '../../navigation/routes';

const HealthDisclaimer = ({navigation, route}) => {
  const [checkboxSelect, setCheckboxSelect] = useState(false);
  console.log('HealthDisclaimerScreen::::', route.params);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.backButton}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.disclaimer}>
        <Text style={styles.heading}>
          To continue, please read and agree to
        </Text>
        <Text style={styles.heading}>
          {'our '}
          <TouchableWithoutFeedback
            onPress={() => {
              // Alert.alert('Alert!', 'Health & Discalaimer'),
              navigation.navigate(HEALTH_DISCLAIMER);
            }}>
            <Text
              style={{
                ...styles.heading,
                textDecorationLine: 'underline',
                fontStyle: 'italic',
              }}>
              {'Health & Medical Disclaimer'}
            </Text>
          </TouchableWithoutFeedback>
        </Text>
        <TouchableOpacity
          style={styles.disclaimerButton}
          onPress={() => setCheckboxSelect(!checkboxSelect)}>
          {checkboxSelect ? (
            <Image
              source={require('../../assets/icons/Enabled.png')}
              style={styles.checkbox}
            />
          ) : (
            <Image
              source={require('../../assets/icons/Check_Box.png')}
              style={styles.checkbox}
            />
          )}
          <Text style={{flexWrap: 'nowrap', color: colors.APP_SECONDARY_COLOR}}>
            {
              'I confirm that I have read Fitfannie’s Health & Medical Disclaimer and by continuing I accept its terms.'
            }
          </Text>
        </TouchableOpacity>
      </View>
      <AppButton
        title={'Accept & Continue'}
        style={{marginHorizontal: 50, marginVertical: 25}}
        disabled={!checkboxSelect}
        onPress={() => {
          // Alert.alert('Alert!', 'Accept & Continue'),
          navigation.navigate(WEIGHT_SCREEN, route.params);
        }}
      />
    </ScrollView>
  );
};

export default HealthDisclaimer;
