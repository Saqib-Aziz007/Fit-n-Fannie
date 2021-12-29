import React, {useState} from 'react';
import {
  Alert,
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
import {APP_HOME, HEALTHDISCLAIMER} from '../../navigation/routes';

const HealthDisclaimer = ({navigation, route}) => {
  const [checkboxSelect, setCheckboxSelect] = useState(false);
  console.log('HealthDisclaimerScreen::::', route.params);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.backButton}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          style={{position: 'absolute', left: 30, top: 50}}
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
              navigation.navigate(HEALTHDISCLAIMER);
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
        style={{marginHorizontal: 50}}
        disabled={!checkboxSelect}
        onPress={() => {
          // Alert.alert('Alert!', 'Accept & Continue'),
          navigation.navigate(APP_HOME, route.params);
        }}
      />
    </ScrollView>
  );
};

export default HealthDisclaimer;
