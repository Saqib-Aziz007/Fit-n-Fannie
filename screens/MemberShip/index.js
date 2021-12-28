import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {colors} from '../../components/constants/constants';
import MembershipCard from '../../components/MembershipCard';
import {styles} from './styles';
import Button from '../../components/Button/index.js';
import AppIconButton from '../../components/AppIconButton';

const MembershipScreen = () => {
  return (
    // <SafeAreaView style={styles.scrollView}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppIconButton
          icon={'chevron-left'}
          backgroundColor={colors.APP_COLOR_LIGHT3}
          size={32}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Membership Plans</Text>
          <MembershipCard
            planPrice="7.99"
            planType="Monthly Plan"
            onPress={() => Alert.alert('Alert!', 'Monthly Plan Selected!')}
          />
          <MembershipCard
            planPrice="79.99"
            planType="Annual Plan"
            onPress={() => Alert.alert('Alert!', 'Annual Plan Selected!')}
          />
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <Button
              title={'CONTINUE'}
              style={{
                height: 56,
                marginBottom: 15,
              }}
            />
            <Text
              style={{fontSize: 14, fontWeight: '400', textAlign: 'center'}}>
              By continueing you agree to our{' '}
              <Text
                onPress={() => Alert.alert('Alert!', 'Privacy Policy')}
                style={{
                  textDecorationLine: 'underline',
                  fontStyle: 'italic',
                }}>
                Privacy Policy
              </Text>
              ,{' '}
              <Text
                onPress={() => Alert.alert('Alert!', 'Terms of Use')}
                style={{
                  textDecorationLine: 'underline',
                  fontStyle: 'italic',
                }}>
                Temrs of Use
              </Text>{' '}
              and{' '}
              <Text
                onPress={() => Alert.alert('Alert!', 'Billing Terms')}
                style={{
                  textDecorationLine: 'underline',
                  fontStyle: 'italic',
                }}>
                Billing Terms
              </Text>
              .
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default MembershipScreen;
